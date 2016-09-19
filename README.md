# css3Projects
all css3 projects put into this repository

CSS3和JS配合：CSS制作效果，JS输出HTML和控制切换

#区域模块分解
##左右存放区：
1.以<当前展现的海报区>切分为左右区域
2.作用是存放其他海报
3.每个海报位置随机，角度随机
##当前展现的海报区：
1.水平垂直居中
2.允许被<控制条按钮>控制展现和翻转

#VCD分解
View视觉：HTML+CSS 基本界面模板
Controller控制：JavaScript 内容处理、事件处理
Data数据：data.js 非必须，助于理解

# 前端界面
div.photo 负责位移，旋转（平面xy旋转）
div.photo-wrap 负责3D翻转（正反面切换）
# 3D相关设置
## .photo-wrap
-webkit-backface-visibility:hidden;  当元素不面向屏幕时隐藏
-webkit-transform-style: preserve-3d; 支持子元素的3D效果
## .side 
-webkit-transform: translate(0px,0px) rotateY(0deg); 定义位移以及沿着Y轴旋转

# 过渡动画
##语法
transition: property duration timing-function delay;

# 脚本操作
1.内容输出（模板+数据）和控制条输出
2.位置分配控制 a)中央位置 b)左右随机位置
3.翻面控制

## 内容输出
模板字符串：利用已经编写好的视图，隐藏起来，然后使用
innerHTML获取其源码字符串
## 关键字替换
遍历数据，且从把源码字符串中的数据部分替换为真实的数据

拼接好最终内容的HTML字符串回写

# 排序海报
根据一个值N，取得第N个海报（#photo-N）添加样式 .photo-center
1.随意点一个海报
2.控制按钮对应海报
3.第一次排序，随机取一个海报