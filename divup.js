
liMove(".act")
function liMove(ele){
    let myEle =  document.querySelector(ele);
    let div = Array.from(myEle.querySelectorAll(".innerhover-border"))
    div.forEach(element => {
        let lis = element.parentNode;
        lis.addEventListener('mouseenter', function () {
            element.style.display = 'block';
            setTimeout("1000");
            element.className = 'innerhover-border up-move';
        });
        lis.addEventListener('mouseleave', function () { 
            element.style.display = 'none';
            element.className = 'innerhover-border';
        });
    });
}


divMove(".hero-skin")
function divMove(hero){
    let heroEle =  document.querySelector(hero);
    let divParent = heroEle.querySelector(".hero-update")
    let div = heroEle.querySelector(".inner-hover")
    divParent.addEventListener('mouseenter', function () {
        div.style.display = 'block';
        setTimeout("1000");
        div.className = 'inner-hover up-move-2';
    });
    divParent.addEventListener('mouseleave', function () { 
        div.style.display = 'none';
        div.className = 'inner-hover';
    });
}