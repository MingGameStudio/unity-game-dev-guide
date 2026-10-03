# 维护指南

这份说明帮助作者用手机或电脑维护本书。

## 用手机修改正文

1. 打开想修改的在线页面，点击底部“在 GitHub 上编辑本页”。
2. 登录具有仓库写入权限的 GitHub 账号，编辑 Markdown。
3. 使用 Preview 检查文字与格式。
4. 点击 Commit changes，填写简短的修改说明。
5. 小修改可以提交到 main；较大修改可先放在分支，通过 Pull Request 合并。
6. main 更新后会自动构建并发布。等 Actions 中的“发布在线书籍”成功后，再打开网站检查。

GitHub 的 Preview 是 Markdown 预览，不是本站完整排版。浏览器未显示编辑控件时，可以尝试“桌面版网站”。

## 新增章节：只需新增一个文件

1. 在仓库打开 `templates/chapter.md`，复制模板内容。
2. 进入对应分部的目录（见下表），选择 Add file → Create new file。
3. 使用带数字前缀的英文文件名，例如 `02-your-topic.md`。
4. 粘贴模板，把第一行 `# 标题` 改成章节名称并填写内容。
5. 提交后，发布过程会自动按文件名排序生成目录，无需修改网站配置。

每个章节必须保留一行明确的一级标题。目录会分别扫描以下四个分部目录内的 Markdown 文件；每个目录的 `index.md` 是分部概览。

| 分部 | 章节目录 |
| --- | --- |
| 2D 入门 · Pixel Adventure | `docs/guide/2d-platformer/` |
| 3D 入门 · Blender 塔防 | `docs/guide/3d-tower-defense/` |
| Shader · 3D Graphics | `docs/guide/shaders/` |
| 开发实践 · Mine Beyond | `docs/guide/mine-beyond/` |

新增章节会自动加入侧边栏。若要在分部概览的章节表中展示它，请同时在该目录的 `index.md` 添加一行链接。

新增文件后，本地开发预览如果未更新目录，请重启开发服务器。

## 草稿

未准备公开的书稿不要放进这个公开仓库，包括分支、提交历史和 Issues。需要保密的草稿请先保存在自己的私人笔记中。

公开的草稿可放在 `drafts/`；此目录不会发布到阅读网站，但仍能在 GitHub 仓库中看到。

## 图片

在仓库的 `docs/public/images/` 上传图片，再在章节中插入：

```md
![角色移动效果](/images/player-movement.png)
```

图片路径会由 VitePress 加上本站的路径前缀。建议使用简短英文文件名，避免过大的 GIF；图片加入说明文字。

## 自动发布与检查

- main 上的每次提交自动触发“发布在线书籍”。
- Pull Request 会执行“检查书稿”构建，不会发布到正式网站。
- 构建失败时，打开 Actions 中失败的步骤查看错误；修正后再次提交。
- 内部链接错误会使 VitePress 构建失败，避免把无法访问的正文链接发布出去。
- Actions 页面也可以手动运行发布工作流。

如果正文已经更新但网站仍是旧内容，先确认工作流成功，再刷新浏览器。

## 在电脑上预览

安装 Node.js 24，然后在仓库目录执行：

```bash
npm ci
npm run docs:dev
```

正式构建与预览：

```bash
npm run docs:build
npm run docs:preview
```

## 修改网站名称或样式

- 首页：`docs/index.md`
- 书名、导航、搜索和作者信息：`docs/.vitepress/config.mjs`
- 配色与正文样式：`docs/.vitepress/theme/custom.css`
- 章节模板：`templates/chapter.md`

## 组织或仓库改名后

云端构建会读取 GitHub 当前仓库名称，生成网站路径和编辑链接。改名后重新运行发布工作流，并在 Settings → Pages 核对新地址。

同时更新 README 中的阅读链接、配置文件中的本地预览备用仓库名，以及对外分享的链接。旧 Pages 地址不要假定会自动跳转。

## 回退错误修改

正文小错误可直接修正并提交。需要恢复以前的文字时，在文件 History 中找到旧版并复制所需内容；不要为了撤回文章而删除整个仓库。

