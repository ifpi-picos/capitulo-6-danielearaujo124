function exemploEscopoBloco() {
    if (true) {
      // Variável declarada dentro do bloco
      let variavelBloco = "Eu existo apenas dentro deste bloco";
      console.log(variavelBloco); // Funciona: acessa a variável dentro do bloco
    }
  
    // Tentativa de acessar a variável fora do bloco
    console.log(variavelBloco); // Erro: variavelBloco não está definida
  }
  
  // Chama a função
  exemploEscopoBloco();
  