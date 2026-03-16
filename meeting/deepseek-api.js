// AI Robot 讨论会 - DeepSeek API 调用逻辑

function buildDeepSeekMessages(topic, robot, history) {
  const recentHistory = history.slice(-3);

  const systemPrompt = `你是一个AI讨论参与者，你的角色是：${robot.name}
角色设定：${robot.role}
发言风格：${robot.style}

当前讨论话题：${topic}

重要规则：
1. 你的每次发言必须严格控制在140字以内（非常重要！）
2. 发言要符合你的角色设定和发言风格
3. 如果前面有讨论，请适当回应前面的观点
4. 保持讨论的连贯性和深度
5. 请用中文回复`;

  let userMessage = `请以${robot.name}的身份就"${topic}"发表看法（请确保回复在140字以内）`;

  if (recentHistory.length > 0) {
    userMessage += "\n\n最近的讨论：";
    recentHistory.forEach((msg) => {
      userMessage += `\n${msg.robot}：${msg.content}`;
    });
    userMessage += "\n\n请基于以上讨论继续发言。";
  }

  return [
    {
      role: "system",
      content: systemPrompt,
    },
    {
      role: "user",
      content: userMessage,
    },
  ];
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function parseDeepSeekError(response) {
  const statusMessages = {
    400: "请求参数不合法",
    401: "API Token 无效或已过期",
    402: "账户额度不足",
    429: "请求过于频繁，请稍后重试",
    500: "DeepSeek 服务暂时不可用",
    502: "DeepSeek 网关异常，请稍后重试",
    503: "DeepSeek 服务繁忙，请稍后重试",
    504: "DeepSeek 响应超时，请稍后重试",
  };

  let detail = "";

  try {
    const errorData = await response.json();
    detail =
      errorData?.error?.message ||
      errorData?.message ||
      errorData?.detail ||
      "";
  } catch (jsonError) {
    try {
      detail = (await response.text()).trim();
    } catch (textError) {
      detail = "";
    }
  }

  const baseMessage = statusMessages[response.status] || `API请求失败: ${response.status}`;
  return detail ? `${baseMessage} (${detail})` : baseMessage;
}

async function requestDeepSeek(messages, token, options = {}) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => {
    controller.abort();
  }, DEEPSEEK_TIMEOUT_MS);

  try {
    const response = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      signal: controller.signal,
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages,
        temperature: options.isTest ? 0 : 0.7,
      }),
    });

    if (!response.ok) {
      const error = new Error(await parseDeepSeekError(response));
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    const content = data?.choices?.[0]?.message?.content;

    if (typeof content === "string" && content.trim()) {
      return content.trim();
    }

    console.error("API响应格式异常:", data);
    throw new Error("API返回了无效的响应格式");
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("请求超时，请稍后重试");
    }

    if (error.name === "TypeError") {
      throw new Error("网络连接失败，或浏览器拦截了跨域请求");
    }

    throw error;
  } finally {
    clearTimeout(timeoutId);
  }
}

async function callDeepSeekWithMessages(messages, options = {}) {
  const token = normalizeAPIToken(options.token || getCurrentAPIToken());

  if (!isAPITokenValid(token)) {
    throw new Error("API Token 无效，请重新配置");
  }

  let lastError = null;

  for (let attempt = 0; attempt <= DEEPSEEK_MAX_RETRIES; attempt += 1) {
    try {
      return await requestDeepSeek(messages, token, options);
    } catch (error) {
      lastError = error;
      const shouldRetry =
        attempt < DEEPSEEK_MAX_RETRIES &&
        (error.message.includes("超时") ||
          error.message.includes("服务繁忙") ||
          error.message.includes("请求过于频繁") ||
          error.status >= 500);

      if (!shouldRetry) {
        throw error;
      }

      await delay(1000 * (attempt + 1));
    }
  }

  throw lastError || new Error("DeepSeek API调用失败");
}

function buildDeepSeekSummaryMessages(topic, history) {
  const discussionText = history
    .map((msg, index) => `${index + 1}. 第${msg.round}轮 ${msg.robot}：${msg.content}`)
    .join("\n");

  return [
    {
      role: "system",
      content:
        "你是一名中文讨论总结助手。请基于给定讨论记录，提炼出简洁、结构化、可直接展示给用户的总结。",
    },
    {
      role: "user",
      content: `请总结以下关于“${topic}”的讨论。\n\n要求：\n1. 先用1段话概括整体结论。\n2. 然后输出“主要讨论要点：”标题。\n3. 在标题下列出3到5条编号要点。\n4. 语言简洁、自然、中文输出。\n5. 不要编造讨论中没有出现的观点。\n\n讨论记录：\n${discussionText}`,
    },
  ];
}

async function callDeepSeekSummaryAPI(topic, history, options = {}) {
  const messages = buildDeepSeekSummaryMessages(topic, history);
  return callDeepSeekWithMessages(messages, { ...options, temperature: 0.4 });
}

async function callDeepSeekAPI(topic, robot, history, options = {}) {
  const messages = buildDeepSeekMessages(topic, robot, history);
  return callDeepSeekWithMessages(messages, options);
}