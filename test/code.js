
let wrap = document.querySelector(".lol");
let wrap1 = document.querySelector(".lol1");
let button = document.querySelector(".button");

setTimeout(function(){delayShow("wrapper_1", "delay", wrap)}, 600);



window.onscroll = function(){
let pageHeight = window.scrollY;
    if(pageHeight=>100){
        setTimeout(function(){delayShow("wrapper_2", "delay1", wrap1)}, 600);

    }
}




function delayShow(x,y,z){
    z.classList.remove(x);
    z.classList.add(y);
}



