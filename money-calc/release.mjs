#!/usr/bin/env node
/**
 * money-calc 发版脚本 —— 让「18 处版本号要同步」变成机器保证的事
 *
 * 用法：
 *   node release.mjs --check                        只体检，不改文件、不提交
 *   node release.mjs 4.9.2 "refactor: 提交说明"      发版：改令牌 → 体检 → 提交 → 推送 → 验证线上
 *   node release.mjs 4.9.2 "说明" --no-push         只到本地提交
 *
 * 令牌形态：<人类版本号>-<内容哈希前8位>，例如 4.9.2-8f3a1c
 *   - 哈希只反映真实内容：先把所有 ?v= 与页面版本号归一化掉再算，
 *     所以「改了代码忘记改版本号」不可能发生——内容一变令牌自动变。
 *   - chip 仍显示人类版本号（4.9.2），用户可读。
 *
 * 体检项（任一不过就中止，不会产生半新半旧的线上状态）：
 *   ① 全站 ?v= 必须只有一个值（半新半旧会让同一模块出现两个实例、状态分裂）
 *   ② chip 版本号必须与令牌的人类部分一致
 *   ③ index.html 里每个本地 .css/.js 引用都必须带 ?v=
 *   ④ JS 模块内不得再有相对路径 import（约定统一走 @app/ 裸名 + importmap）
 *   ⑤ 每个被 import 的 @app/xxx 都必须在 importmap 里有条目
 *   ⑥ importmap 的每个目标文件必须存在、且带同一个令牌
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const APP_DIR = dirname(fileURLToPath(import.meta.url));
const LIVE_URL = 'https://liushengxian.github.io/money-calc/';
const ENTRY = 'index.js';
const ASSETS = ['base.css', 'app.css'];
const MODULES = ['dom.js', 'ui.js', 'providers.js', 'calc.js', 'settings.js', 'render.js', 'rules.js'];
const SERVED = ['index.html', ...ASSETS, ENTRY, ...MODULES];

const TOKEN_RE = /\?v=[A-Za-z0-9.\-]+/g;
const CHIP_RE = /(姜行专用\s+)(\d+\.\d+\.\d+)/;
const MAP_RE = /<script type="importmap">([\s\S]*?)<\/script>/;
const BARE_IMPORT_RE = /from\s+'(@app\/[A-Za-z0-9_-]+)'/g;
const RELATIVE_IMPORT_RE = /from\s+'(\.\/[^']+)'/g;

const read = (name) => readFileSync(join(APP_DIR, name), 'utf8');
const write = (name, text) => writeFileSync(join(APP_DIR, name), text, 'utf8');

// ===== 令牌与指纹 =====
function collectTokens() {
    const tokens = new Set();
    const where = new Map();
    for (const file of SERVED) {
        for (const hit of read(file).match(TOKEN_RE) || []) {
            const token = hit.slice(3);
            tokens.add(token);
            where.set(file, (where.get(file) || 0) + 1);
        }
    }
    return { tokens: [...tokens], where };
}

// 内容指纹：剥掉所有 ?v= 与 chip 里的版本号再算，保证令牌只随真实内容变化
function fingerprint() {
    const hash = createHash('sha256');
    for (const file of SERVED) {
        const normalized = read(file).replace(TOKEN_RE, '').replace(CHIP_RE, '$1');
        hash.update(file + '\0' + normalized + '\0');
    }
    return hash.digest('hex').slice(0, 8);
}

function readImportMap() {
    const match = read('index.html').match(MAP_RE);
    if (!match) {
        throw new Error('index.html 里找不到 <script type="importmap">');
    }
    return JSON.parse(match[1]);
}

// ===== 体检 =====
function check() {
    const problems = [];
    const notes = [];

    // ① 令牌唯一
    const { tokens, where } = collectTokens();
    if (tokens.length !== 1) {
        problems.push(`?v= 必须全站唯一，实际有 ${tokens.length} 种：${tokens.join(' / ')}`);
    }
    const token = tokens[0] || '';
    notes.push(`令牌            ${token || '(无)'}`);
    notes.push(`带 ?v= 的引用   ${[...where.entries()].map(([f, n]) => `${f}×${n}`).join('  ')}（共 ${[...where.values()].reduce((a, b) => a + b, 0)} 处）`);

    // ② chip 与令牌人类部分一致
    const html = read('index.html');
    const chip = html.match(CHIP_RE);
    const human = token.split('-')[0];
    if (!chip) {
        problems.push('index.html 里找不到版本号 chip（姜行专用 x.y.z）');
    } else {
        notes.push(`页面版本号      ${chip[0].trim()}`);
        if (chip[2] !== human) {
            problems.push(`chip 版本号 ${chip[2]} 与令牌的人类部分 ${human} 不一致`);
        }
    }

    // ③ index.html 里本地 .css/.js 引用都要带 ?v=
    const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(m => m[1]);
    const naked = refs.filter(ref => /\.(?:js|css)(?:[?"']|$)/.test(ref.split('?')[0]) && !ref.includes('?v='));
    if (naked.length) {
        problems.push(`index.html 里这些本地引用没带 ?v=：${naked.join(', ')}`);
    }
    const entryRef = refs.find(ref => ref.split('?')[0].endsWith(ENTRY));
    if (!entryRef || !entryRef.includes(`?v=${token}`)) {
        problems.push(`入口脚本引用不是 ${ENTRY}?v=${token}（实际 ${entryRef || '缺失'}）`);
    }

    // ④ JS 模块内不得再有相对路径 import
    for (const file of [ENTRY, ...MODULES]) {
        const relativeImports = [...read(file).matchAll(RELATIVE_IMPORT_RE)].map(m => m[1]);
        if (relativeImports.length) {
            problems.push(`${file} 里仍有相对路径 import：${relativeImports.join(', ')}（应改成 @app/ 裸名）`);
        }
    }

    // ⑤⑥ importmap：被引用的都要有条目，条目目标要存在且带同一令牌
    let map = {};
    try {
        map = readImportMap().imports || {};
    } catch (error) {
        problems.push(String(error.message || error));
    }
    const used = new Set();
    for (const file of [ENTRY, ...MODULES]) {
        for (const m of read(file).matchAll(BARE_IMPORT_RE)) {
            used.add(m[1]);
        }
    }
    for (const name of used) {
        if (!(name in map)) {
            problems.push(`${name} 被 import 了，但 importmap 里没有条目`);
        }
    }
    for (const [name, target] of Object.entries(map)) {
        if (!used.has(name)) {
            notes.push(`注意            importmap 条目 ${name} 当前没有任何模块在用`);
        }
        const dep = target.split('?')[0].replace(/^\.\//, '');
        if (!existsSync(join(APP_DIR, dep))) {
            problems.push(`importmap 条目 ${name} 指向的文件不存在：${target}`);
        }
        const depToken = (target.match(TOKEN_RE) || [''])[0].slice(3);
        if (depToken !== token) {
            problems.push(`importmap 条目 ${name} 的令牌 (${depToken || '无'}) 与全站令牌 (${token}) 不一致`);
        }
    }
    notes.push(`importmap       ${Object.keys(map).length} 条，实际被引用 ${used.size} 条`);

    return { problems, notes, token, human };
}

// ===== 改令牌 + 换版本号 =====
function bump(version) {
    const { tokens } = collectTokens();
    const oldToken = tokens[0];
    const nextToken = `${version}-${fingerprint()}`;
    let changed = 0;

    for (const file of SERVED) {
        const text = read(file);
        if (!TOKEN_RE.test(text)) {
            continue;
        }
        TOKEN_RE.lastIndex = 0;
        const updated = text.replace(TOKEN_RE, `?v=${nextToken}`);
        if (updated !== text) {
            write(file, updated);
            changed += 1;
        }
    }

    const html = read('index.html').replace(CHIP_RE, `$1${version}`);
    write('index.html', html);

    return { oldToken, nextToken, changed };
}

// ===== git =====
function git(args) {
    return execFileSync('git', args, { cwd: APP_DIR, encoding: 'utf8' }).trim();
}

function repoRoot() {
    return git(['rev-parse', '--show-toplevel']);
}

function appPath(name) {
    return relative(repoRoot(), join(APP_DIR, name));
}

function commitAndPush(message, { noPush }) {
    const files = [...SERVED, 'release.mjs'].map(appPath);
    execFileSync('git', ['add', ...files], { cwd: repoRoot(), stdio: 'inherit' });
    execFileSync('git', ['commit', '-m', message], { cwd: repoRoot(), stdio: 'inherit' });

    if (noPush) {
        console.log('\n--no-push：已本地提交，未推送。');
        return false;
    }

    const branch = git(['rev-parse', '--abbrev-ref', 'HEAD']);
    execFileSync('git', ['push', 'origin', branch], { cwd: repoRoot(), stdio: 'inherit' });
    return true;
}

// ===== 线上验证 =====
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function verifyLive(version, token) {
    const attempts = 16;
    for (let i = 1; i <= attempts; i++) {
        try {
            const htmlRes = await fetch(`${LIVE_URL}?cb=${Date.now()}`, { cache: 'no-store' });
            const html = await htmlRes.text();
            if (html.includes(`?v=${token}`) && html.includes(version)) {
                const files = [...ASSETS, ENTRY, ...MODULES];
                const results = [];
                for (const file of files) {
                    const res = await fetch(`${LIVE_URL}${file}?v=${token}&cb=${Date.now()}`, { cache: 'no-store' });
                    results.push(`${res.ok ? '200' : res.status} ${file}`);
                }
                const bad = results.filter(r => !r.startsWith('200'));
                console.log(`\n线上验证（第 ${i} 次尝试）：HTML 已是 ${version}/${token}`);
                console.log('  ' + results.join('\n  '));
                if (bad.length) {
                    console.log(`\n✗ 有 ${bad.length} 个文件没取到：${bad.join(', ')}`);
                    return false;
                }
                console.log('\n✓ 发布完成，线上与本地一致。');
                return true;
            }
            console.log(`  第 ${i} 次：Pages 还在构建（HTML 未更新），${15}s 后重试…`);
        } catch (error) {
            console.log(`  第 ${i} 次：请求失败（${error.message}），${15}s 后重试…`);
        }
        await sleep(15000);
    }
    console.log('\n✗ 超时：Pages 未在预期时间内更新，请稍后手动打开线上地址确认。');
    return false;
}

// ===== CLI =====
const argv = process.argv.slice(2);
const noPush = argv.includes('--no-push');
const checkOnly = argv.includes('--check');
const [version, message] = argv.filter(arg => !arg.startsWith('--'));

if (checkOnly) {
    const { problems, notes } = check();
    console.log('当前状态：');
    console.log('  ' + notes.join('\n  '));
    if (problems.length) {
        console.log('\n✗ 体检不通过：');
        problems.forEach(p => console.log('  - ' + p));
        process.exit(1);
    }
    console.log('\n✓ 体检通过（令牌唯一、版本号一致、引用无遗漏、importmap 完整）');
    console.log(`  下次发版令牌将是：<版本号>-${fingerprint()}`);
    process.exit(0);
}

if (!/^\d+\.\d+\.\d+$/.test(version || '')) {
    console.error('用法：node release.mjs <版本号如 4.9.2> "提交说明" [--no-push]');
    console.error('      node release.mjs --check');
    process.exit(2);
}

const before = check();
if (before.problems.length) {
    console.log('发版前体检不通过：');
    before.problems.forEach(p => console.log('  - ' + p));
    process.exit(1);
}

const { oldToken, nextToken, changed } = bump(version);
console.log(`令牌 ${oldToken} → ${nextToken}`);
console.log(`改写 ${changed} 个文件，页面版本号 → ${version}`);

const after = check();
console.log('\n发版后体检：');
console.log('  ' + after.notes.join('\n  '));
if (after.problems.length) {
    console.log('✗ 体检不通过（请检查上面的改写）：');
    after.problems.forEach(p => console.log('  - ' + p));
    process.exit(1);
}
console.log('  ✓ 通过');

if (!message) {
    console.log('\n没给提交说明，停在本地改动（未提交）。');
    process.exit(0);
}

const pushed = commitAndPush(message, { noPush });
if (!pushed) {
    process.exit(0);
}

const ok = await verifyLive(version, nextToken);
process.exit(ok ? 0 : 1);
