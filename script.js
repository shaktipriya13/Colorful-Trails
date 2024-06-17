document.addEventListener('mousemove',function(s){
    let body=document.querySelector('body');
    let circle=document.createElement('span');
    let x=s.offsetX;
    let y=s.offsetY;
    circle.style.left=x + "px";
    circle.style.top=y + "px";
    let size=Math.random()*100;
    circle.style.width=30+size+"px";
    circle.style.height=30+size+"px";
    body.appendChild(circle);
    setTimeout(function(){
        circle.remove();
    },1800)
})