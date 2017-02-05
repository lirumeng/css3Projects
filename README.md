# css3基础知识

总结平时遇到的css3基础知识

## flex弹性布局
见[flex-layout](https://github.com/lirumeng/flex-layout)

## calc()函数
使用[`calc()`函数](./demos/calc().html)计算`<div>`元素的宽度
```css
#div1 {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
```

### 定义与用法
`calc()` 函数用于动态计算长度值。
* 需要注意的是，运算符前后都需要保留一个空格，例如：`width`: `calc(100% - 10px)`
* 任何长度值都可以使用calc()函数进行计算
* `calc()`函数支持 `"+"`, `"-"`, `"*"`, `"/"` 运算
* `calc()`函数使用标准的数学运算优先级规则

### CSS 语法
```css
calc(expression)
```

`expression` 一个数学表达式，结果将采用运算后的返回值

## css变量var
悲催的是，IE11都不兼容/(ㄒoㄒ)/~~
![image](./imgs/css_var.png)

### CSS变量var()语法和用法和特性
CSS中原生的变量定义语法是：`--*`，变量使用语法是：`var(--*)`，其中`*`表示我们的变量名称。关于命名这个东西，各种语言都有些显示，例如CSS选择器不能是数字开头，JS中的变量是不能直接数值的，但是，`在CSS变量中，这些限制通通没有`，例如：
```css
:root {
  --1: #369;
}
body {
  background-color: var(--1);
}
```
结果背景色如下：
![image](./imgs/1.png)

但是，不能包含`$`，`[`，`^`，`(`，`%`等字符，普通字符局限在只要是`[0-9]` `[a-zA-Z]` `_`和`-`这些组合，但是`可以是中文，日文或者韩文`，例如：
```css
body {
  --深蓝: #369;
  background-color: var(--深蓝);
}
```

注意：无论是变量的定义和使用只能在声明块`{}`里面

变量的定义，或者说声明跟CSS计数器的声明类似的，你应该摆脱`Sass/Less`等预编译工具语法先入为主的语法影响，把CSS的原生变量理解为一种CSS属性。这样，你就对其权重和变量应用规则要容易理解地多。
例如下面这个例子：
```css
:root { --color: purple; }
div { --color: green; }
#alert { --color: red; }
* { color: var(--color); }
```
```html
<p>我的紫色继承于根元素</p>
<div>我的绿色来自直接设置</div>
<div id='alert'>
  ID选择器权重更高，因此阿拉是红色！
  <p>我也是红色，占了继承的光</p>
</div>
```
上面这个例子我们可以获得这些信息：
* 变量也是跟着CSS选择器走的，如果变量所在的选择器和使用变量的元素没有交集，是没有效果的。例如`#alert`定义的变量，只有`id`为`alert`的元素才能享有。如果你想变量全局使用，则你可以设置在`:root`选择器上；
* 当存在多个同样名称的变量时候，变量的覆盖规则由CSS选择器的权重决定的，但并无`!important`这种用法，因为没有必要，`!important`设计初衷是干掉JS的`style`设置，但对于变量的定义则没有这样的需求。