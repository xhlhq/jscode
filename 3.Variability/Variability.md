# Variability

### HTML

* input的**range**类型：滑动条
  * 加`data-sizing=px`属性，传出后缀

* input的**color**类型：拾色器

### CSS

* 定义变量

```css
:root {
            /* 自定义变量 */
       --spacing: 11px;
       --blur: 5px;
       --base: #8aa8af;
 }     
```

* 使用变量

```css
img {
            /* 使用变量 */
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
 }
```

### javaScript

* 获取所有的input
* 遍历input数组，为其添加事件
  * mousemove事件用于监控rang
  * cahnge事件用于监控color
* 获取文档对象（**documentElement**），按name为其下面的标签添加样式
  * **dataset**：以对象的形式获取所有自定义的`data-`属性
* 根据id为code中的数据更新值