// AI Robot 讨论会 - 讨论流程与总结逻辑

function startDiscussion() {
  const topic = document.getElementById("topic").value.trim();
  const currentToken = getCurrentAPIToken();

  if (!topic) {
    showNotification("请输入讨论话题！", "error");
    document.getElementById("topic").focus();
    return;
  }

  if (!isAPITokenValid(currentToken)) {
    showNotification("请先配置DeepSeek API Token！", "error");
    openAPISettingsDialog();
    return;
  }

  if (robots.length === 0) {
    saveRobots();
  }

  document.getElementById("current-topic").textContent = topic;
  document.getElementById("topic-display").style.display = "block";

  resetDiscussionState();
  generateRoundOrder();

  document.getElementById("start-btn").disabled = true;
  document.getElementById("pause-btn").disabled = false;
  document.getElementById("reset-discussion-btn").disabled = false;
  document.getElementById("discussion-area").innerHTML = "";
  document.getElementById("summary").style.display = "none";

  isDiscussionActive = true;
  isTurnInProgress = false;
  currentRobotIndex = 0;
  currentRound = 0;

  showNotification("讨论开始！", "success");
  scheduleNextDiscussionTurn();
}

function pauseDiscussion() {
  if (isDiscussionActive) {
    clearTimeout(discussionInterval);
    document.getElementById("pause-btn").textContent = "▶️ 继续";
    isDiscussionActive = false;
    showNotification("讨论已暂停", "info");
    return;
  }

  isDiscussionActive = true;
  document.getElementById("pause-btn").textContent = "⏸️ 暂停";

  if (!isTurnInProgress) {
    scheduleNextDiscussionTurn();
  }

  showNotification("讨论继续", "success");
}

function resetDiscussion() {
  clearTimeout(discussionInterval);
  isDiscussionActive = false;
  isTurnInProgress = false;

  document.getElementById("discussion-area").innerHTML = "";
  document.getElementById("summary").style.display = "none";
  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;
  document.getElementById("pause-btn").textContent = "⏸️ 暂停";

  resetDiscussionState();
  showNotification("讨论已重置", "info");
}

function resetDiscussionState() {
  discussionHistory = [];
  currentRound = 0;
  currentRobotIndex = 0;
  roundOrder = [];
  isTurnInProgress = false;
}

function generateRoundOrder() {
  roundOrder = [0, 1, 2];

  currentRobotIndex = 0;
}

function scheduleNextDiscussionTurn(delay = 800) {
  clearTimeout(discussionInterval);

  if (!isDiscussionActive || isTurnInProgress) {
    return;
  }

  discussionInterval = setTimeout(() => {
    nextDiscussionTurn();
  }, delay);
}

function nextDiscussionTurn() {
  if (!isDiscussionActive || isTurnInProgress) {
    return;
  }

  if (currentRound >= totalRounds) {
    endDiscussion();
    return;
  }

  isTurnInProgress = true;
  document.getElementById("loading").style.display = "block";

  (async () => {
    const robotIndex = roundOrder[currentRobotIndex];
    const robot = robots[robotIndex];
    const topic = document.getElementById("topic").value.trim();

    try {
      const response = await generateAIResponse(robot, topic, discussionHistory);

      discussionHistory.push({
        robot: robot.name,
        content: response,
        round: currentRound + 1,
        timestamp: new Date().toLocaleTimeString(),
      });

      displayMessage(robot, response, currentRound + 1);
      document.getElementById("loading").style.display = "none";

      currentRobotIndex += 1;
      if (currentRobotIndex >= robots.length) {
        currentRound += 1;
        if (currentRound < totalRounds) {
          generateRoundOrder();
        } else {
          endDiscussion();
          return;
        }
      }

      scrollToBottom();
    } catch (error) {
      console.error("生成回复失败:", error);
      document.getElementById("loading").style.display = "none";
      isDiscussionActive = false;
      document.getElementById("pause-btn").disabled = true;
      document.getElementById("start-btn").disabled = false;
      showNotification("生成回复时出错，请重试", "error");
    } finally {
      isTurnInProgress = false;

      if (isDiscussionActive && currentRound < totalRounds) {
        scheduleNextDiscussionTurn();
      }
    }
  })();
}

async function generateAIResponse(robot, topic, history) {
  try {
    const response = await callDeepSeekAPI(topic, robot, history);
    if (response.length > 140) {
      return `${response.substring(0, 137)}...`;
    }
    return response;
  } catch (error) {
    console.error("DeepSeek API调用失败:", error);
    showNotification("API调用失败，请检查网络连接和API Token", "error");
    throw error;
  }
}

function displayMessage(robot, content, round) {
  const discussionArea = document.getElementById("discussion-area");
  const messageDiv = document.createElement("div");
  const messageHeader = document.createElement("div");
  const avatarSpan = document.createElement("span");
  const nameSpan = document.createElement("span");
  const roundSpan = document.createElement("span");
  const contentDiv = document.createElement("div");
  const wordCount = document.createElement("div");

  messageDiv.className = "message";
  messageHeader.className = "message-header";
  avatarSpan.className = "robot-avatar";
  nameSpan.className = "robot-name";
  roundSpan.className = "round-number";
  contentDiv.className = "message-content";

  avatarSpan.textContent = robot.avatar || "🤖";
  nameSpan.textContent = robot.name;
  roundSpan.textContent = `第${round}轮`;
  contentDiv.textContent = content;

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

  messageDiv.offsetHeight;
  requestAnimationFrame(() => {
    messageDiv.style.opacity = "1";
    messageDiv.style.transform = "translateY(0) scale(1)";
  });
}

function endDiscussion() {
  clearTimeout(discussionInterval);
  isDiscussionActive = false;
  isTurnInProgress = false;

  document.getElementById("start-btn").disabled = false;
  document.getElementById("pause-btn").disabled = true;

  generateSummary();
}

async function generateSummary() {
  const summaryContent = document.getElementById("summary-content");
  const statsElement = document.getElementById("stats");
  const topic = document.getElementById("topic").value.trim();
  const totalMessages = discussionHistory.length;
  const robotStats = {};

  robots.forEach((robot) => {
    robotStats[robot.name] = {
      count: discussionHistory.filter((msg) => msg.robot === robot.name).length,
      avatar: robot.avatar,
    };
  });

  document.getElementById("summary").style.display = "block";
  summaryContent.textContent = "正在调用 DeepSeek 生成讨论总结...";

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

  try {
    const summaryText = await callDeepSeekSummaryAPI(topic, discussionHistory);
    summaryContent.textContent = summaryText;
    showNotification("讨论结束！已生成总结", "success");
  } catch (error) {
    console.error("生成总结失败:", error);
    summaryContent.textContent = buildFallbackSummary(topic, totalMessages);
    showNotification("总结生成失败，已显示本地摘要", "warning");
  }
}

function buildFallbackSummary(topic, totalMessages) {
  let summaryText = `关于"${topic}"的讨论已经完成。`;
  summaryText += `在${totalRounds}轮讨论中，三位AI机器人共发表了${totalMessages}次观点。`;
  summaryText += "\n\n主要讨论要点：\n";

  const keyPoints = extractKeyPoints();
  keyPoints.forEach((point, index) => {
    summaryText += `${index + 1}. ${point}\n`;
  });

  summaryText += `\n通过这次讨论，我们可以看到不同视角对"${topic}"的理解和见解。`;
  summaryText += "每个机器人都从自己的角色定位出发，提供了有价值的观点。";
  return summaryText;
}

function extractKeyPoints() {
  const points = new Set();

  robots.forEach((robot) => {
    const robotMessages = discussionHistory.filter((msg) => msg.robot === robot.name);

    if (robotMessages.length > 0) {
      const lastMessage = robotMessages[robotMessages.length - 1].content;
      const simplified =
        lastMessage.substring(0, 60) + (lastMessage.length > 60 ? "..." : "");
      points.add(`${robot.name}：${simplified}`);
    }
  });

  return Array.from(points);
}