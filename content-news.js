
mouseEvent(".act")
mouseEvent(".news")
mouseEvent(".vp-left")
mouseEvent(".vp-right")
function mouseEvent(ele){
    let myEle =  document.querySelector(ele);
    let lis = myEle.querySelectorAll(".part-tab-title li")
    lis.forEach(element => {
        element.addEventListener('mouseover',function(){
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = '';
            }
            var pointIndex = this.getAttribute('data-index');
            lis[pointIndex].className = 'selected';
        })
    });
}