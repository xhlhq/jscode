const slideItems = document.querySelectorAll('.slide-in');

//减少事件监听的频率
function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function checkSlide(e){
    slideItems.forEach(item => {
        //图片显示一半的时候的位置
        const showPosition = (window.scrollY + window.innerHeight) - item.height/2;
        //图片底部到顶端的距离
        const itemBottom = item.offsetTop + item.height;
        //图片顶部过了一般，显示位置
        const isHalfShow = showPosition > item.offsetTop;
        //图片底部还没有消失
        const isNotScrolledPast = window.scrollY < itemBottom;
        if(isHalfShow && isNotScrolledPast){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
}

window.addEventListener('scroll',debounce(checkSlide))