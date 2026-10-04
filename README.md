# Unity 游戏开发入门指南

## 你为什么需要这份指南

你一直很喜欢玩游戏，梦想有一天能够按照自己的想法做出一个世界上最棒的游戏。

你是一个中学生、或者一个不太熟悉编程的成年人。

你愿意付出行动！

## 我为什么要写这份指南 （WIP）

在一年前刚开始准备小明工作室的课程内容和招生信息的时候，我是惶恐的。因为我深知互联网上优秀的教程太多了，还有很多甚至是免费的。

但如今，在一年的线下教学以后，我知道了。和那些网上数不清的教程相比，这门课程的价值在哪里。

1. 信息筛选

当网上提供的信息太多的时候，对于初学者来说，如何分辨有效的信息就变得和学习本身一样复杂。

因为我当时就是这样学过来的，尝试去跟着每一份能找到的资料学习。我之所以用有效来描述，而不是用好与坏，是因为通常你总能学到一些东西，但最大的差别在于效率。

2. 以身入局

我之前也有写过别的游戏开发教程，有完整的，比如这个：[GameMaker: Studio 中文教程](https://indienova.com/indie-game-development/gms-tutorial-1-introduction-and-installation/)

也有烂尾的，比如这个：[【如何在Unreal中对Spine动画进行控制】GameDream-Unreal互助小组的第三课](https://www.bilibili.com/video/BV11E41197CE/)

但是比起自媒体的随心所欲，每次都要在课堂上面对学生所带来的责任感是完全不同的。

3. 课程以外

我常常想，如今有这么多的学习资料，人人都可以做游戏了，但事实不是这样的（虽然有了AI以后能做的人更多了）。以我来说，就像有那么多程序员面试指南，也没能让我拿到Riot的Offer，那么多的软件架构之道，也没成为一个架构师。

就像学生给我带来的是怎样感，而课程和老师的存在给你带来的是一种相互的长期承诺。这种承诺帮助我们从日常生活的干扰和信息的碎片中拉出来，投入到一件你曾经认真想过之后，决定去做的一件事。

## 如何使用这份指南的指南

“Sooner or later, you're going to realize, just as I did, that there's a difference between knowing the path and walking the path.” - Neo from The Matrix

“知道该怎么做，和真正把它做出来，是两回事。”

我特别喜欢这句话。现在太多的短视频有类似“我用AI1小时做出了杀戮尖塔”这样的标题，这给了很多有兴趣开发游戏的爱好者很糟糕的误导：
1. 认为游戏开发很简单
2. 有了AI以后游戏开发者都会失业，所以我也没必要学了

其实第一点很好分辨，那些发布xx小时做出xxx的视频作者，自己都没有通过游戏挣到钱（当然他们可以通过视频挣钱）。第二点有可能会是真的，但除非AI能够达到自己选择题材、做出整个游戏并发布给玩家的地步（当然这个时候可能更多别的工作早就已经全部由AI取代了），不然总是需要游戏开发者来完成那些AI不能完成的部分。我承认AI的到来确实让初级游戏开发者的职位变少了，但另一方面却让独立游戏开发者的机会变多了。所以从爱好者到职业之间的间隔变得更大，但这不一定是坏事，因为只有热爱才能填补这个间隔。

而这份指南最重要的特点就是反其道而行：
1. 放低期待，让你从最简单的部分开始做一个最简单的游戏。
2. 让你动手。每个部分都包含“可验证的步骤”，尽量以最小的单位，让你通过运行游戏的方式来验证你所做的改动。

Ming 编写与维护 · 小明工作室

[在线阅读](https://minggamestudio.github.io/unity-game-dev-guide/) · [维护说明](docs/maintenance.md) · [章节模板](templates/chapter.md)

> 四个分部的框架已建立，正文将随课程与开发实践逐步补充。

## 从哪里开始写

从下方的四个分部选择章节进行编辑。新章节放入对应的 `docs/guide/<分部>/` 目录，使用带数字前缀的文件名，并以 `# 章节标题` 开头。网站会自动按文件名排序生成分部目录；具体步骤见维护说明。

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

除另有标注外，本书由 Ming 原创并有权授权的正文文字，采用 [CC BY-NC-SA 4.0（署名—非商业性使用—相同方式共享 4.0 国际）](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans) 许可。

此许可仅适用于正文文字；代码、游戏素材和第三方内容以各自许可为准。详情见 [版权与许可](docs/license.md) 和 [LICENSE.md](LICENSE.md)。


## 全书结构

- [第一部分：Unity 2D 游戏开发入门](docs/guide/2d-platformer/index.md)：使用 Pixel Adventure 像素资源，制作一款 2D 平台跳跃游戏（Platformer）。
- [第二部分：Unity 3D 游戏开发入门](docs/guide/3d-tower-defense/index.md)：用 Blender 制作美术资源，在 Unity 中制作一款 3D 塔防游戏。
- [第三部分：Unity Shader 与 3D Graphics 入门](docs/guide/shaders/index.md)：以 Unity Shader 制作游戏中常用的视觉效果，作为 3D Graphics 的入门课。
- [第四部分：Mine Beyond 开发实践](docs/guide/mine-beyond/index.md)：记录小明工作室第一个计划在 Steam 上线的游戏 Mine Beyond 的开发过程。

当前已建立基本框架，章节正文待编写；Shader 具体内容规划中。
