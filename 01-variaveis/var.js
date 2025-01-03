var comVar = "Variável com var";
console.log(comVar);

console.log(hoistingVar);
var hoistingVar = "var tem hoisting";
console.log(hoistingVar);

var varScope = "Escopo global";
console.log("Antes do bloco:", varScope);

{
  var varScope = "Escopo do bloco";
  console.log("Dentro do bloco:", varScope);
}

console.log("Depois do bloco:", varScope);

console.log("");
