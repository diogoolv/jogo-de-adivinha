let res = window.document.getElementById ("res")
let computador = 0
let jogador = 0
let input = window.document.getElementById ("chutenumero")

function sortear(){
    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random()
    computador = min + Math.trunc(dif * aleatorio)
}

function jogar(){
    jogador = Number(window.prompt("Qual é seu palpite?"))
    if (jogador < computador){
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR!</strong></p>`
    } else if (jogador > computador) {
        res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR!</strong></p>`
    } else if (jogador == computador) {
        res.innerHTML += `<h3>Parabéns! Você acertou!</h3>`
    }
}