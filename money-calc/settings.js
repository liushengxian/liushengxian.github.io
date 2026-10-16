// 输出设置：默认值、localStorage 读写、对话框取值、排版用格式化
import {
    headerInput, dateFormatInput, totalFormatInput, blankAfterHeaderInput,
    blankBetweenRowsInput, blankBeforeTailInput, blankAfterTotalInput, suffixText
} from './dom.js?v=4.9.1';
import { parseDateString } from './calc.js?v=4.9.1';

// ===== 输出设置（“输出设置”对话框可改，保存在 localStorage） =====
export const DEFAULT_SUFFIX = '如有价格要求，欢迎随时沟通。\n另祝各位交易顺利，万事无忧！';

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
export function loadSettings() {
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

export function saveSettings(settings) {
    localStorage.setItem('result_header', settings.header);
    localStorage.setItem('result_date_format', settings.dateFormat);
    localStorage.setItem('result_total_format', settings.totalFormat);
    localStorage.setItem('result_blank_lines', JSON.stringify(settings.blankLines));
    localStorage.setItem('result_suffix', settings.suffix.trim());
}

// 日期格式化：占位符 YYYY / MM / DD / M / D（MM、DD 补零，M、D 不补零）
export function formatDateByPattern(dateStr, pattern) {
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

export function formatPrice(price) {
    if (!Number.isFinite(price)) {
        return '-';
    }
    return price.toFixed(2);
}

// 读取对话框中的设置（空字段回退默认值，空行数收敛到 0-3）
export function readSettingsFromDialog() {
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
