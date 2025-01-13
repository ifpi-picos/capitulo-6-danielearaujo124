const gerarNumeroSecreto = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const verificarPalpite = (numeroSecreto, palpite) => {
    if (palpite < numeroSecreto) {
        return "Seu palpite é menor que o número secreto!";
    } else if (palpite > numeroSecreto) {
        return "Seu palpite é maior que o número secreto!";
    } else {
        return "Parabéns! Você acertou!";
    }
}

const jogoDeAdivinhacao = () => {
    const numeroSecreto = gerarNumeroSecreto();
    let tentativas = 0;
    let palpite = 0;
    
    while (tentativas < 10) {
        palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
        tentativas++;

        if (palpite === numeroSecreto) {
            alert("Parabéns! Você acertou!");
            break;
        } else {
            const resultado = verificarPalpite(numeroSecreto, palpite);
            alert(resultado);
        }

        if (tentativas === 10) {
            alert(`Você usou todas as tentativas! O número secreto era ${numeroSecreto}.`);
        }
    }
}

jogoDeAdivinhacao();

