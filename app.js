let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();

function exibiçãoDeTexto (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibiçãoDeTexto('h1','Jogo do número secreto')
exibiçãoDeTexto('p',`Escolha um número entre 1 e ${numeroMax}`)

function verificarChute() {
    console.log(numeroSecreto);
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * numeroMax + 1)
}