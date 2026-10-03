# Unity 游戏开发入门指南

Ming 编写与维护 · 小明工作室

[在线阅读](https://minggamestudio.github.io/unity-game-dev-guide/) · [维护说明](docs/maintenance.md) · [章节模板](templates/chapter.md)

> 当前处于初始搭建阶段，正文尚在准备中。

## 从哪里开始写

直接编辑 [第一章](docs/guide/01-first-page.md)。每个章节放在 `docs/guide/`，例如 `02-your-topic.md`，第一行使用 `# 章节标题`。网站会自动按文件名排序生成目录。

## 自动发布

main 分支更新后，GitHub Actions 自动构建 VitePress 并发布到 GitHub Pages。Pull Request 只检查构建，不发布。

GitHub Pages 发布来源应为 **GitHub Actions**。

## 本地预览

使用 Node.js 24：

```bash
npm ci
npm run docs:dev
```

`npm run docs:build` 检查正式构建，`npm run docs:preview` 预览构建结果。

## 内容与授权

尚未选择开放许可。公开仓库不代表任意转载或商用授权。后续由作者决定正文、示例代码及素材的许可方式。

