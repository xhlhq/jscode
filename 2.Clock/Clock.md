# Clock

### CSS

* transition-timing-function

`transition-timing-function: cubic-bezier(0.1,2.7,0.58,1);`

* 用rotate()转动指针

### javaScript

* const now = new Date()获取时间
* now.getSeconds()、nowgetMinutes()、now.getHours()分别获取秒、分、时
* 用获取的秒、分、时除以60再乘以360就可以算出对应的角度
* hand.style.transform = `rotate(${degrees}deg)`