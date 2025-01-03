const comConst = "Variável com const";
console.log(comConst);

// console.log(hoistingConst);
const hoistingConst = "const não tem hoisting";
console.log(hoistingConst);

const constScope = "Escopo global";
console.log("Antes do bloco:", constScope);

{
  const constScope = "Escopo do bloco";
  console.log("Dentro do bloco:", constScope);
}

console.log("Depois do bloco:", constScope);

console.log("");
