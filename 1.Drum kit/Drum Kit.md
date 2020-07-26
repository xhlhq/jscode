# Drum kit

### HTML

给盒子节点和音频节点自定义属性`data-key`，并使其等于对应的ASCII值

### CSS

* 布局使用flex布局
* 设置`playing样式`，作为事件活跃时的样式

### javaScript

* 监听键盘按下事件`keydown`，为其添加事件函数`playSound(event)`，并传入事件
  * 使用`event.keyCode`获取带有对应`data-key`属性值的盒子节点和音频节点
  * 使用`if(!audio)return;`排除无效键盘事件
  * 为盒子节点添加样式`playing`
  * 初始化音频节点的播放事件`audio.currentTime=0`，开始播放音频`audio.play()`

* 在每次按下事件后，都重新遍历一遍数组，将样式清除
  * 获取所有带有所有盒子节点`document.querySelector('.key')`
  * 将获取的所有盒子节点数组转化为Array数组，这样可以使用Array对象的函数`forEach`
  * 使用`forEach`遍历数组，并为各盒子节点加上监听事件`transitionend`



