// AI Robot 讨论会 - 核心初始化与通用工具

let robots = [];
let discussionHistory = [];
let currentRound = 0;
let totalRounds = 10;
let isDiscussionActive = false;
let discussionInterval = null;
let currentRobotIndex = 0;
let roundOrder = [];
let apiToken = "";
let isTurnInProgress = false;

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
const DEEPSEEK_MODEL = "deepseek-chat";
const DEEPSEEK_TIMEOUT_MS = 30000;
const DEEPSEEK_MAX_RETRIES = 1;

document.addEventListener("DOMContentLoaded", function () {
  setupEventListeners();
  loadAPISettings();
  initializeRobots();
  showAPIUsageInfo();
  appendNotificationAnimationStyle();
});

function initCharacterCounters() {
  updateCharacterCount("robot1-role", "robot1-count");
  updateCharacterCount("robot2-role", "robot2-count");
  updateCharacterCount("robot3-role", "robot3-count");
  updateCharacterCount("topic", "topic-count");
}

function updateCharacterCount(textareaId, countId) {
  const textarea = document.getElementById(textareaId);
  const countElement = document.getElementById(countId);

  if (!textarea || !countElement) {
    return;
  }

  const updateCount = function () {
    const length = textarea.value.length;
    const maxLength = parseInt(textarea.getAttribute("maxlength"), 10) || 300;
    countElement.textContent = `${length}/${maxLength}`;

    if (length > maxLength * 0.9) {
      countElement.classList.add("warning");
    } else {
      countElement.classList.remove("warning");
    }
  };

  textarea.addEventListener("input", updateCount);
  updateCount();
}

function setupEventListeners() {
  document.getElementById("robot-btn").addEventListener("click", openRobotSettingsDialog);
  document.getElementById("api-btn").addEventListener("click", openAPISettingsDialog);
  document
    .getElementById("close-robot-settings-btn")
    .addEventListener("click", closeRobotSettingsDialog);
  document
    .getElementById("close-api-settings-btn")
    .addEventListener("click", closeAPISettingsDialog);
  document.getElementById("save-robot-btn").addEventListener("click", saveRobots);
  document
    .getElementById("reset-robot-btn")
    .addEventListener("click", resetRobotsToDefault);
  document.getElementById("start-btn").addEventListener("click", startDiscussion);
  document.getElementById("pause-btn").addEventListener("click", pauseDiscussion);
  document
    .getElementById("reset-discussion-btn")
    .addEventListener("click", resetDiscussion);
  document
    .getElementById("api-token")
    .addEventListener("input", () => saveAPISettings(true));
  document.getElementById("test-api-btn").addEventListener("click", testAPIConnection);
}

function initializeRobots() {
  const savedRobots = localStorage.getItem("aiRobots");

  if (savedRobots) {
    try {
      robots = JSON.parse(savedRobots);
      return;
    } catch (error) {
      console.error("加载保存的机器人设置失败:", error);
    }
  }

  setDefaultRobots();
}

function setDefaultRobots() {
  robots = [
    {
      name: "智慧学者",
      role: "一位博学多才的学者，擅长逻辑分析和理性思考。注重事实依据，喜欢从历史和经验中寻找答案。说话严谨，条理清晰。",
      style: "formal",
      avatar: "🤓",
    },
    {
      name: "创新先锋",
      role: "一位富有创造力的思想家，总是寻找新的可能性和解决方案。喜欢挑战传统观念，拥抱变化和创新。思维跳跃，充满想象力。",
      style: "friendly",
      avatar: "🚀",
    },
    {
      name: "实践专家",
      role: "一位注重实际应用的专家，关注可行性和现实约束。善于将理论转化为实践，考虑成本和效益。说话直接，务实高效。",
      style: "critical",
      avatar: "🔧",
    },
  ];
}

function normalizeAPIToken(token) {
  return typeof token === "string" ? token.trim() : "";
}

function getCurrentAPIToken() {
  const tokenInput = document.getElementById("api-token");
  const nextToken = normalizeAPIToken(tokenInput ? tokenInput.value : apiToken);

  apiToken = nextToken;
  return nextToken;
}

function isAPITokenValid(token) {
  return token && token.length > 10 && token.startsWith("sk-");
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.position = "fixed";
  notification.style.top = "20px";
  notification.style.right = "20px";
  notification.style.padding = "15px 20px";
  notification.style.borderRadius = "8px";
  notification.style.color = "white";
  notification.style.fontWeight = "600";
  notification.style.zIndex = "2147483646";
  notification.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
  notification.style.animation = "fadeIn 0.3s ease";

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
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "fadeOut 0.3s ease";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function scrollToBottom() {
  const discussionArea = document.getElementById("discussion-area");

  if (discussionArea) {
    discussionArea.scrollTop = discussionArea.scrollHeight;
  }
}

function showAPIUsageInfo() {
  const info = `
使用说明：
1. 获取DeepSeek API Token：访问 https://platform.deepseek.com/api_keys
2. 将Token粘贴到输入框中，点击"测试API连接"验证
3. 如果API连接成功，讨论将使用真实的AI生成回复
4. 保存 Token 后，建议先点击“测试API连接”确认可用

注意事项：
- API Token仅存储在您的本地浏览器中
- 每次讨论会消耗API额度，请合理使用
- 确保回复内容不超过140字
  `;

  console.log(info);
}

function appendNotificationAnimationStyle() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-20px); }
    }
  `;
  document.head.appendChild(style);
}
