// 基于事件委托控制nav-detail的显示和隐藏
let headBox=document.querySelector('#head_box'),
    navDtetail = headBox.querySelector('.nav-detail'),
    headNav = headBox.querySelector('.head-nav'),
    iconWeixin = headBox.querySelector('.icon-weixin'),
    weixinDetail = headBox.querySelector('.weixin-detail'),
    headPerson = headBox.querySelector('.head-person'),
    personDetail = headBox.querySelector('.person-detail');
// 获取所有祖先元素
const getParents = function getParents(element){
    let arr = [element],
        parent = element.parentNode;
        
    while (parent){
        arr.push(parent)
        parent = parent.parentNode
    }
    return arr;
};
document.addEventListener('mouseover',function(ev){
    let target = ev.target,
    parents = getParents(target);
    // 判断事件源如果是导航栏的话
    if(parents.indexOf(headNav)>-1){
        navDtetail.style.display = 'block';
        // navDtetail.offsetWidth;//刷新浏览器机制
        // navDtetail.style.transform = 'translateY(0px)';
        // navDtetail.style.opacity = '100%';
        navDtetail.style.animation = 'headMove .2s both'
        return;
    }
    // 事件源是详情
    if (parents.indexOf(navDtetail)>-1){
        return;
    }

    //如果移到了微信公众号手机图标上
    if(parents.indexOf(iconWeixin)>-1){
        weixinDetail.style.display = 'block';
        // navDtetail.offsetWidth;//刷新浏览器机制
        // navDtetail.style.transform = 'translateY(0px)';
        // navDtetail.style.opacity = '100%';
        weixinDetail.style.animation = 'headMove .2s both'
        return;
    }
    // 事件源是详情
    if (parents.indexOf(weixinDetail)>-1){
        return;
    }

    //如果移到亲爱的召唤师
    if(parents.indexOf(headPerson)>-1){
        personDetail.style.display = 'block';
        // navDtetail.offsetWidth;//刷新浏览器机制
        // navDtetail.style.transform = 'translateY(0px)';
        // navDtetail.style.opacity = '100%';
        personDetail.style.animation = 'headMove .2s both'
        return;
    }
    // 事件源是详情
    if (parents.indexOf(personDetail)>-1){
        return;
    }


    // 其他事件源
    navDtetail.style.display = 'none';
    navDtetail.style.animation = 'none'
    weixinDetail.style.display = 'none';
    weixinDetail.style.animation = 'none'
    personDetail.style.display = 'none';
    personDetail.style.animation = 'none'
    // navDtetail.style.transform = 'translateY(-5px)';
    // navDtetail.style.opacity = '0%';
})