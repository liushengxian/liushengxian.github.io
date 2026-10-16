// 页面级反馈：状态条、输出栏脚、复制按钮、API Key 行开合
import {
    statusDiv, outputMeta, outputText, copyBtn, copyLabel,
    keyRow, keyToggle, apiKeyInput
} from '@app/dom';

// 显示状态消息
export function showStatus(message, isError = false) {
    statusDiv.innerHTML = isError
        ? `<div class="error">${message}</div>`
        : `<div class="loading">${message}</div>`;
}

// 清空状态消息
export function clearStatus() {
    statusDiv.innerHTML = '';
}

// 输出栏脚：待计算 / 计算中… / N 行 · 已生成
export function updateOutputMeta(state) {
    if (!outputMeta) {
        return;
    }

    if (state === 'busy') {
        outputMeta.dataset.state = 'busy';
        outputMeta.textContent = '计算中…';
        return;
    }

    outputMeta.dataset.state = 'idle';
    const text = outputText.value.trim();
    if (!text) {
        outputMeta.textContent = '待计算';
        return;
    }

    const lines = text.split('\n').filter(line => line.trim() !== '').length;
    outputMeta.textContent = `${lines} 行 · 已生成`;
}

// 更新复制按钮状态 + 输出栏脚状态
export function updateCopyBtn() {
    const hasOutput = outputText.value.trim() !== '';
    copyBtn.disabled = !hasOutput;
    updateOutputMeta();
}

// 复制成功：按钮短暂变绿（1.4s 后撤回）
let copyFlashTimer = null;

export function flashCopyDone() {
    if (!copyLabel) {
        return;
    }

    clearTimeout(copyFlashTimer);
    copyBtn.classList.add('is-copied');
    copyLabel.textContent = '✓ 已复制';
    copyFlashTimer = setTimeout(() => {
        copyBtn.classList.remove('is-copied');
        copyLabel.textContent = '一键复制';
    }, 1400);
}

// ===== API Key 行（低频操作，默认收起） =====
export function setKeyRowOpen(open) {
    if (!keyRow || !keyToggle) {
        return;
    }

    keyRow.hidden = !open;
    keyToggle.setAttribute('aria-expanded', open ? 'true' : 'false');

    if (open) {
        apiKeyInput.focus();
    }
}
