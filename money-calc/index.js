// 导入规则配置
import rulesData from './rules.js';

// 获取DOM元素
const apiKeyInput = document.getElementById('apiKey');
const ruleSelect = document.getElementById('ruleSelect');
const startDateInput = document.getElementById('startDate');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const statusDiv = document.getElementById('status');

// 存储规则列表
let rules = rulesData.rules;

// 加载规则列表
function loadRules() {
    try {
        // 填充规则下拉框
        ruleSelect.innerHTML = '';
        rules.forEach((rule, index) => {
            const option = document.createElement('option');
            option.value = rule.id;
            option.textContent = rule.name;
            if (index === 0) {
                option.selected = true;
            }
            ruleSelect.appendChild(option);
        });
        
        // 从localStorage恢复上次选择的规则
        const savedRuleId = localStorage.getItem('selected_rule_id');
        if (savedRuleId) {
            ruleSelect.value = savedRuleId;
        }
    } catch (error) {
        console.error('加载规则失败:', error);
        ruleSelect.innerHTML = '<option value="">加载规则失败</option>';
    }
}

// 保存选择的规则到localStorage
ruleSelect.addEventListener('change', () => {
    localStorage.setItem('selected_rule_id', ruleSelect.value);
});

// 获取今天的日期（格式：YYYY-MM-DD）
function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// 从localStorage加载API密钥和加载规则
window.addEventListener('DOMContentLoaded', () => {
    const savedApiKey = localStorage.getItem('deepseek_api_key');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
    }
    
    // 设置起始日期默认值为今天
    startDateInput.value = getTodayDate();
    
    // 加载规则列表
    loadRules();
});

// 保存API密钥到localStorage
apiKeyInput.addEventListener('change', () => {
    localStorage.setItem('deepseek_api_key', apiKeyInput.value);
});

// 显示状态消息
function showStatus(message, isError = false) {
    statusDiv.innerHTML = isError 
        ? `<div class="error">${message}</div>` 
        : `<div class="loading">${message}</div>`;
}

// 清空状态消息
function clearStatus() {
    statusDiv.innerHTML = '';
}

// 获取当前选择的规则内容
function getSelectedRuleContent() {
    const selectedRuleId = parseInt(ruleSelect.value);
    const rule = rules.find(r => r.id === selectedRuleId);
    return rule ? rule.content : '';
}

// 调用 DeepSeek API
async function callDeepSeekAPI(prompt, apiKey, ruleContent, startDate) {
    // 构建消息数组
    const messages = [];
    
    // 如果有规则内容，添加为系统消息
    if (ruleContent) {
        messages.push({
            role: 'system',
            content: ruleContent
        });
    }
    
    // 构建包含起始日的用户输入
    let userContent = prompt;
    if (startDate) {
        userContent = `起始日: ${startDate}\n\n${prompt}`;
    }
    
    // 添加用户输入
    messages.push({
        role: 'user',
        content: userContent
    });
    
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'deepseek-chat',
            messages: messages,
            stream: false
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API 请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// 计算按钮点击事件
calculateBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    const input = inputText.value.trim();

    // 验证输入
    if (!apiKey) {
        showStatus('请输入 DeepSeek API Key', true);
        return;
    }

    if (!input) {
        showStatus('请输入内容', true);
        return;
    }

    // 禁用按钮，防止重复点击
    calculateBtn.disabled = true;
    clearStatus();
    showStatus('正在计算中，请稍候...');
    outputText.value = '';

    try {
        // 获取选择的规则内容
        const ruleContent = getSelectedRuleContent();
        
        // 获取起始日期
        const startDate = startDateInput.value;
        
        // 调用 API
        const result = await callDeepSeekAPI(input, apiKey, ruleContent, startDate);
        
        // 显示结果
        outputText.value = result;
        clearStatus();
        showStatus('✓ 计算完成');
        
        // 2秒后清除成功消息
        setTimeout(() => {
            clearStatus();
        }, 2000);
    } catch (error) {
        console.error('Error:', error);
        showStatus(`错误: ${error.message}`, true);
        outputText.value = '';
    } finally {
        // 重新启用按钮
        calculateBtn.disabled = false;
    }
});

// 清空按钮点击事件
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    clearStatus();
});

// 支持 Ctrl/Cmd + Enter 快捷键触发计算
inputText.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        calculateBtn.click();
    }
});