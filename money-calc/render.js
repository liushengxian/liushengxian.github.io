// 渲染层：计算结果 → View Model → 输出文本（排版只发生在这里），并缓存最近一次结果供设置变更后重渲染
import { outputText, settingsPreview, previewTag } from './dom.js?v=4.9.1';
import { loadSettings, readSettingsFromDialog, formatDateByPattern, formatPrice } from './settings.js?v=4.9.1';
import { updateCopyBtn } from './ui.js?v=4.9.1';

// 最近一次计算结果的 View Model（用于设置变更后重渲染 / 对话框预览）
let currentView = null;

export function setCurrentView(view) {
    currentView = view;
}

// 计算层 → View Model：只产出渲染所需的数据，不含任何排版结果
export function buildResultView(resultList, total) {
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
export function renderResultView(view, settings) {
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
// 注意：monthText 只写月份数字，渲染时统一补 “M”（否则预览会出现 “05MM”）
const SAMPLE_VIEW = {
    rows: [
        { monthText: '05', priceText: '1.43%', periods: [{ startDate: '2027-02-16', endDate: '2027-02-17' }, { startDate: '2027-03-01', endDate: '2027-03-05' }] },
        { monthText: '07', priceText: '1.44%', periods: [{ startDate: '2027-05-06', endDate: '2027-05-12' }] }
    ],
    total: { amount: 20, unit: '亿' }
};

// 用当前设置即时渲染预览（未计算过时用示例数据）
export function updateSettingsPreview() {
    settingsPreview.textContent = renderResultView(currentView || SAMPLE_VIEW, readSettingsFromDialog());

    if (previewTag) {
        const isSample = !currentView;
        previewTag.textContent = isSample ? '示例数据' : '实际结果';
        previewTag.dataset.state = isSample ? 'sample' : 'actual';
    }
}

// 已有结果时按当前设置重渲染输出（无结果时什么也不做）
export function rerenderOutput() {
    if (!currentView) {
        return;
    }

    outputText.value = renderResultView(currentView, loadSettings());
    updateCopyBtn();
}
