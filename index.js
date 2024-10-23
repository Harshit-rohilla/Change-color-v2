let main=document.querySelector("#main")
let start=document.querySelector("#start")
let stop=document.querySelector("#stop")
let inter;
start.addEventListener("click", function(e){
        inter=setInterval(function(){
        let rNum1=Math.floor(Math.random()*256);
        let rNum2=Math.floor(Math.random()*256);
        let rNum3=Math.floor(Math.random()*256);
        main.style.backgroundColor=`rgb(${rNum1}, ${rNum2}, ${rNum3})`
    },1000)
})
stop.addEventListener("click",function(e){
    clearInterval(inter);
})
