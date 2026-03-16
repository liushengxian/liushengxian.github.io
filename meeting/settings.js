// AI Robot 讨论会 - 设置与弹窗逻辑

function openRobotSettingsDialog() {
  const dialog = document.getElementById("robot-settings-dialog");

  loadSavedRobotsToForm();
  dialog.showModal();
}

function openAPISettingsDialog() {
  const dialog = document.getElementById("api-settings-dialog");

  hideAPIError();
  hideAPISuccess();
  loadAPISettings();
  dialog.showModal();
}

function loadSavedRobotsToForm() {
  const savedRobots = localStorage.getItem("aiRobots");

  if (!savedRobots) {
    return;
  }

  try {
    const parsedRobots = JSON.parse(savedRobots);

    if (parsedRobots[0]) {
      document.getElementById("robot1-name").value = parsedRobots[0].name;
      document.getElementById("robot1-role").value = parsedRobots[0].role;
      document.getElementById("robot1-style").value = parsedRobots[0].style;
    }

    if (parsedRobots[1]) {
      document.getElementById("robot2-name").value = parsedRobots[1].name;
      document.getElementById("robot2-role").value = parsedRobots[1].role;
      document.getElementById("robot2-style").value = parsedRobots[1].style;
    }

    if (parsedRobots[2]) {
      document.getElementById("robot3-name").value = parsedRobots[2].name;
      document.getElementById("robot3-role").value = parsedRobots[2].role;
      document.getElementById("robot3-style").value = parsedRobots[2].style;
    }

    initCharacterCounters();
  } catch (error) {
    console.error("加载保存的机器人设置失败:", error);
    resetRobotsToDefault();
  }
}

function closeRobotSettingsDialog() {
  document.getElementById("robot-settings-dialog").close();
}

function closeAPISettingsDialog() {
  document.getElementById("api-settings-dialog").close();
}

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

  localStorage.setItem("aiRobots", JSON.stringify(robots));
  localStorage.setItem("aiRobotsSaved", "true");

  showNotification("角色设置已保存！", "success");
  closeRobotSettingsDialog();
}

function loadAPISettings() {
  const savedToken = normalizeAPIToken(localStorage.getItem("deepseekApiToken"));

  if (savedToken) {
    document.getElementById("api-token").value = savedToken;
    apiToken = savedToken;
    updateAPIStatus(isAPITokenValid(savedToken) ? "saved" : "disconnected");
  } else {
    apiToken = "";
    updateAPIStatus("disconnected");
  }

  document.getElementById("api-token-section").style.display = "block";
  document.getElementById("test-api-btn").style.display = "inline-block";
}

function saveAPISettings(silent = false) {
  const token = getCurrentAPIToken();

  if (token) {
    localStorage.setItem("deepseekApiToken", token);
    apiToken = token;
    updateAPIStatus(isAPITokenValid(token) ? "saved" : "disconnected");

    if (!silent && isAPITokenValid(token)) {
      showNotification("API Token已保存", "success");
    }
    return;
  }

  localStorage.removeItem("deepseekApiToken");
  apiToken = "";
  updateAPIStatus("disconnected");
}

function updateAPIStatus(status) {
  const statusElement = document.createElement("span");
  statusElement.className = `api-status ${status}`;

  switch (status) {
    case "saved":
      statusElement.textContent = "已保存";
      break;
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

  const oldStatus = document.querySelector(".api-status");
  if (oldStatus) {
    oldStatus.remove();
  }

  const apiSettings = document.querySelector(".api-settings h3");
  if (apiSettings) {
    apiSettings.appendChild(statusElement);
  }
}

async function testAPIConnection() {
  const token = getCurrentAPIToken();

  if (!token) {
    showNotification("请输入API Token", "error");
    return;
  }

  if (!isAPITokenValid(token)) {
    showAPIError("API Token 格式不正确，请确认以 sk- 开头");
    updateAPIStatus("disconnected");
    return;
  }

  updateAPIStatus("testing");

  try {
    const testRobot = {
      name: "测试助手",
      role: "这是一个测试消息，用于验证API连接是否正常。",
      style: "friendly",
    };

    const response = await callDeepSeekAPI(
      "请只回复‘连接成功’四个字。",
      testRobot,
      [],
      { token, isTest: true },
    );

    if (response && response.trim()) {
      updateAPIStatus("connected");
      hideAPIError();
      showAPISuccess(`✅ 连接成功：${response}`);
      showNotification("API连接测试成功！", "success");
      saveAPISettings(true);
    } else {
      updateAPIStatus("disconnected");
      showAPIError("API返回了空响应，请稍后再试");
    }
  } catch (error) {
    updateAPIStatus("disconnected");
    showAPIError(`API连接失败: ${error.message}`);
    console.error("API测试失败:", error);
  }
}

function resetRobotsToDefault() {
  setDefaultRobots();

  const dialog = document.getElementById("robot-settings-dialog");
  if (dialog && dialog.open) {
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
    initCharacterCounters();
  }

  localStorage.removeItem("aiRobots");
  localStorage.removeItem("aiRobotsSaved");
  showNotification("已重置为默认角色设置", "info");
}

function showAPIError(message) {
  const errorElement = document.getElementById("api-error-message");

  if (errorElement) {
    errorElement.textContent = message;
    errorElement.style.display = "block";
  }
}

function showAPISuccess(message) {
  const successElement = document.getElementById("api-success-message");

  if (!successElement) {
    const dialog = document.getElementById("api-settings-dialog");
    const header = dialog ? dialog.querySelector("header") : null;

    if (header) {
      const successDiv = document.createElement("div");
      successDiv.id = "api-success-message";
      successDiv.className = "success-message";
      successDiv.style.display = "none";
      header.appendChild(successDiv);
    }
  }

  const element = document.getElementById("api-success-message");
  if (element) {
    element.textContent = message;
    element.style.display = "block";
    setTimeout(() => {
      element.style.display = "none";
    }, 5000);
  }
}

function hideAPIError() {
  const errorElement = document.getElementById("api-error-message");

  if (errorElement) {
    errorElement.style.display = "none";
  }
}

function hideAPISuccess() {
  const successElement = document.getElementById("api-success-message");

  if (successElement) {
    successElement.style.display = "none";
  }
}