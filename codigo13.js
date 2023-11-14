"use strict"

// add a zero
const addZero = (n)=>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

// function that update the time
const actualizarHora = ()=>{
    const time = new Date();
    let hora = addZero(time.getHours());
    let min = addZero(time.getMinutes());
    let seg = addZero(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = min;
    document.querySelector(".seg").textContent = seg;
}

actualizarHora();

setInterval(actualizarHora,1000)