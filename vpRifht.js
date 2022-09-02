mouseClickVpRgiht(".warp-vp")
function mouseClickVpRgiht(ele){
    let index = 0
    let bannerW = 510
    let vpRight = document.querySelector(ele)
    let left = vpRight.querySelector('.hotprogram-list-left')
    let right = vpRight.querySelector('.hotprogram-list-right')
    let ul = vpRight.querySelector('.hotprogram-content')
    right.addEventListener('click',function(){
        index++
        move()
    });
    left.addEventListener('click',function(){
        index--
        move()
    });
    ul.addEventListener('mouseenter', function() {
        clearInterval(timer); //手指一碰 就清除定时器
    })
    ul.addEventListener('mouseleave',function(){
        timer = setInterval(function() {
            index++;
            move()
        },5000)
    })
    let timer = setInterval(function() {
        index++; //让 index++  来改变移动距离
        move()
    }, 5000)
    function move(){
        if (index>3){
            index = 0
            let traX = -index * bannerW;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + traX + 'px)'; //让ul移动

        }
        if (index<0){
            index = 3
            let traX = -index * bannerW;
            ul.style.transition = 'none';
            ul.style.transform = 'translateX(' + traX + 'px)'; //让ul移动
        }
        if(index>0 && index<4){
            let traX = -index * bannerW;
            ul.style.transition = 'all 0.7s' //渐变
            ul.style.transform = 'translateX(' + traX + 'px)'; //让ul移动
        }
        
    }
}