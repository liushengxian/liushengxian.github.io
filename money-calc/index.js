// 入口：规则加载、事件装配、计算流程编排
// 发布版本号更新时，本文件与各模块之间 import 的 ?v= 需与 index.html 中的版本号同步更新（见 index.html 顶部注释）
import rulesData from './rules.js?v=4.9.1';
import {
    apiKeyInput, providerSelect, modelSelect, modelInput, ruleSelect, startDateInput,
    inputText, outputText, calculateBtn, clearBtn, settingsBtn, copyBtn,
    keyToggle, keyRow, ruleField, settingsDialog,
    headerInput, dateFormatInput, totalFormatInput,
    blankAfterHeaderInput, blankBetweenRowsInput, blankBeforeTailInput, blankAfterTotalInput,
    suffixText, saveBtn, cancelBtn
} from './dom.js?v=4.9.1';
import {
    showStatus, clearStatus, updateCopyBtn, updateOutputMeta, flashCopyDone, setKeyRowOpen
} from './ui.js?v=4.9.1';
import {
    CUSTOM_MODEL_VALUE, getCurrentProvider, getSelectedModel, persistSelectedModel,
    syncModelInputVisibility, loadProviders, applyProvider, updateKeyState, refreshModelOptions
} from './providers.js?v=4.9.1';
import { extractAndParseAIJson, buildResultList, getTodayDate } from './calc.js?v=4.9.1';
import { DEFAULT_SUFFIX, loadSettings, saveSettings, readSettingsFromDialog } from './settings.js?v=4.9.1';
import {
    buildResultView, renderResultView, setCurrentView, rerenderOutput, updateSettingsPreview
} from './render.js?v=4.9.1';

// ===== 规则 =====
// 存储规则列表
const rules = rulesData.rules;

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

        // 只有一个规则时不显示选择器（否则是个死字段）
        if (ruleField) {
            ruleField.hidden = rules.length < 2;
        }
    } catch (error) {
        console.error('加载规则失败:', error);
        ruleSelect.innerHTML = '<option value="">加载规则失败</option>';
    }
}

// 获取当前选择的规则内容
function getSelectedRuleContent() {
    const selectedRuleId = parseInt(ruleSelect.value);
    const rule = rules.find(r => r.id === selectedRuleId);
    return rule ? rule.content : '';
}

// 保存选择的规则到localStorage
ruleSelect.addEventListener('change', () => {
    localStorage.setItem('selected_rule_id', ruleSelect.value);
});

// ===== 事件装配 =====
// 页面初始化：加载供应商 / 规则，设起始日默认值
window.addEventListener('DOMContentLoaded', () => {
    // 设置起始日期默认值为今天
    startDateInput.value = getTodayDate();

    // 加载供应商列表（会同时恢复该供应商的 API Key 与模型）
    loadProviders();

    // 加载规则列表
    loadRules();

    // 初始化复制按钮状态
    updateCopyBtn();
});

// 切换供应商
providerSelect.addEventListener('change', () => {
    localStorage.setItem('selected_provider_id', providerSelect.value);
    applyProvider();
});

// 下拉选择模型：自定义时显示手输框，否则保存选择
modelSelect.addEventListener('change', () => {
    if (modelSelect.value === CUSTOM_MODEL_VALUE) {
        modelInput.hidden = false;
        modelInput.focus();
        return;
    }

    syncModelInputVisibility();
    persistSelectedModel();
});

// 手输自定义模型后保存
modelInput.addEventListener('change', () => {
    if (modelSelect.value === CUSTOM_MODEL_VALUE) {
        persistSelectedModel();
    }
});

// 保存API密钥到localStorage（按供应商分开保存），并在 Key 变更后强制刷新一次模型候选
apiKeyInput.addEventListener('change', () => {
    const provider = getCurrentProvider();
    localStorage.setItem(provider.keyStorageKey, apiKeyInput.value);
    updateKeyState();
    refreshModelOptions(provider, { force: true });
});

// 参数条上的 Key 状态按钮：点开/收起 Key 行
if (keyToggle) {
    keyToggle.addEventListener('click', () => setKeyRowOpen(keyRow.hidden));
    updateKeyState();
}

// ===== 计算流程 =====
// 第 1 步：拼装消息（规则作为 system，用户输入 + 输出契约作为 user）
function buildPrompt(ruleContent, prompt) {
    const messages = [];

    // 如果有规则内容，添加为系统消息
    if (ruleContent) {
        messages.push({
            role: 'system',
            content: ruleContent
        });
    }

    // 添加用户输入
    messages.push({
        role: 'user',
        content: `${prompt}\n\n请严格只返回 JSON，结构必须为：{"periodList":[{"startDate":"YYYY-MM-DD","endDate":"YYYY-MM-DD"}],"priceList":[{"month":1,"price":1.23}],"total":{"amount":20,"unit":"亿"}}。其中 total 为输入中的合计金额（如“合计20亿元”），amount 为数字，unit 为简短单位（“亿元”写作“亿”）；输入中没有合计金额时 total 必须为 null。只返回 JSON，不要任何解释。`
    });

    return messages;
}

// 第 2 步：请求供应商接口，返回助手消息文本（统一的 OpenAI 兼容 /chat/completions 协议）
async function requestCompletion(provider, model, apiKey, messages) {
    const response = await fetch(provider.endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: model,
            messages: messages,
            stream: false
        })
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API 请求失败: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data?.choices?.[0]?.message?.content || '';
}

// 第 3 步：解析响应 → 分段计算 → 生成 View Model（缓存）与输出文本
function handleResponse(content, startDate) {
    const normalized = extractAndParseAIJson(content);
    const resultList = buildResultList(normalized.periodList, normalized.priceList, startDate);
    const view = buildResultView(resultList, normalized.total);
    setCurrentView(view);
    return renderResultView(view, loadSettings());
}

// 调用供应商 API（拼装 → 请求 → 处理）
async function callAI(provider, model, apiKey, prompt, ruleContent, startDate) {
    const messages = buildPrompt(ruleContent, prompt);
    const content = await requestCompletion(provider, model, apiKey, messages);
    return handleResponse(content, startDate);
}

// 计算按钮点击事件
calculateBtn.addEventListener('click', async () => {
    const provider = getCurrentProvider();
    const model = getSelectedModel();
    const apiKey = apiKeyInput.value.trim();
    const input = inputText.value.trim();

    // 验证输入
    if (!apiKey) {
        showStatus(`请输入 ${provider.keyLabel}`, true);
        setKeyRowOpen(true);   // 直接展开 Key 行，省得用户找不到填 Key 的地方
        return;
    }

    if (!model) {
        showStatus('请输入模型名称', true);
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
    updateOutputMeta('busy');

    try {
        // 获取选择的规则内容
        const ruleContent = getSelectedRuleContent();

        // 获取起始日期
        const startDate = startDateInput.value;

        // 调用 API
        const result = await callAI(provider, model, apiKey, input, ruleContent, startDate);

        // 显示结果
        outputText.value = result;
        updateCopyBtn();
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
        updateCopyBtn();

        // Key 相关错误（401 / 无效 / 过期）：自动展开 Key 行并聚焦，减少"卡在找不到原因"
        if (/401|unauthorized|api[\s_-]?key|无效|过期/i.test(error.message || '')) {
            setKeyRowOpen(true);
        }
    } finally {
        // 重新启用按钮
        calculateBtn.disabled = false;
    }
});

// 清空按钮点击事件
clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
    updateCopyBtn();
    clearStatus();
});

// 支持 Ctrl/Cmd + Enter 快捷键触发计算
inputText.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        calculateBtn.click();
    }
});

// ===== 输出设置对话框 =====
// 打开设置对话框：填入当前设置
settingsBtn.addEventListener('click', () => {
    const settings = loadSettings();
    headerInput.value = settings.header;
    dateFormatInput.value = settings.dateFormat;
    totalFormatInput.value = settings.totalFormat;
    blankAfterHeaderInput.value = settings.blankLines.afterHeader;
    blankBetweenRowsInput.value = settings.blankLines.betweenRows;
    blankBeforeTailInput.value = settings.blankLines.beforeTail;
    blankAfterTotalInput.value = settings.blankLines.afterTotal;

    const savedSuffix = localStorage.getItem('result_suffix');
    suffixText.value = savedSuffix !== null ? savedSuffix : DEFAULT_SUFFIX;

    updateSettingsPreview();
    settingsDialog.showModal();
});

// 任意设置项变化即时刷新预览
[
    headerInput, dateFormatInput, totalFormatInput,
    blankAfterHeaderInput, blankBetweenRowsInput, blankBeforeTailInput, blankAfterTotalInput,
    suffixText
].forEach(element => element.addEventListener('input', updateSettingsPreview));

// 保存按钮点击事件
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveSettings(readSettingsFromDialog());
    settingsDialog.close();

    // 已有结果时，按新设置重新渲染
    rerenderOutput();

    showStatus('输出设置已保存');
    setTimeout(() => {
        clearStatus();
    }, 2000);
});

// 取消按钮点击事件
cancelBtn.addEventListener('click', () => {
    settingsDialog.close();
});

// 复制按钮点击事件
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(outputText.value);
        flashCopyDone();
        showStatus('✓ 已复制到剪贴板');
        setTimeout(() => {
            clearStatus();
        }, 2000);
    } catch (error) {
        console.error('复制失败:', error);
        showStatus('复制失败，请手动复制', true);
        setTimeout(() => {
            clearStatus();
        }, 2000);
    }
});
