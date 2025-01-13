// Função para ler o peso
function lerPeso() {
    return parseFloat(prompt("Digite o seu peso em kg:"));
  }
  
  // Função para ler a altura
  function lerAltura() {
    return parseFloat(prompt("Digite a sua altura em metros:"));
  }
  
  // Função para calcular o IMC
  function calcularIMC(peso, altura) {
    return peso / (altura * altura); // Fórmula do IMC: peso / altura²
  }
  
  // Função para classificar o IMC
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  }
  
  // Função para exibir o resultado
  function exibirResultado(imc, classificacao) {
    alert("Seu IMC é: " + imc.toFixed(2));
    alert("Classificação: " + classificacao);
  }
  
  // Função principal
  function calcularEMostrarIMC() {
    const peso = lerPeso(); // Lê o peso do usuário
    const altura = lerAltura(); // Lê a altura do usuário
    const imc = calcularIMC(peso, altura); // Calcula o IMC
    const classificacao = classificarIMC(imc); // Classifica o IMC
    exibirResultado(imc, classificacao); // Exibe o resultado
  }
  
  // Chama a função principal para calcular e mostrar o IMC
  calcularEMostrarIMC();
  