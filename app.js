alert("Boas vindas ao jogo do número secreto");
let chute;
let numeroSecreto = 5;
console.log(numeroSecreto);

while (chute != numeroSecreto){
    chute = prompt("Escolha um númnero entre 1 e 10");
    if (chute == numeroSecreto){
        alert("O número secreto é " + numeroSecreto);
    } else { 
        if (chute > numeroSecreto){
        alert("Número secreto é menor que " + chute);
        }
        else {
            alert("O número secreto é maior que " + chute);
        }
    }
}
