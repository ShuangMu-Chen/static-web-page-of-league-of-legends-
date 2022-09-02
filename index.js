import './head_box.js'
import './swiper_container.js'
import './content-news.js'
import './divup.js'
import './vpRifht.js'
import './index-warp-5.js'

// 控制更多按钮的动画效果
let commMoreArrowList = Array.from(document.querySelectorAll('.comm-more'));
commMoreArrowList.forEach(item => {
    let parent = item.parentNode;
    if (!parent) return;
    parent.addEventListener('mouseenter', function () {
        item.className = 'comm-more move';
    });
    parent.addEventListener('mouseleave', function () {
        item.className = 'comm-more';
    });
});


document.addEventListener("mousedown",(e)=>{
    e.preventDefault();  
})
