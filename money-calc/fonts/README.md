# fonts/

自托管的 UI 字体，**只含 Latin 子集**（中文由系统字体 PingFang SC / 微软雅黑等承担，
所以这里没有几 MB 的 CJK 文件）。两组字体都在 `base.css` 里用 `@font-face` 声明，
并带 `unicode-range`：遇到中文会自动跳过，回落系统字体。

| 文件 | 字体 | 版本 | 来源 |
|---|---|---|---|
| `inter-latin.woff2` | Inter Variable（wght 100–900） | 5.3.0 | `@fontsource-variable/inter`（npm） |
| `jetbrains-mono-latin.woff2` | JetBrains Mono Variable（wght 100–800） | 5.3.0 | `@fontsource-variable/jetbrains-mono`（npm） |

两份都是 **SIL Open Font License 1.1**，许可证全文见同目录 `LICENSE-Inter.txt`、
`LICENSE-JetBrainsMono.txt`。

## 更新方式

```bash
curl -o inter-latin.woff2 \
  "https://cdn.jsdelivr.net/npm/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"
curl -o jetbrains-mono-latin.woff2 \
  "https://cdn.jsdelivr.net/npm/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2"
```

更新后记得同步 `base.css` 里的 `unicode-range`（可从对应 npm 包的 `wght.css` 复制 latin 段）。
