// Função para solicitar um número
const solicitarNumero = (mensagem) => {
    const numero = parseFloat(prompt(mensagem)); // Solicita o número e converte para float
    return numero;
  };
  
  // Função para calcular a média
  const calcularMedia = (num1, num2) => {
    return (num1 + num2) / 2; // Calcula a média
  };
  
  // Função principal que solicita os números, calcula a média e exibe o resultado
  const calcularEMostrarMedia = () => {
    const numero1 = solicitarNumero("Digite o primeiro número:");
    const numero2 = solicitarNumero("Digite o segundo número:");
    
    const media = calcularMedia(numero1, numero2); // Calcula a média
    alert("A média dos números é: " + media); // Exibe a média usando alert
  };
  
  // Chama a função principal
  calcularEMostrarMedia();
  