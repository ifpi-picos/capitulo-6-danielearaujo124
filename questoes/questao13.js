// Função para ler o valor em Real
function lerValorEmReal() {
    return parseFloat(prompt("Digite o valor em Real:"));
  }
  
  // Função para realizar a conversão de Real para Dólar
  function converterParaDolar(valorReal) {
    const taxa = 0.19; // Taxa fixa de conversão (1 Real = 0,19 Dólar)
    return valorReal * taxaDeCambio;
  }
  
  // Função para exibir o resultado da conversão
  function exibirResultado(valorEmDolar) {
    alert("O valor em Dólar é: " + valorEmDolar.toFixed(2));
  }
  
  // Função principal do conversor
  function conversorDeMoeda() {
    const valorEmReal = lerValorEmReal();  // Lê o valor em Real
    const valorEmDolar = converterParaDolar(valorEmReal); // Converte para Dólar
    exibirResultado(valorEmDolar); // Exibe o resultado
  }
  
  // Chama a função principal
  conversorDeMoeda();
  