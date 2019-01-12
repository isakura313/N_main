
let wrap = document.querySelector(".lol");
let wrap1 = document.querySelector(".lol1");
let button = document.querySelector(".button");


// здесь происходит загрузка на первый слайд
setTimeout(function(){delayShow("wrapper_1", "delay", wrap)}, 600);


window.onscroll = function(){
let pagePosition = window.scrollY;
    if(pagePositiont=>100){
        setTimeout(function(){delayShow("wrapper_2", "delay1", wrap1)}, 600);
    }
}


function delayShow(existClass,addClass,e){
    //первый аргумент - имеющийся класс, второй добавляющийся, третий - на какой элемент назначается
    e.classList.remove(existClass);
    e.classList.add(addClass);
}



