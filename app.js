alert("Boas vindas ao jogo do número secreto");
let chute;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let tentativas = 0;
console.log(numeroSecreto);

while (chute != numeroSecreto){
    tentativas++;
    chute = prompt("Escolha um númnero entre 1 e 100");
    if (chute == numeroSecreto){
        break;
    } else { 
        if (chute > numeroSecreto){
            alert("Número secreto é menor que " + chute);
        }
        else {
            alert("O número secreto é maior que " + chute);
        }
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
