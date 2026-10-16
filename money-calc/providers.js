// 供应商配置、模型候选（含本地缓存）与 API Key 状态
import {
    providerSelect, modelSelect, modelInput, apiKeyInput, apiKeyLabel,
    keyToggle, keyState
} from '@app/dom';

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

export function getProviderById(id) {
    return PROVIDERS.find(provider => provider.id === id) || PROVIDERS[0];
}

export function getCurrentProvider() {
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
export const CUSTOM_MODEL_VALUE = '__custom__';

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
export function syncModelInputVisibility() {
    const isCustom = modelSelect.value === CUSTOM_MODEL_VALUE;
    modelInput.hidden = !isCustom;
    if (!isCustom) {
        modelInput.value = '';
    }
}

// 当前选中的模型名（自定义时取手输框）
export function getSelectedModel() {
    return modelSelect.value === CUSTOM_MODEL_VALUE ? modelInput.value.trim() : modelSelect.value;
}

// 保存模型到 localStorage
export function persistSelectedModel() {
    localStorage.setItem(getModelStorageKey(getCurrentProvider().id), getSelectedModel());
}

// 拉取并刷新模型候选：无 Key 或请求失败时静默保留内置候选，不打断主流程
// 返回 { ok: true, models } 或 { ok: false, reason: 'no-key' | 'stale' | 'error', error }
// （自动触发的路径忽略返回值；参数条上的刷新按钮用它给用户反馈）
export async function refreshModelOptions(provider, { force = false } = {}) {
    if (!force) {
        const cached = readModelsCache(provider);
        if (cached) {
            renderModelOptions(cached, getSelectedModel());
            return { ok: true, models: cached, fromCache: true };
        }
    }

    const apiKey = localStorage.getItem(provider.keyStorageKey) || '';
    if (!apiKey) {
        return { ok: false, reason: 'no-key' };
    }

    try {
        const models = await requestProviderModels(provider, apiKey);
        // 请求期间可能已切换到其他供应商
        if (getCurrentProvider().id !== provider.id) {
            return { ok: false, reason: 'stale' };
        }
        writeModelsCache(provider, models);
        renderModelOptions(models, getSelectedModel());
        return { ok: true, models };
    } catch (error) {
        console.warn(`${provider.name} 模型列表获取失败，继续使用内置候选:`, error);
        return { ok: false, reason: 'error', error };
    }
}

// 加载供应商下拉框，并恢复上次选择的供应商
export function loadProviders() {
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
export function applyProvider() {
    const provider = getCurrentProvider();

    // API Key（各供应商分别保存在 localStorage）
    apiKeyLabel.textContent = provider.keyLabel;
    apiKeyInput.placeholder = provider.keyPlaceholder;
    apiKeyInput.value = localStorage.getItem(provider.keyStorageKey) || '';
    updateKeyState();

    // 模型候选列表：先用内置候选兜底，再异步换成接口返回的真实列表
    renderModelOptions(getBuiltinModels(provider));

    // 模型：优先用该供应商上次保存的，否则用默认模型
    const savedModel = localStorage.getItem(getModelStorageKey(provider.id)) || provider.models[0] || '';
    renderModelOptions(getBuiltinModels(provider), savedModel);

    refreshModelOptions(provider);
}

// 参数条上的 Key 状态：不展开也能看出配没配
export function updateKeyState() {
    if (!keyToggle || !keyState) {
        return;
    }

    const provider = getCurrentProvider();
    const hasKey = (localStorage.getItem(provider.keyStorageKey) || '').trim() !== '';
    keyToggle.dataset.state = hasKey ? 'saved' : 'missing';
    keyState.textContent = hasKey ? 'Key 已保存' : '未配置 Key';
}
