alert('Bem vindo ao jogo do Número Secreto');

// Escolha de dificuldade
let dificuldade = Number(prompt("Escolha o nível de dificuldade:\n1 - Fácil (1 a 10)\n2 - Médio (1 a 100)\n3 - Difícil (1 a 1000)"));

let numeroMaximo;
let limiteTentativas;

if (dificuldade === 1) {
    numeroMaximo = 10;
    limiteTentativas = 5;
} else if (dificuldade === 2) {
    numeroMaximo = 100;
    limiteTentativas = 10;
} else {
    numeroMaximo = 1000;
    limiteTentativas = 15;
}

// Gerar número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto e ainda restarem tentativas
while (chute != numeroSecreto && tentativas <= limiteTentativas) {
    chute = Number(prompt(`Tentativa ${tentativas}/${limiteTentativas}:\nEscolha um número entre 1 e ${numeroMaximo}`));

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
        } else {
            alert(`O número é maior que ${chute}`);
        }
        tentativas++;
    }
}

// Resultado final
if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
} else {
    alert(`Suas ${limiteTentativas} tentativas acabaram. O número secreto era ${numeroSecreto}.`);
}
