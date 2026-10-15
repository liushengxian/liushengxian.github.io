// 导入规则配置
// 发布版本号更新时，这里的 ?v= 需与 index.html 中的版本号同步更新（见 index.html 顶部注释）
import rulesData from './rules.js?v=4.7.1';

// 获取DOM元素
const apiKeyInput = document.getElementById('apiKey');
const apiKeyLabel = document.getElementById('apiKeyLabel');
const providerSelect = document.getElementById('providerSelect');
const modelSelect = document.getElementById('modelSelect');
const modelInput = document.getElementById('modelInput');
const ruleSelect = document.getElementById('ruleSelect');
const startDateInput = document.getElementById('startDate');
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const settingsBtn = document.getElementById('settingsBtn');
const copyBtn = document.getElementById('copyBtn');
const statusDiv = document.getElementById('status');

// 输出设置对话框相关元素
const settingsDialog = document.getElementById('settingsDialog');
const headerInput = document.getElementById('headerInput');
const dateFormatInput = document.getElementById('dateFormatInput');
const totalFormatInput = document.getElementById('totalFormatInput');
const blankAfterHeaderInput = document.getElementById('blankAfterHeader');
const blankBetweenRowsInput = document.getElementById('blankBetweenRows');
const blankBeforeTailInput = document.getElementById('blankBeforeTail');
const blankAfterTotalInput = document.getElementById('blankAfterTotal');
const suffixText = document.getElementById('suffixText');
const settingsPreview = document.getElementById('settingsPreview');
const saveBtn = document.getElementById('saveBtn');
const cancelBtn = document.getElementById('cancelBtn');

// 存储规则列表
let rules = rulesData.rules;

// 最近一次计算结果的 View Model（用于设置变更后重渲染 / 对话框预览）
let lastView = null;

// ===== 供应商配置 =====
// 新增供应商时只需在下面数组里加一项（接口需兼容 OpenAI 的 /chat/completions 协议）
// modelsEndpoint：可选的模型列表接口（GET，仅需 Authorization 头，返回 OpenAI 风格的 { data: [{ id }] }）；
//                 省略时由 endpoint 自动推导（把 /chat/completions 换成 /models）
const PROVIDERS = [
    {
        id: 'deepseek',
        name: 'DeepSeek',
        endpoint: 'https://api.deepseek.com/v1/chat/completions',
        modelsEndpoint: 'https://api.deepseek.com/v1/models',
        models: ['deepseek-v4-flash', 'deepseek-chat', 'deepseek-reasoner'],
        keyLabel: 'DeepSeek API Key',
        keyPlaceholder: '请输入你的 DeepSeek API Key',
        keyStorageKey: 'deepseek_api_key' // 沿用旧键名，兼容已保存的 Key
    },
    {
        id: 'qwen',
        name: '通义千问 (Qwen)',
        endpoint: 'https://maas.qianwenaiapi.com/compatible-mode/v1/chat/completions',
        modelsEndpoint: 'https://maas.qianwenaiapi.com/compatible-mode/v1/models',
        models: ['qwen3.8-flash', 'qwen3.8-max', 'qwen-plus', 'qwen-max'],
        keyLabel: '通义千问 API Key',
        keyPlaceholder: '请输入你的通义千问 API Key',
        keyStorageKey: 'qwen_api_key'
    }
];

// 模型列表缓存有效期：24 小时
const MODELS_CACHE_TTL = 24 * 60 * 60 * 1000;

function getProviderById(id) {
    return PROVIDERS.find(provider => provider.id === id) || PROVIDERS[0];
}

function getCurrentProvider() {
    return getProviderById(providerSelect.value);
}

function getModelStorageKey(providerId) {
    return `model_${providerId}`;
}

// ===== 模型列表接口 =====
function getModelsEndpoint(provider) {
    return provider.modelsEndpoint || provider.endpoint.replace(/\/chat\/completions$/, '/models');
}

function getModelsCacheKey(providerId) {
    return `models_cache_${providerId}`;
}

// 读取模型列表缓存（过期、损坏或为空时返回 null）
function readModelsCache(provider) {
    try {
        const raw = localStorage.getItem(getModelsCacheKey(provider.id));
        if (!raw) {
            return null;
        }
        const cached = JSON.parse(raw);
        if (!Array.isArray(cached?.models) || cached.models.length === 0) {
            return null;
        }
        if (Date.now() - Number(cached?.timestamp) > MODELS_CACHE_TTL) {
            return null;
        }
        return cached.models;
    } catch (error) {
        console.warn('读取模型列表缓存失败:', error);
        return null;
    }
}

function writeModelsCache(provider, models) {
    try {
        localStorage.setItem(getModelsCacheKey(provider.id), JSON.stringify({
            timestamp: Date.now(),
            models: models
        }));
    } catch (error) {
        console.warn('写入模型列表缓存失败:', error);
    }
}

// 内置候选（接口不可用时的兜底）
function getBuiltinModels(provider) {
    return (provider.models || []).map(id => ({ id: id, name: id }));
}

// 解析接口响应：统一按 OpenAI 风格的 data[].id 取值（DeepSeek 另有展示名 name）
function extractModelList(data) {
    const list = Array.isArray(data?.data) ? data.data : [];
    const seen = new Set();
    const models = [];

    list.forEach(item => {
        const id = typeof item === 'string' ? item : String(item?.id || '');
        if (!id || seen.has(id)) {
            return;
        }
        seen.add(id);
        const name = typeof item === 'object' && item?.name ? String(item.name) : id;
        models.push({ id: id, name: name });
    });

    return models;
}

// 查询供应商的模型列表接口（注意：不加 Content-Type，避免触发不被允许的预检头）
async function requestProviderModels(provider, apiKey) {
    const response = await fetch(getModelsEndpoint(provider), {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `模型列表请求失败: ${response.status} ${response.statusText}`);
    }

    const models = extractModelList(await response.json());
    if (models.length === 0) {
        throw new Error('供应商未返回任何模型');
    }
    return models;
}

// 自定义模型的选项值（选中后显示手输输入框）
const CUSTOM_MODEL_VALUE = '__custom__';

// 渲染模型下拉框：保留当前选中的模型（不在候选里时补一项），末项为“自定义…”
function renderModelOptions(models, selectedId) {
    const items = models.slice();
    const target = selectedId || (items[0] && items[0].id) || '';

    // 已保存的模型不在候选里（如规则/接口更新过）时补一项，避免被丢掉
    if (target && !items.some(model => model.id === target)) {
        items.unshift({ id: target, name: target });
    }

    modelSelect.innerHTML = '';
    items.forEach(model => {
        const option = document.createElement('option');
        option.value = model.id;
        option.textContent = model.name || model.id;
        modelSelect.appendChild(option);
    });

    const customOption = document.createElement('option');
    customOption.value = CUSTOM_MODEL_VALUE;
    customOption.textContent = '自定义…';
    modelSelect.appendChild(customOption);

    modelSelect.value = target || CUSTOM_MODEL_VALUE;
    syncModelInputVisibility();
}

// 自定义模式下显示手输框，否则隐藏
function syncModelInputVisibility() {
    const isCustom = modelSelect.value === CUSTOM_MODEL_VALUE;
    modelInput.hidden = !isCustom;
    if (!isCustom) {
        modelInput.value = '';
    }
}

// 当前选中的模型名（自定义时取手输框）
function getSelectedModel() {
    return modelSelect.value === CUSTOM_MODEL_VALUE ? modelInput.value.trim() : modelSelect.value;
}

// 保存模型到 localStorage
function persistSelectedModel() {
    localStorage.setItem(getModelStorageKey(getCurrentProvider().id), getSelectedModel());
}

// 拉取并刷新模型候选：无 Key 或请求失败时静默保留内置候选，不打断主流程
async function refreshModelOptions(provider, { force = false } = {}) {
    if (!force) {
        const cached = readModelsCache(provider);
        if (cached) {
            renderModelOptions(cached, getSelectedModel());
            return;
        }
    }

    const apiKey = localStorage.getItem(provider.keyStorageKey) || '';
    if (!apiKey) {
        return;
    }

    try {
        const models = await requestProviderModels(provider, apiKey);
        // 请求期间可能已切换到其他供应商
        if (getCurrentProvider().id !== provider.id) {
            return;
        }
        writeModelsCache(provider, models);
        renderModelOptions(models, getSelectedModel());
    } catch (error) {
        console.warn(`${provider.name} 模型列表获取失败，继续使用内置候选:`, error);
    }
}

// 加载供应商下拉框，并恢复上次选择的供应商
function loadProviders() {
    try {
        providerSelect.innerHTML = '';
        PROVIDERS.forEach(provider => {
            const option = document.createElement('option');
            option.value = provider.id;
            option.textContent = provider.name;
            providerSelect.appendChild(option);
        });

        const savedProviderId = localStorage.getItem('selected_provider_id');
        providerSelect.value = PROVIDERS.some(provider => provider.id === savedProviderId)
            ? savedProviderId
            : PROVIDERS[0].id;

        applyProvider();
    } catch (error) {
        console.error('加载供应商失败:', error);
        providerSelect.innerHTML = '<option value="">加载供应商失败</option>';
    }
}

// 切换供应商后刷新 API Key、模型候选与提示文案
function applyProvider() {
    const provider = getCurrentProvider();

    // API Key（各供应商分别保存在 localStorage）
    apiKeyLabel.textContent = `${provider.keyLabel}:`;
    apiKeyInput.placeholder = provider.keyPlaceholder;
    apiKeyInput.value = localStorage.getItem(provider.keyStorageKey) || '';

    // 模型候选列表：先用内置候选兜底，再异步换成接口返回的真实列表
    renderModelOptions(getBuiltinModels(provider));

    // 模型：优先用该供应商上次保存的，否则用默认模型
    const savedModel = localStorage.getItem(getModelStorageKey(provider.id)) || provider.models[0] || '';
    renderModelOptions(getBuiltinModels(provider), savedModel);

    refreshModelOptions(provider);
}

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
    // 设置起始日期默认值为今天
    startDateInput.value = getTodayDate();
    
    // 加载供应商列表（会同时恢复该供应商的 API Key 与模型）
    loadProviders();
    
    // 加载规则列表
    loadRules();
    
    // 初始化复制按钮状态
    updateCopyBtn();
});

// 保存API密钥到localStorage（按供应商分开保存），并在 Key 变更后强制刷新一次模型候选
apiKeyInput.addEventListener('change', () => {
    const provider = getCurrentProvider();
    localStorage.setItem(provider.keyStorageKey, apiKeyInput.value);
    refreshModelOptions(provider, { force: true });
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

// 合计金额默认单位（“亿元”统一按“亿”输出）
const DEFAULT_TOTAL_UNIT = '亿';

// 归一化单位：“亿元”→“亿”，“万元”→“万”；缺失时按默认单位处理
function normalizeTotalUnit(unit) {
    const text = String(unit ?? '').trim().replace(/元$/, '');
    return text || DEFAULT_TOTAL_UNIT;
}

// 解析 AI 返回的合计金额：支持 {amount, unit}、纯数字、“20亿”/“合计20亿元”等形态；没有合计时返回 null
function normalizeTotal(rawTotal) {
    if (rawTotal === null || rawTotal === undefined) {
        return null;
    }

    if (typeof rawTotal === 'object') {
        const amount = Number(rawTotal.amount ?? rawTotal.value ?? rawTotal.number);
        if (Number.isFinite(amount)) {
            return { amount: amount, unit: normalizeTotalUnit(rawTotal.unit) };
        }
        throw new Error('AI 返回的合计金额格式不正确，请重试');
    }

    const text = String(rawTotal).trim();
    if (!text) {
        return null;
    }

    const match = text.match(/(\d+(?:\.\d+)?)\s*(亿元|万元|亿|万|元)?/);
    if (!match) {
        throw new Error('AI 返回的合计金额格式不正确，请重试');
    }

    return { amount: Number(match[1]), unit: normalizeTotalUnit(match[2]) };
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
        priceList,
        total: normalizeTotal(parsed.total)
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

// ===== 输出设置（“输出设置”对话框可改，保存在 localStorage） =====
const DEFAULT_SUFFIX = '如有价格要求，欢迎随时沟通。\n另祝各位交易顺利，万事无忧！';

const DEFAULT_SETTINGS = {
    header: '北京银行上海分行今日同业人民币资金价格详情',
    dateFormat: 'YYYY年MM月DD日',
    totalFormat: '合计{金额}{单位}',
    blankLines: {
        afterHeader: 1,   // 标题与第一条明细之间
        betweenRows: 1,   // 明细行之间
        beforeTail: 1,    // 合计（或明细）与尾部内容之间
        afterTotal: 1     // 合计与尾部内容之间
    }
};

const MAX_BLANK_LINES = 3;

function clampBlankLines(value) {
    const num = parseInt(value, 10);
    if (!Number.isFinite(num)) {
        return 0;
    }
    return Math.min(Math.max(num, 0), MAX_BLANK_LINES);
}

// 读取输出设置（缺省或损坏时回退默认值）
function loadSettings() {
    const blankLines = { ...DEFAULT_SETTINGS.blankLines };
    try {
        const parsed = JSON.parse(localStorage.getItem('result_blank_lines') || 'null');
        if (parsed && typeof parsed === 'object') {
            Object.keys(blankLines).forEach(key => {
                if (parsed[key] !== undefined) {
                    blankLines[key] = clampBlankLines(parsed[key]);
                }
            });
        }
    } catch (error) {
        console.warn('读取空行设置失败，使用默认值:', error);
    }

    const readText = (key, fallback) => {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
    };

    return {
        header: readText('result_header', DEFAULT_SETTINGS.header),
        dateFormat: readText('result_date_format', DEFAULT_SETTINGS.dateFormat) || DEFAULT_SETTINGS.dateFormat,
        totalFormat: readText('result_total_format', DEFAULT_SETTINGS.totalFormat),
        blankLines: blankLines,
        suffix: localStorage.getItem('result_suffix') || ''
    };
}

function saveSettings(settings) {
    localStorage.setItem('result_header', settings.header);
    localStorage.setItem('result_date_format', settings.dateFormat);
    localStorage.setItem('result_total_format', settings.totalFormat);
    localStorage.setItem('result_blank_lines', JSON.stringify(settings.blankLines));
    localStorage.setItem('result_suffix', settings.suffix.trim());
}

// 日期格式化：占位符 YYYY / MM / DD / M / D（MM、DD 补零，M、D 不补零）
function formatDateByPattern(dateStr, pattern) {
    const date = parseDateString(dateStr);
    if (!date) {
        return dateStr;
    }
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth() + 1;
    const day = date.getUTCDate();

    return String(pattern || DEFAULT_SETTINGS.dateFormat).replace(/YYYY|MM|DD|M|D/g, (token) => {
        if (token === 'YYYY') {
            return String(year);
        }
        if (token === 'MM') {
            return String(month).padStart(2, '0');
        }
        if (token === 'DD') {
            return String(day).padStart(2, '0');
        }
        if (token === 'M') {
            return String(month);
        }
        return String(day);
    });
}

function formatPrice(price) {
    if (!Number.isFinite(price)) {
        return '-';
    }
    return price.toFixed(2);
}

// 计算层 → View Model：只产出渲染所需的数据，不含任何排版结果
function buildResultView(resultList, total) {
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

    const rows = Array.from(groupedMap.values())
        .sort((a, b) => a.distanceMonth - b.distanceMonth)
        .map(group => ({
            monthText: String(group.distanceMonth).padStart(2, '0'),
            priceText: `${formatPrice(group.price)}%`,
            periods: group.periods
        }));

    return {
        rows: rows,
        total: total && Number.isFinite(total.amount) ? { amount: total.amount, unit: total.unit } : null
    };
}

// View Model → 输出文本：排版只发生在这里，可变部分全部来自设置
function renderResultView(view, settings) {
    const blankLines = settings.blankLines;
    const lines = [];

    const pushBlank = (count) => {
        for (let i = 0; i < count; i++) {
            lines.push(''); // 空行 = 空字符串元素（join('\n') 下恰好一行，不要写成 '\n'）
        }
    };

    if (settings.header.trim()) {
        lines.push(settings.header.trim());
    }

    view.rows.forEach((row, index) => {
        if (lines.length > 0) {
            pushBlank(index === 0 ? blankLines.afterHeader : blankLines.betweenRows);
        }

        const periodText = row.periods
            .map(period => `${formatDateByPattern(period.startDate, settings.dateFormat)}—${formatDateByPattern(period.endDate, settings.dateFormat)}`)
            .join(' ');

        lines.push(`${row.monthText}M ${row.priceText}    到期日：${periodText}`);
    });

    const totalLine = view.total && settings.totalFormat.trim()
        ? settings.totalFormat.trim()
            .replace(/\{金额\}/g, String(view.total.amount))
            .replace(/\{单位\}/g, view.total.unit)
        : '';
    const suffix = settings.suffix.trim();

    if (totalLine || suffix) {
        if (lines.length > 0) {
            pushBlank(blankLines.beforeTail);
        }
        if (totalLine) {
            lines.push(totalLine);
            if (suffix) {
                pushBlank(blankLines.afterTotal);
            }
        }
        if (suffix) {
            lines.push(suffix);
        }
    }

    return lines.join('\n');
}

// 预览用示例数据（尚未计算过时使用）
const SAMPLE_VIEW = {
    rows: [
        { monthText: '05M', priceText: '1.43%', periods: [{ startDate: '2027-02-16', endDate: '2027-02-17' }, { startDate: '2027-03-01', endDate: '2027-03-05' }] },
        { monthText: '07M', priceText: '1.44%', periods: [{ startDate: '2027-05-06', endDate: '2027-05-12' }] }
    ],
    total: { amount: 20, unit: '亿' }
};

// 调用供应商 API（统一的 OpenAI 兼容 /chat/completions 协议）
async function callAI(provider, model, apiKey, prompt, ruleContent, startDate) {
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
        content: `${prompt}\n\n请严格只返回 JSON，结构必须为：{"periodList":[{"startDate":"YYYY-MM-DD","endDate":"YYYY-MM-DD"}],"priceList":[{"month":1,"price":1.23}],"total":{"amount":20,"unit":"亿"}}。其中 total 为输入中的合计金额（如“合计20亿元”），amount 为数字，unit 为简短单位（“亿元”写作“亿”）；输入中没有合计金额时 total 必须为 null。只返回 JSON，不要任何解释。`
    });
    
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
    const content = data?.choices?.[0]?.message?.content || '';
    const normalized = extractAndParseAIJson(content);
    const resultList = buildResultList(normalized.periodList, normalized.priceList, startDate);
    lastView = buildResultView(resultList, normalized.total);
    return renderResultView(lastView, loadSettings());
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

// 读取对话框中的设置（空字段回退默认值，空行数收敛到 0-3）
function readSettingsFromDialog() {
    return {
        header: headerInput.value.trim(),
        dateFormat: dateFormatInput.value.trim() || DEFAULT_SETTINGS.dateFormat,
        totalFormat: totalFormatInput.value.trim(),
        blankLines: {
            afterHeader: clampBlankLines(blankAfterHeaderInput.value),
            betweenRows: clampBlankLines(blankBetweenRowsInput.value),
            beforeTail: clampBlankLines(blankBeforeTailInput.value),
            afterTotal: clampBlankLines(blankAfterTotalInput.value)
        },
        suffix: suffixText.value.trim()
    };
}

// 用当前设置即时渲染预览（未计算过时用示例数据）
function updateSettingsPreview() {
    settingsPreview.textContent = renderResultView(lastView || SAMPLE_VIEW, readSettingsFromDialog());
}

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
    if (lastView) {
        outputText.value = renderResultView(lastView, loadSettings());
        updateCopyBtn();
    }

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