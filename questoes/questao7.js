// Variável global
let globalVar = "Eu sou global";

function exemploEscopo() {
  // Variável local
  let localVar = "Eu sou local";

  console.log(globalVar); // Acessa a variável global 
  console.log(localVar);  // Acessa a variável local
}

// Chamada da função
exemploEscopo();

console.log(globalVar); // Acessa a variável global 
console.log(localVar);  // Tenta acessar a variável local (erro: localVar não está definida)
