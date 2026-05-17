# 骗局反编译 · Scam Decompiler

一个可以直接部署到 GitHub Pages 的中文静态网站模板，用来发布防骗文章、骗局拆解、证据线索和避坑建议。默认账号名按 `scam-decompiler` 设置。

## 文件结构

- `index.html`: 首页和文章列表。
- `articles/li-zaifeng-baduanjin.html`: 第一篇正式文章。
- `articles/scam-analysis-template.html`: 骗局拆解文章模板。
- `articles/first-note.html`: 旧示例路径的跳转页，可保留也可删除。
- `styles.css`: 全站样式。
- `script.js`: 复制链接按钮。
- `assets/share-cover.png`: 首页和文章分享封面图，适合微信/朋友圈预览。
- `drafts/`: 本地草稿，不建议发布。
- `evidence/`: 本地证据归档，不建议发布。
- `.nojekyll`: 让 GitHub Pages 按普通静态文件发布。

## 发布到 GitHub Pages

推荐做成 GitHub 用户站：

1. 登录 `scam-decompiler` 账号。
2. 新建公开仓库，仓库名必须是 `scam-decompiler.github.io`。
3. 把网站文件上传到仓库根目录：`index.html`、`articles/`、`assets/`、`styles.css`、`script.js`、`.nojekyll`、`README.md`。
4. 进入仓库 `Settings` -> `Pages`。
5. `Build and deployment` 选择 `Deploy from a branch`。
6. `Branch` 选择 `main`，目录选择 `/root`，保存。
7. 等待部署完成后，访问 `https://scam-decompiler.github.io/`。

如果仓库名不是 `scam-decompiler.github.io`，而是例如 `cases`，网址会变成 `https://scam-decompiler.github.io/cases/`，同时 HTML 里的 `canonical`、`og:url` 和 `og:image` 也要改成带 `/cases/` 的地址。

## 发布前必须修改

如果你使用推荐仓库名 `scam-decompiler.github.io`，当前网址已经按 `https://scam-decompiler.github.io/` 配好。

如果你使用其他仓库名，需要修改下面两个文件里的网址：

- `index.html`
- `articles/li-zaifeng-baduanjin.html`
- `articles/scam-analysis-template.html`

这一步会影响微信、朋友圈和其他平台读取链接时显示的标题、摘要和封面图。

## 不要上传的本地文件

`drafts/` 和 `evidence/` 只用于本地写作、调查和归档，不建议公开上传。它们已经写入 `.gitignore`。真正要放到网页里的证据，应写成正文里的短证据块，并在文章中附上原始链接。

## 新增文章

1. 复制 `articles/scam-analysis-template.html`，改成新的文件名，例如 `articles/2026-06-01-fake-investment.html`。
2. 修改 `<title>`、`meta description`、`og:title`、`og:description`、`og:url`、发布日期和正文。
3. 在 `index.html` 的 `.article-list` 里增加一张文章卡片。
4. 如有新封面图，放到 `assets/`，并在文章页的 `og:image` 和正文图片里引用。

## 写骗局曝光文章的边界

- 不公开身份证号、手机号、住址、银行卡号等个人敏感信息。
- 截图里涉及普通受害者或无关第三方的信息要打码。
- 把“已核实事实”“合理推测”“仍待确认”分开写。
- 尽量保留原始证据文件，但网页中只放必要片段。
- 不鼓励读者骚扰、网暴或私刑式追踪。

## 中国大陆访问建议

GitHub Pages 免费、简单，但在中国大陆的访问稳定性不能保证。这个模板没有外部 CDN、外部字体或第三方脚本，已经尽量降低加载失败的概率。如果读者经常打不开，可以保留这一套静态文件，同时再部署一份到支持国内访问更稳定的静态托管服务。
