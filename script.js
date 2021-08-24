"use strict" //fica vigiando o que faço de errado


//FUNÇÕES

function lampadaQuebrada() {
    return document.getElementById("lampada").
    src.indexOf("quebrada") !== -1
}

function ligarLampada() {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    if(!lampadaQuebrada()){
        lampada.src = "img/ligada.jpg"
    
        desligar.disabled = false
        ligar.disabled = true
    }

}

function desligarLampada() {
    const lampada = document.getElementById("lampada")
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")

    if(!lampadaQuebrada()){
        lampada.src = "img/desligada.jpg"
        desligar.disabled = true
        ligar.disabled = false
        
    }
  
}

function quebrarLampada() {
    const lampada = document.getElementById("lampada")
    lampada.src = "img/quebrada.jpg"

    desligar.disabled = true
    ligar.disabled = true
}




// }

//EVENTO
document.getElementById("ligar").addEventListener("click", ligarLampada)
document.getElementById("desligar").addEventListener("click", desligarLampada)

document.getElementById("lampada").addEventListener("dblclick", quebrarLampada)
document.getElementById("lampada").addEventListener("mouseover", ligarLampada)
document.getElementById("lampada").addEventListener("mouseleave", desligarLampada)

