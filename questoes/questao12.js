// Função para realizar a adição
function adicionar(num1, num2) {
    return num1 + num2;
  }
  
  // Função para realizar a subtração
  function subtrair(num1, num2) {
    return num1 - num2;
  }
  
  // Função para realizar a multiplicação
  function multiplicar(num1, num2) {
    return num1 * num2;
  }
  
  // Função para realizar a divisão
  function dividir(num1, num2) {
    if (num2 === 0) {
      return "Erro: Não é possível dividir por zero!";
    }
    return num1 / num2;
  }
  
  // Função para exibir o resultado
  function exibirResultado(operacao, resultado) {
    alert("O resultado da operação " + operacao + " é: " + resultado);
  }
  
  // Função principal para a calculadora
  function calculadora() {
    // Solicita os números ao usuário
    var num1 = parseFloat(prompt("Digite o primeiro número:"));
    var num2 = parseFloat(prompt("Digite o segundo número:"));
    
    // Solicita a operação
    var operacao = prompt("Escolha a operação (+, -, *, /):");
  
    var resultado;
  
    // Realiza a operação de acordo com a escolha do usuário
    if (operacao === "+") {
      resultado = adicionar(num1, num2);
      exibirResultado("adição", resultado);
    } else if (operacao === "-") {
      resultado = subtrair(num1, num2);
      exibirResultado("subtração", resultado);
    } else if (operacao === "*") {
      resultado = multiplicar(num1, num2);
      exibirResultado("multiplicação", resultado);
    } else if (operacao === "/") {
      resultado = dividir(num1, num2);
      exibirResultado("divisão", resultado);
    } else {
      alert("Operação inválida! Por favor, escolha entre +, -, * ou /.");
    }
  }
  
  // Chama a função para iniciar a calculadora
  calculadora();
  