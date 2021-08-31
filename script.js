"use strict" //fica vigiando o que faço de errado

const lampada = document.getElementById("lampada")
let idInterval

//FUNÇÕES

function buttonOnOff (ligarState, desligarState) {
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    
    desligar.disabled = ligarState
    ligar.disabled = desligarState
}

//DESLIGAR BOTÃO

function ligarLampada() {

    if(!quebrarLampada()){
        lampada.src = "img/ligada.jpg"
        buttonOnOff(false, true)
    }
}

//DESLIGAR BOTÃO

function desligarLampada() {

    if(!quebrarLampada()){
        lampada.src = "img/desligada.jpg"
        buttonOnOff(true, false)
    }
}



//QUEBRAR LAMPADA

// function lampadaQuebrada() {
//     return document.getElementById("lampada").
//     src.indexOf("quebrada") !== -1
// }

//FUNCTION ARROW
const lampadaQuebrada = () => document.getElementById("lampada").src.indexOf("quebrada") !== -1


function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
    buttonOnOff(true, true)
}


//PISCAR LAMPADA

//FUNCTION ARROW
const lampadaDesligada = () => lampada.src.includes("desligada")

//função normal
// function lampadaDesligada (){
//     return lampada.src.includes("desligada")
// }


function trocarImagem(){
    if (lampadaDesligada()){
        ligarLampada()
    }
    else{
        desligarLampada()
    }
}


function piscarLampada(){

    const piscar = document.getElementById("piscar")
    

    if(piscar.textContent == "Piscar"){
        idInterval = setInterval(trocarImagem, 1000);
        piscar.textContent = "Parar"
    }
    else{
        clearInterval(idInterval)
        piscar.textContent = "Piscar"
    }
}
 



//EVENTO
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)
document.getElementById("piscar").addEventListener("click", piscarLampada )

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)

