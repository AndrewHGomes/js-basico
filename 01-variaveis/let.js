let comLet = "Variável com let";
console.log(comLet);

// console.log(hoistingLet);
let hoistingLet = "let não tem hoisting";
console.log(hoistingLet);

let letScope = "Escopo global";
console.log("Antes do bloco:", letScope);

{
  let letScope = "Escopo do bloco";
  console.log("Dentro do bloco:", letScope);
}

console.log("Depois do bloco:", letScope);

console.log("");
