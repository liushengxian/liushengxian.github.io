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
const setSuffixBtn = document.getElementById('setSuffixBtn');
const copyBtn = document.getElementById('copyBtn');
const statusDiv = document.getElementById('status');

// Dialog 相关元素
const suffixDialog = document.getElementById('suffixDialog');
const suffixText = document.getElementById('suffixText');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

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
    
    // 初始化复制按钮状态
    updateCopyBtn();
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

// 更新复制按钮状态
function updateCopyBtn() {
    copyBtn.disabled = outputText.value.trim() === '';
}

// 获取当前选择的规则内容
function getSelectedRuleContent() {
    const selectedRuleId = parseInt(ruleSelect.value);
    const rule = rules.find(r => r.id === selectedRuleId);
    return rule ? rule.content : '';
}

function extractAndParseAIJson(rawContent) {
    if (!rawContent || typeof rawContent !== 'string') {
        throw new Error('AI 返回内容为空');
    }

    let content = rawContent.trim();

    const fencedMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
    if (fencedMatch && fencedMatch[1]) {
        content = fencedMatch[1].trim();
    }

    content = content
        .replace(/^\uFEFF/, '')
        .replace(/，/g, ',')
        .replace(/：/g, ':')
        .replace(/,\s*([}\]])/g, '$1')
        .replace(/([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g, '$1"$2":');

    let parsed;
    try {
        parsed = JSON.parse(content);
    } catch {
        throw new Error('AI 返回不是合法 JSON，请重试');
    }

    const periodList = Array.isArray(parsed.periodList)
        ? parsed.periodList.map(item => ({
            startDate: String(item?.startDate || ''),
            endDate: String(item?.endDate || '')
        }))
        : [];

    const priceList = Array.isArray(parsed.priceList)
        ? parsed.priceList.map(item => ({
            month: Number(item?.month),
            price: Number(item?.price)
        }))
        : [];

    const isPeriodValid = periodList.length > 0 && periodList.every(item => item.startDate && item.endDate);
    const isPriceValid = priceList.length > 0 && priceList.every(item => Number.isFinite(item.month) && Number.isFinite(item.price));

    if (!isPeriodValid || !isPriceValid) {
        throw new Error('AI 返回格式不符合预期，请重试');
    }

    return {
        periodList,
        priceList
    };
}

function parseDateString(dateStr) {
    const [year, month, day] = String(dateStr).split('-').map(Number);
    if (!year || !month || !day) {
        return null;
    }
    return new Date(Date.UTC(year, month - 1, day));
}

function formatDate(date) {
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function addDays(date, days) {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + days);
    return next;
}

function getMonthDays(year, monthIndex) {
    return new Date(Date.UTC(year, monthIndex + 1, 0)).getUTCDate();
}

function getAnchorDate(year, monthIndex, anchorDay) {
    const monthDays = getMonthDays(year, monthIndex);
    const day = Math.min(anchorDay, monthDays);
    return new Date(Date.UTC(year, monthIndex, day));
}

function getBucketEndByDate(date, anchorDay) {
    const year = date.getUTCFullYear();
    const monthIndex = date.getUTCMonth();
    const day = date.getUTCDate();

    const currentMonthAnchor = getAnchorDate(year, monthIndex, anchorDay);
    if (day <= currentMonthAnchor.getUTCDate()) {
        return currentMonthAnchor;
    }

    const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
    const nextYear = monthIndex === 11 ? year + 1 : year;
    return getAnchorDate(nextYear, nextMonthIndex, anchorDay);
}

function calculateDistanceMonth(baseDate, date) {
    const baseYear = baseDate.getUTCFullYear();
    const baseMonth = baseDate.getUTCMonth();
    const baseDay = baseDate.getUTCDate();

    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDate();

    const monthDiff = (year - baseYear) * 12 + (month - baseMonth);
    return day > baseDay ? monthDiff + 1 : monthDiff;
}

function buildResultList(periodList, priceList, startDate) {
    const startDateObj = parseDateString(startDate);
    if (!startDateObj) {
        throw new Error('起始日格式无效');
    }

    const baseDay = startDateObj.getUTCDate();
    const resultList = [];

    periodList.forEach(period => {
        const periodStart = parseDateString(period.startDate);
        const periodEnd = parseDateString(period.endDate);

        if (!periodStart || !periodEnd || periodStart > periodEnd) {
            return;
        }

        let cursor = periodStart;
        while (cursor <= periodEnd) {
            const bucketEnd = getBucketEndByDate(cursor, baseDay);
            const segmentEnd = bucketEnd < periodEnd ? bucketEnd : periodEnd;
            const distanceMonth = calculateDistanceMonth(startDateObj, cursor);
            const priceMatch = priceList.find(item => item.month === distanceMonth);

            resultList.push({
                startDate: formatDate(cursor),
                endDate: formatDate(segmentEnd),
                distanceMonth,
                month: priceMatch?.month ?? null,
                price: Number.isFinite(priceMatch?.price) ? priceMatch.price : null
            });

            cursor = addDays(segmentEnd, 1);
        }
    });

    return resultList;
}

function formatDateToChinese(dateStr) {
    const date = parseDateString(dateStr);
    if (!date) {
        return dateStr;
    }
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
}

function formatPrice(price) {
    if (!Number.isFinite(price)) {
        return '-';
    }
    return price.toFixed(2);
}

function formatResultSummary(resultList) {
    const groupedMap = new Map();

    resultList.forEach(item => {
        const key = item.distanceMonth;
        if (!groupedMap.has(key)) {
            groupedMap.set(key, {
                distanceMonth: key,
                price: item.price,
                periods: []
            });
        }

        const group = groupedMap.get(key);
        if (!Number.isFinite(group.price) && Number.isFinite(item.price)) {
            group.price = item.price;
        }

        group.periods.push({
            startDate: item.startDate,
            endDate: item.endDate
        });
    });

    const groups = Array.from(groupedMap.values()).sort((a, b) => a.distanceMonth - b.distanceMonth);

    const lines = ['北京银行上海分行今日同业人民币资金价格详情'];

    groups.forEach(group => {
        const monthText = String(group.distanceMonth).padStart(2, '0');
        const periodText = group.periods
            .map(period => `${formatDateToChinese(period.startDate)}—${formatDateToChinese(period.endDate)}`)
            .join(' ');

        lines.push(`${monthText}M ${formatPrice(group.price)}%    到期日：${periodText}`);
    });

    // 追加尾部内容
    const suffix = localStorage.getItem('result_suffix') || '';
    if (suffix.trim()) {
        lines.push('');
        lines.push(suffix);
    }

    return lines.join('\n');
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
    
    // 添加用户输入
    messages.push({
        role: 'user',
        content: `${prompt}\n\n请严格只返回 JSON，结构必须为：{"periodList":[{"startDate":"YYYY-MM-DD","endDate":"YYYY-MM-DD"}],"priceList":[{"month":1,"price":1.23}]}`
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
    const content = data?.choices?.[0]?.message?.content || '';
    const normalized = extractAndParseAIJson(content);
    const resultList = buildResultList(normalized.periodList, normalized.priceList, startDate);
    return formatResultSummary(resultList);
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

// 设置尾部追加词按钮点击事件
setSuffixBtn.addEventListener('click', () => {
    // 加载当前保存的内容，如果没有则使用默认内容
    const defaultSuffix = '如有价格要求，欢迎随时沟通。\n另祝各位交易顺利，万事无忧！';
    const currentSuffix = localStorage.getItem('result_suffix');
    suffixText.value = currentSuffix !== null ? currentSuffix : defaultSuffix;
    
    // 显示对话框
    suffixDialog.showModal();
});

// 保存按钮点击事件
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const suffix = suffixText.value.trim();
    localStorage.setItem('result_suffix', suffix);
    suffixDialog.close();
    showStatus('尾部追加词已保存');
    setTimeout(() => {
        clearStatus();
    }, 2000);
});

// 取消按钮点击事件
cancelBtn.addEventListener('click', () => {
    suffixDialog.close();
});

// 复制按钮点击事件
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(outputText.value);
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