function calcularMedia(num1, num2, num3) {
    const media = (num1 + num2 + num3) / 3;
    document.body.innerHTML = `<h1>A média dos números é: ${media}</h1>`;
  }
  
  calcularMedia(10, 20, 30);
  