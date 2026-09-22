let numeroMax = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibicaoDeTexto (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibicaoDeTexto('h1','Jogo do número secreto');
exibicaoDeTexto('p',`Escolha um número entre 1 e ${numeroMax}`);

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas++;

    if (chute == numeroSecreto){
        exibicaoDeTexto('h1','Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemVitoria = `Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`;
        exibicaoDeTexto('p',mensagemVitoria)
    } else { if (chute > numeroSecreto){
            exibicaoDeTexto('p',`O número secreto é menor que ${chute}`);
        }
        else{
            exibicaoDeTexto('p',`O número secreto é maior que ${chute}`);            
        }
    }
    
}

function gerarNumeroAleatorio(){
    return parseInt(Math.random() * numeroMax + 1);
}