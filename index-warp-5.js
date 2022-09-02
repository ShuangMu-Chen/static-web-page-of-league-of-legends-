afterBig(".index-warp-5")
function afterBig(ele){
    let myEle =  document.querySelector(ele);
    let li = Array.from(myEle.querySelectorAll(".part-tab-title li"))
    let index = 0
    console.log(li)
    li.forEach(element => {
        element.addEventListener('mouseenter', function () {
            // element.styleSheets.insertRule('li::after { content: "";display:none }', 0);
            // element.style.
            element.className = 'selected';
        });
        element.addEventListener('mouseleave', function () { 
            if (index==element.getAttribute('data-index')){
                element.className = 'selected';
            }else{
                element.className = '';
            }
            
        });
        element.addEventListener('click',function(){
            index = element.getAttribute('data-index')
            li.forEach(ele =>{
                ele.className = ''
            })
            li[index].className = 'selected';
        })
    });
}



listBarMove('.m-champion-list-container')
function listBarMove(ele){
    let list  = document.querySelector(ele)
    let ul = document.querySelector("#J_championItemContainer")
    console.log(ul)
    list.onmousedown = (e)=>{
        console.log(e)
        let y = e.clientY;
        let sy = list.scrollTop
        list.onmousemove = (e)=>{
            list.scrollTo(0,sy + (y - e.clientY ))
        }
    }
    document.onmousedown = ()=>{
        return false;
    }
    document.onmouseup = ()=>{
        list.onmousemove = null;
    }
    
}




