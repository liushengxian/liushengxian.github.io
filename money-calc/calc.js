// 纯计算层：AI 返回内容解析、日期工具、分段分桶。
// 不含任何 DOM / localStorage 访问——本模块可脱离浏览器单独测试。

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

export function extractAndParseAIJson(rawContent) {
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

export function parseDateString(dateStr) {
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

export function buildResultList(periodList, priceList, startDate) {
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

// 获取今天的日期（格式：YYYY-MM-DD）
export function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
