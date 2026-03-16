// AI Robot 讨论会 - JavaScript 逻辑
// 三个AI机器人轮流讨论，每次发言不超过140字，10轮后自动总结
// 支持DeepSeek API生成回复和模拟回复两种模式

// 全局变量
let robots = [];
let discussionHistory = [];
let currentRound = 0;
let totalRounds = 10;
let isDiscussionActive = false;
let discussionInterval = null;
let currentRobotIndex = 0;
let useDeepSeekAPI = false;
let apiToken = "";

// DOM 加载完成后初始化
document.addEventListener("DOMContentLoaded", function () {
  // 初始化角色字数统计
  initCharacterCounters();

  // 从本地存储加载保存的设置
  loadSavedRobots();

  // 设置按钮事件监听器
  setupEventListeners();

  // 加载保存的API设置
  loadAPISettings();

  // 初始化默认机器人
  if (!localStorage.getItem("aiRobotsSaved")) {
    resetRobotsToDefault();
  }
});

// 初始化字符计数器
function initCharacterCounters() {
  updateCharacterCount("robot1-role", "robot1-count");
  updateCharacterCount("robot2-role", "robot2-count");
  updateCharacterCount("robot3-role", "robot3-count");
  updateCharacterCount("topic", "topic-count");
}

// 更新字符计数
function updateCharacterCount(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const countElement = document.getElementById(countId);

  if (!textarea || !countElement) return;

  const updateCount = function () {
    const length = textarea.value.length;
    const maxLength = parseInt(textarea.getAttribute("maxlength")) || 300;
    countElement.textContent = `${length}/${maxLength}`;

    if (length > maxLength * 0.9) {
      countElement.classList.add("warning");
    } else {
      countElement.classList.remove("warning");
    }
  };

  textarea.addEventListener("input", updateCount);
  updateCount(); // 初始更新
}

// 设置事件监听器
function setupEventListeners() {
  // 保存角色按钮
  document.getElementById("save-btn").addEventListener("click", saveRobots);

  // 重置角色按钮
  document
    .getElementById("reset-btn")
    .addEventListener("click", resetRobotsToDefault);

  // 开始讨论按钮
  document
    .getElementById("start-btn")
    .addEventListener("click", startDiscussion);

  // 暂停讨论按钮
  document
    .getElementById("pause-btn")
    .addEventListener("click", pauseDiscussion);

  // 重置讨论按钮
  document
    .getElementById("reset-discussion-btn")
    .addEventListener("click", resetDiscussion);

  // 测试API按钮
  document
    .getElementById("test-api-btn")
    .addEventListener("click", testAPIConnection);

  // API Token输入框变化监听
  document
    .getElementById("api-token")
    .addEventListener("input", saveAPISettings);

  // API模式切换开关
  document
    .getElementById("use-api-toggle")
    .addEventListener("change", toggleAPIMode);
}

// 保存机器人设置
function saveRobots() {
  robots = [
    {
      name: document.getElementById("robot1-name").value || "智慧学者",
      role:
        document.getElementById("robot1-role").value ||
        "一位博学多才的学者，擅长逻辑分析和理性思考",
      style: document.getElementById("robot1-style").value || "formal",
      avatar: "🤓",
    },
    {
      name: document.getElementById("robot2-name").value || "创新先锋",
      role:
        document.getElementById("robot2-role").value ||
        "一位富有创造力的思想家",
      style: document.getElementById("robot2-style").value || "friendly",
      avatar: "🚀",
    },
    {
      name: document.getElementById("robot3-name").value || "实践专家",
      role:
        document.getElementById("robot3-role").value ||
        "一位注重实际应用的专家",
      style: document.getElementById("robot3-style").value || "critical",
      avatar: "🔧",
    },
  ];

  // 保存到本地存储
  localStorage.setItem("aiRobots", JSON.stringify(robots));
  localStorage.setItem("aiRobotsSaved", "true");

  // 显示成功消息
  showNotification("角色设置已保存！", "success");
}

// 加载API设置
function loadAPISettings() {
  const savedToken = localStorage.getItem("deepseekApiToken");
  const savedUseAPI = localStorage.getItem("useDeepSeekAPI");

  if (savedToken) {
    document.getElementById("api-token").value = savedToken;
    apiToken = savedToken;
  }

  if (savedUseAPI === "true") {
    useDeepSeekAPI = true;
    document.getElementById("use-api-toggle").checked = true;
    document.getElementById("api-token-section").style.display = "block";
    document.getElementById("test-api-btn").style.display = "inline-block";

    if (apiToken) {
      updateAPIStatus("connected");
      updateModeIndicator("api");
    } else {
      updateAPIStatus("disconnected");
      updateModeIndicator("simulated");
    }
  } else {
    useDeepSeekAPI = false;
    document.getElementById("use-api-toggle").checked = false;
    document.getElementById("api-token-section").style.display = "none";
    document.getElementById("test-api-btn").style.display = "none";
    updateModeIndicator("simulated");
  }
}

// 保存API设置
function saveAPISettings() {
  const token = document.getElementById("api-token").value.trim();
  if (token) {
    localStorage.setItem("deepseekApiToken", token);
    apiToken = token;
    if (useDeepSeekAPI) {
      updateAPIStatus("connected");
      updateModeIndicator("api");
      showNotification("API Token已保存", "success");
    }
  } else {
    localStorage.removeItem("deepseekApiToken");
    apiToken = "";
    if (useDeepSeekAPI) {
      updateAPIStatus("disconnected");
      updateModeIndicator("simulated");
    }
  }
}

// 更新API状态显示
function updateAPIStatus(status) {
  const statusElement = document.createElement("span");
  statusElement.className = `api-status ${status}`;

  switch (status) {
    case "connected":
      statusElement.textContent = "已连接";
      break;
    case "disconnected":
      statusElement.textContent = "未连接";
      break;
    case "testing":
      statusElement.textContent = "测试中";
      break;
  }

  // 移除旧的status并添加新的
  const oldStatus = document.querySelector(".api-status");
  if (oldStatus) {
    oldStatus.remove();
  }

  const apiSettings = document.querySelector(".api-settings h3");
  if (apiSettings) {
    apiSettings.appendChild(statusElement);
  }
}

// 更新模式指示器
function updateModeIndicator(mode) {
  const indicator = document.getElementById("mode-indicator");
  if (!indicator) return;

  if (mode === "api") {
    indicator.textContent = "API模式";
    indicator.className = "mode-indicator api";
  } else {
    indicator.textContent = "模拟模式";
    indicator.className = "mode-indicator simulated";
  }
}

// 切换API模式
function toggleAPIMode() {
  const useAPI = document.getElementById("use-api-toggle").checked;
  const tokenSection = document.getElementById("api-token-section");
  const testBtn = document.getElementById("test-api-btn");

  if (useAPI) {
    tokenSection.style.display = "block";
    testBtn.style.display = "inline-block";
    useDeepSeekAPI = true;
    localStorage.setItem("useDeepSeekAPI", "true");

    const token = document.getElementById("api-token").value.trim();
    if (token) {
      apiToken = token;
      updateAPIStatus("connected");
      updateModeIndicator("api");
      showNotification("已启用API模式", "success");
    } else {
      updateAPIStatus("disconnected");
      updateModeIndicator("simulated");
      showNotification("请输入API Token以使用API模式", "warning");
    }
  } else {
    tokenSection.style.display = "none";
    testBtn.style.display = "none";
    useDeepSeekAPI = false;
    localStorage.setItem("useDeepSeekAPI", "false");
    updateModeIndicator("simulated");
    showNotification("已切换为模拟模式", "info");
  }
}

// 测试API连接
async function testAPIConnection() {
  const token = document.getElementById("api-token").value.trim();

  if (!token) {
    showNotification("请输入API Token", "error");
    return;
  }

  updateAPIStatus("testing");

  try {
    // 创建一个简单的测试机器人
    const testRobot = {
      name: "测试助手",
      role: "这是一个测试消息，用于验证API连接是否正常。",
      style: "friendly",
    };

    const response = await callDeepSeekAPI(
      "你好，请回复'连接成功'来确认API正常工作。",
      testRobot,
      [],
    );

    if (
      response &&
      (response.includes("连接成功") || response.includes("成功"))
    ) {
      updateAPIStatus("connected");
      showNotification("API连接测试成功！", "success");
      saveAPISettings();
    } else {
      updateAPIStatus("disconnected");
      showNotification("API返回了意外响应，但连接似乎正常", "warning");
    }
  } catch (error) {
    updateAPIStatus("disconnected");
    updateModeIndicator("simulated");
    showNotification(`API连接失败: ${error.message}`, "error");
    console.error("API测试失败:", error);
  }
}

// 加载保存的机器人设置
function loadSavedRobots() {
  const savedRobots = localStorage.getItem("aiRobots");
  if (savedRobots) {
    try {
      robots = JSON.parse(savedRobots);

      // 更新表单
      if (robots[0]) {
        document.getElementById("robot1-name").value = robots[0].name;
        document.getElementById("robot1-role").value = robots[0].role;
        document.getElementById("robot1-style").value = robots[0].style;
      }

      if (robots[1]) {
        document.getElementById("robot2-name").value = robots[1].name;
        document.getElementById("robot2-role").value = robots[1].role;
        document.getElementById("robot2-style").value = robots[1].style;
      }

      if (robots[2]) {
        document.getElementById("robot3-name").value = robots[2].name;
        document.getElementById("robot3-role").value = robots[2].role;
        document.getElementById("robot3-style").value = robots[2].style;
      }

      // 更新字符计数
      initCharacterCounters();
    } catch (e) {
      console.error("加载保存的机器人设置失败:", e);
      resetRobotsToDefault();
    }
  }
}

// 重置为默认机器人设置
function resetRobotsToDefault() {
  document.getElementById("robot1-name").value = "智慧学者";
  document.getElementById("robot1-role").value =
    "一位博学多才的学者，擅长逻辑分析和理性思考。注重事实依据，喜欢从历史和经验中寻找答案。说话严谨，条理清晰。";
  document.getElementById("robot1-style").value = "formal";

  document.getElementById("robot2-name").value = "创新先锋";
  document.getElementById("robot2-role").value =
    "一位富有创造力的思想家，总是寻找新的可能性和解决方案。喜欢挑战传统观念，拥抱变化和创新。思维跳跃，充满想象力。";
  document.getElementById("robot2-style").value = "friendly";

  document.getElementById("robot3-name").value = "实践专家";
  document.getElementById("robot3-role").value =
    "一位注重实际应用的专家，关注可行性和现实约束。善于将理论转化为实践，考虑成本和效益。说话直接，务实高效。";
  document.getElementById("robot3-style").value = "critical";

  // 更新字符计数
  initCharacterCounters();

  // 保存默认设置
  saveRobots();

  showNotification("已重置为默认角色设置", "info");
}

// 开始讨论
function startDiscussion() {
  const topic = document.getElementById("topic").value.trim();

  if (!topic) {
    showNotification("请输入讨论话题！", "error");
    document.getElementById("topic").focus();
    return;
  }

  // 确保机器人设置已保存
  if (robots.length === 0) {
    saveRobots();
  }

  // 显示当前话题
  document.getElementById("current-topic").textContent = topic;
  document.getElementById("topic-display").style.display = "block";

  // 重置讨论状态
  resetDiscussionState();

  // 更新按钮状态
  document.getElementById("start-btn").disabled = true;
  document.getElementById("pause-btn").disabled = false;
  document.getElementById("reset-discussion-btn").disabled = false;

  // 清空讨论区域
  document.getElementById("discussion-area").innerHTML = "";
  document.getElementById("summary").style.display = "none";

  // 开始讨论循环
  isDiscussionActive = true;
  currentRobotIndex = 0;
  currentRound = 0;

  showNotification("讨论开始！", "success");

  // 开始第一轮讨论
  discussionInterval = setInterval(nextDiscussionTurn, 1500);
}

// 暂停讨论
function pauseDiscussion() {
  if (isDiscussionActive) {
    clearInterval(discussionInterval);
    document.getElementById("pause-btn").textContent = "▶️ 继续";
    isDiscussionActive = false;
    showNotification("讨论已暂停", "info");
  } else {
    discussionInterval = setInterval(nextDiscussionTurn, 1500);
    document.getElementById("pause-btn").textContent = "⏸️ 暂停";
    isDiscussionActive = true;
    showNotification("讨论继续", "success");
  }
}

// 重置讨论
function resetDiscussion() {
  clearInterval(discussionInterval);
  isDiscussionActive = false;

  document.getElementById("discussion-area").innerHTML = "";
  document.getElementById("summary").style.display = "none";
  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;
  document.getElementById("pause-btn").textContent = "⏸️ 暂停";

  resetDiscussionState();

  showNotification("讨论已重置", "info");
}

// 重置讨论状态
function resetDiscussionState() {
  discussionHistory = [];
  currentRound = 0;
  currentRobotIndex = 0;
}

// 下一个讨论回合
function nextDiscussionTurn() {
  if (currentRound >= totalRounds) {
    endDiscussion();
    return;
  }

  // 显示加载状态
  document.getElementById("loading").style.display = "block";

  // 模拟AI思考时间
  setTimeout(async () => {
    const robot = robots[currentRobotIndex];
    const topic = document.getElementById("topic").value.trim();

    try {
      // 生成AI回复
      const response = await generateAIReponse(robot, topic, discussionHistory);

      // 添加到历史记录
      discussionHistory.push({
        robot: robot.name,
        content: response,
        round: currentRound + 1,
        timestamp: new Date().toLocaleTimeString(),
      });

      // 显示消息
      displayMessage(robot, response, currentRound + 1);

      // 隐藏加载状态
      document.getElementById("loading").style.display = "none";

      // 更新索引和轮次
      currentRobotIndex = (currentRobotIndex + 1) % robots.length;
      if (currentRobotIndex === 0) {
        currentRound++;
      }

      // 滚动到底部
      scrollToBottom();
    } catch (error) {
      console.error("生成回复失败:", error);
      document.getElementById("loading").style.display = "none";
      showNotification("生成回复时出错，请重试", "error");
    }
  }, 800);
}

// 生成AI回复
async function generateAIReponse(robot, topic, history) {
  // 如果启用了DeepSeek API并且有token，使用API生成回复
  if (useDeepSeekAPI && apiToken) {
    try {
      const response = await callDeepSeekAPI(topic, robot, history);
      // 确保不超过140字
      if (response.length > 140) {
        return response.substring(0, 137) + "...";
      }
      return response;
    } catch (error) {
      console.error("DeepSeek API调用失败，使用模拟回复:", error);
      showNotification("API调用失败，自动切换为模拟回复", "warning");
      // 失败时自动切换到模拟模式
      useDeepSeekAPI = false;
      document.getElementById("use-api-toggle").checked = false;
      document.getElementById("api-token-section").style.display = "none";
      document.getElementById("test-api-btn").style.display = "none";
      updateModeIndicator("simulated");
      localStorage.setItem("useDeepSeekAPI", "false");
      // 使用模拟回复
      return generateSimulatedResponse(robot, topic, history);
    }
  } else {
    // 使用模拟回复
    return generateSimulatedResponse(robot, topic, history);
  }
}

// 调用DeepSeek API
async function callDeepSeekAPI(topic, robot, history) {
  const recentHistory = history.slice(-3);

  // 构建系统提示
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

  // 构建用户消息
  let userMessage = `请以${robot.name}的身份就"${topic}"发表看法（请确保回复在140字以内）`;

  if (recentHistory.length > 0) {
    userMessage += "\n\n最近的讨论：";
    recentHistory.forEach((msg, index) => {
      userMessage += `\n${msg.robot}：${msg.content}`;
    });
    userMessage += `\n\n请基于以上讨论继续发言。`;
  }

  try {
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          {
            role: "user",
            content: userMessage,
          },
        ],
        max_tokens: 150, // 减少token数量以确保回复简短
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      let errorMessage = `API请求失败: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData.error && errorData.error.message) {
          errorMessage = errorData.error.message;
        }
      } catch (e) {
        // 忽略JSON解析错误
      }
      throw new Error(errorMessage);
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error("API返回了无效的响应格式");
    }
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      throw new Error("网络连接失败，请检查网络设置");
    }
    throw error;
  }
}

// 生成模拟回复（备用方案）
function generateSimulatedResponse(robot, topic, history) {
  const recentHistory = history.slice(-3);

  // 生成回复内容（模拟AI思考）
  const responses = generateResponsesBasedOnRole(robot, topic, recentHistory);

  // 随机选择一个回复，但确保不超过140字
  let response = responses[Math.floor(Math.random() * responses.length)];

  // 确保不超过140字
  if (response.length > 140) {
    response = response.substring(0, 137) + "...";
  }

  return response;
}

// 根据角色生成回复选项
function generateResponsesBasedOnRole(robot, topic, recentHistory) {
  const role = robot.name.toLowerCase();
  const style = robot.style;

  let responses = [];

  // 基础回复模板
  const baseResponses = [
    `关于${topic}，我认为这是一个值得深入探讨的话题。`,
    `从我的角度来看，${topic}涉及到多个层面的问题。`,
    `我对${topic}的看法是，我们需要综合考虑各种因素。`,
    `在讨论${topic}时，我们应该关注其长期影响。`,
  ];

  // 根据角色添加特定回复
  if (role.includes("智慧") || role.includes("学者")) {
    responses = responses.concat([
      `作为学者，我认为${topic}需要从历史和理论的角度来分析。`,
      `从学术角度看，${topic}的研究应该基于严谨的数据和逻辑。`,
      `历史上类似${topic}的问题给我们提供了宝贵的经验教训。`,
      `关于${topic}，现有的研究成果表明我们需要更加理性的思考。`,
    ]);
  }

  if (role.includes("创新") || role.includes("先锋")) {
    responses = responses.concat([
      `对于${topic}，我认为我们需要跳出传统思维框架来寻找新的解决方案。`,
      `创新是解决${topic}问题的关键，我们应该大胆尝试新的方法。`,
      `未来的${topic}可能会以我们意想不到的方式发展，我们需要保持开放心态。`,
      `关于${topic}，我看到了许多创新的可能性等待我们去探索。`,
    ]);
  }

  if (role.includes("实践") || role.includes("专家")) {
    responses = responses.concat([
      `在实践层面，${topic}需要考虑具体的实施成本和可行性。`,
      `关于${topic}，我们需要关注实际操作中可能遇到的挑战。`,
      `从实际应用的角度看，${topic}的解决方案应该注重效率和效果。`,
      `对于${topic}，我认为最重要的是找到切实可行的实施方案。`,
    ]);
  }

  // 根据发言风格调整语气
  responses = responses.map((response) => {
    switch (style) {
      case "friendly":
        return response.replace("我认为", "我觉得").replace("需要", "可能需要");
      case "critical":
        return response + " 但我们也需要批判性地审视这个问题。";
      case "creative":
        return response + " 或许我们可以从完全不同的角度来思考这个问题。";
      case "humorous":
        return response + " 当然，如果这个问题像煮面条一样简单就好了！";
      default:
        return response;
    }
  });

  // 如果有最近的讨论历史，添加回应
  if (recentHistory.length > 0) {
    const lastSpeaker = recentHistory[recentHistory.length - 1];
    if (lastSpeaker.robot !== robot.name) {
      responses.push(`我同意${lastSpeaker.robot}的部分观点，但我想补充一点...`);
      responses.push(`${lastSpeaker.robot}提到的内容很有启发性，这让我想到...`);
      responses.push(`对于${lastSpeaker.robot}的观点，我有一些不同的看法...`);
    }
  }

  return responses.length > 0 ? responses : baseResponses;
}

// 显示消息
function displayMessage(robot, content, round) {
  const discussionArea = document.getElementById("discussion-area");

  const messageDiv = document.createElement("div");
  messageDiv.className = "message";

  const messageHeader = document.createElement("div");
  messageHeader.className = "message-header";

  const avatarSpan = document.createElement("span");
  avatarSpan.className = "robot-avatar";
  avatarSpan.textContent = robot.avatar || "🤖";

  const nameSpan = document.createElement("span");
  nameSpan.className = "robot-name";
  nameSpan.textContent = robot.name;

  const roundSpan = document.createElement("span");
  roundSpan.className = "round-number";
  roundSpan.textContent = `第${round}轮`;

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = content;

  // 添加字数统计
  const wordCount = document.createElement("div");
  wordCount.style.fontSize = "0.8rem";
  wordCount.style.color = "#666";
  wordCount.style.textAlign = "right";
  wordCount.style.marginTop = "5px";
  wordCount.textContent = `${content.length}字`;

  messageHeader.appendChild(avatarSpan);
  messageHeader.appendChild(nameSpan);
  messageHeader.appendChild(roundSpan);

  messageDiv.appendChild(messageHeader);
  messageDiv.appendChild(contentDiv);
  messageDiv.appendChild(wordCount);

  discussionArea.appendChild(messageDiv);
}

// 结束讨论
function endDiscussion() {
  clearInterval(discussionInterval);
  isDiscussionActive = false;

  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;

  // 生成总结
  generateSummary();

  showNotification("讨论结束！已生成总结", "success");
}

// 生成总结
function generateSummary() {
  const summaryContent = document.getElementById("summary-content");
  const statsElement = document.getElementById("stats");

  // 分析讨论内容
  const topic = document.getElementById("topic").value.trim();
  const totalMessages = discussionHistory.length;

  // 统计每个机器人的发言次数
  const robotStats = {};
  robots.forEach((robot) => {
    robotStats[robot.name] = {
      count: discussionHistory.filter((msg) => msg.robot === robot.name).length,
      avatar: robot.avatar,
    };
  });

  // 生成总结文本
  let summaryText = `关于"${topic}"的讨论已经完成。`;
  summaryText += `在${totalRounds}轮讨论中，三位AI机器人共发表了${totalMessages}次观点。`;
  summaryText += `\n\n主要讨论要点：\n`;

  // 提取关键观点（简单实现）
  const keyPoints = extractKeyPoints();
  keyPoints.forEach((point, index) => {
    summaryText += `${index + 1}. ${point}\n`;
  });

  summaryText += `\n通过这次讨论，我们可以看到不同视角对"${topic}"的理解和见解。`;
  summaryText += `每个机器人都从自己的角色定位出发，提供了有价值的观点。`;

  summaryContent.textContent = summaryText;

  // 生成统计数据
  let statsHTML = "";
  Object.keys(robotStats).forEach((robotName) => {
    const stats = robotStats[robotName];
    statsHTML += `
            <div class="stat-item">
                <div class="stat-value">${stats.count}</div>
                <div class="stat-label">${stats.avatar} ${robotName}发言次数</div>
            </div>
        `;
  });

  statsHTML += `
        <div class="stat-item">
            <div class="stat-value">${totalRounds}</div>
            <div class="stat-label">总讨论轮数</div>
        </div>
        <div class="stat-item">
            <div class="stat-value">${totalMessages}</div>
            <div class="stat-label">总发言次数</div>
        </div>
    `;

  statsElement.innerHTML = statsHTML;

  // 显示总结区域
  document.getElementById("summary").style.display = "block";
}

// 提取关键观点
function extractKeyPoints() {
  const points = new Set();

  // 简单提取：取每个机器人的最后一条发言作为关键观点
  robots.forEach((robot) => {
    const robotMessages = discussionHistory.filter(
      (msg) => msg.robot === robot.name,
    );
    if (robotMessages.length > 0) {
      const lastMessage = robotMessages[robotMessages.length - 1].content;
      // 简化消息作为关键点
      const simplified =
        lastMessage.substring(0, 60) + (lastMessage.length > 60 ? "..." : "");
      points.add(`${robot.name}：${simplified}`);
    }
  });

  return Array.from(points);
}

// 显示通知
function showNotification(message, type = "info") {
  // 创建通知元素
  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.padding = "15px 20px";
  notification.style.borderRadius = "8px";
  notification.style.color = "white";
  notification.style.fontWeight = "600";
  notification.style.zIndex = "1000";
  notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  notification.style.animation = "fadeIn 0.3s ease";

  // 根据类型设置颜色
  switch (type) {
    case "success":
      notification.style.background =
        "linear-gradient(135deg, #48bb78 0%, #38a169 100%)";
      break;
    case "error":
      notification.style.background =
        "linear-gradient(135deg, #f56565 0%, #e53e3e 100%)";
      break;
    case "warning":
      notification.style.background =
        "linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)";
      break;
    default:
      notification.style.background =
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
  }

  notification.textContent = message;

  // 添加到页面
  document.body.appendChild(notification);

  // 3秒后移除
  setTimeout(() => {
    notification.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// 滚动到底部
function scrollToBottom() {
  const discussionArea = document.getElementById("discussion-area");
  if (discussionArea) {
    discussionArea.scrollTop = discussionArea.scrollHeight;
  }
}

// 检查API Token是否有效
function isAPITokenValid(token) {
  return token && token.length > 10 && token.startsWith("sk-");
}

// 显示API使用说明
function showAPIUsageInfo() {
  const info = `
使用说明：
1. 获取DeepSeek API Token：访问 https://platform.deepseek.com/api_keys
2. 将Token粘贴到输入框中，点击"测试API连接"验证
3. 如果API连接成功，讨论将使用真实的AI生成回复
4. 如果没有API Token，系统将使用模拟回复模式

注意事项：
- API Token仅存储在您的本地浏览器中
- 每次讨论会消耗API额度，请合理使用
- 确保回复内容不超过140字
  `;
  console.log(info);
}

// 初始化时显示使用说明
document.addEventListener("DOMContentLoaded", function () {
  showAPIUsageInfo();

  // 初始化模式指示器
  if (useDeepSeekAPI && apiToken) {
    updateModeIndicator("api");
  } else {
    updateModeIndicator("simulated");
  }
});

// 添加CSS动画
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
`;
document.head.appendChild(style);
