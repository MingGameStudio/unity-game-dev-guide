# 从第一个Shader开始

### 简单回顾Blender建模和图像纹理

<img width="656" height="599" alt="Simple Sci-Fi Energy Battery" src="https://github.com/user-attachments/assets/62c3944a-a61d-4746-bcd7-b5eebce722e5" />

这是一张由ChatGPT生成的能量电池模型效果图。第一个练习的主要目的是回顾在3D游戏开发课程中学过的Blender基本操作。

---

## 胡思乱想

游戏开发需要学会从别的艺术或媒体吸取创意和灵感，所以一定要给别的娱乐活动留出时间。写这份文档的时候我正在看一部看起来像是低成本的恐怖片《瘴气营地的青春》，抱歉不能在这里把电影名写完整。

影片开头的一幕里，女主角在一个荒废的影院里看一部恐怖片。当恐怖片放到凶手即将出现的那一幕，放映机突然卡住，女主角惊吓回头，说出了下面这句台词：
<img width="1296" height="1300" alt="image" src="https://github.com/user-attachments/assets/9d6e01cb-15ad-4c20-858d-0226c55b28be" />

我原以为这是角色在打破第四面墙，但AI却告诉我这叫做“元电影”，对应的是《史丹利的寓言》、《艾希》这样的“元游戏”。Mine Beyond里的AI助手可以加入这样的台词，“这一趟收获满满的回去，可以好好给飞船升级一下了”。

我超爱这部电影，就好像导演想把电影学院的教科书拍到观众脸上 ：）（虽然观众可能会觉得电影有点无厘头的感觉）

---

先从建模部分开始：

1. 打开Blender，把新建的Cube在Z轴拉伸2倍，同时在Z轴上移2。（回顾：Blender初始Cube的边长是2，每1单位对应1米）
2. 按Tab切换到编辑模式（再次回忆快捷键），选中顶面Inset到原有大小的一半（0.5）
3. 把这个面向上Extrude：0.3
4. 把这个面缩小：0.8，完成基本形状的建立\
<img width="263" height="375" alt="image" src="https://github.com/user-attachments/assets/a9860aa9-c02d-43d8-9dd2-bda2949dbddc" />\
5. 选择位于Y轴的那一个侧面（这个面将朝向Unity中-Z轴方向，提问：为什么要选择这个方向呢？），进行Loopcut，环切的位置大概在0.8~0.85
6. Inset：0.1，然后通过Scale和Move把这个Inset得到的面调整到合理大小
7. 在顶点模式下选择Inset这个面的四个顶点，进行Bevel操作，需要编辑参数为Width：0.1，Affect：Vertices
8. 选中中间最大的那个面，Extrude：-0.15。构造出电量显示面板\
<img width="310" height="487" alt="image" src="https://github.com/user-attachments/assets/063d71c1-089b-4e8b-b78e-36362ef16cc2" />\
9. 


## 学习目标

<!-- 待补充 -->

## 准备工作

<!-- 待补充：Unity 版本、渲染管线、工具设置与所需素材。 -->

## 实践步骤

<!-- 待补充 -->

## 练习

<!-- 待补充 -->

## 本章小结

<!-- 待补充 -->

[返回本部分概览](./index.md)
