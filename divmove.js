divMove(".hero-skin")
function divMove(hero){
    let heroEle =  document.querySelector(hero);
    let divParent = heroEle.querySelectorAll(".hero-update")
    let div = heroEle.querySelectorAll(".inner-hover")
    divParent.addEventListener('mouseenter', function () {
        div.style.display = 'block';
        setTimeout("1000");
        div.className = 'innerhover-border up-move';
    });
    divParent.addEventListener('mouseleave', function () { 
        div.style.display = 'none';
        div.className = 'innerhover-border';
    });
}