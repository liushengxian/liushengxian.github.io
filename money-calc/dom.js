// 集中查询 DOM 元素：其它模块从这里取，避免各自重复 getElementById。
// 本模块不依赖任何其它模块；<script type="module"> 默认 defer，执行时 DOM 已就绪。

export const apiKeyInput = document.getElementById('apiKey');
export const apiKeyLabel = document.getElementById('apiKeyLabel');
export const providerSelect = document.getElementById('providerSelect');
export const modelSelect = document.getElementById('modelSelect');
export const modelInput = document.getElementById('modelInput');
export const ruleSelect = document.getElementById('ruleSelect');
export const startDateInput = document.getElementById('startDate');
export const inputText = document.getElementById('inputText');
export const outputText = document.getElementById('outputText');
export const calculateBtn = document.getElementById('calculateBtn');
export const clearBtn = document.getElementById('clearBtn');
export const settingsBtn = document.getElementById('settingsBtn');
export const copyBtn = document.getElementById('copyBtn');
export const statusDiv = document.getElementById('status');
export const outputMeta = document.getElementById('outputMeta');
export const copyLabel = copyBtn.querySelector('.copy-label');
export const keyToggle = document.getElementById('keyToggle');
export const keyRow = document.getElementById('keyRow');
export const keyState = document.getElementById('keyState');
export const ruleField = document.getElementById('ruleField');
export const modelRefreshBtn = document.getElementById('modelRefreshBtn');

// 输出设置对话框相关元素
export const settingsDialog = document.getElementById('settingsDialog');
export const headerInput = document.getElementById('headerInput');
export const dateFormatInput = document.getElementById('dateFormatInput');
export const totalFormatInput = document.getElementById('totalFormatInput');
export const blankAfterHeaderInput = document.getElementById('blankAfterHeader');
export const blankBetweenRowsInput = document.getElementById('blankBetweenRows');
export const blankBeforeTailInput = document.getElementById('blankBeforeTail');
export const blankAfterTotalInput = document.getElementById('blankAfterTotal');
export const suffixText = document.getElementById('suffixText');
export const settingsPreview = document.getElementById('settingsPreview');
export const previewTag = document.getElementById('previewTag');
export const saveBtn = document.getElementById('saveBtn');
export const cancelBtn = document.getElementById('cancelBtn');
