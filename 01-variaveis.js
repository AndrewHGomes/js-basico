console.log("VARIÁVEIS:");

console.log("var:");

var comVar = "Declarada com var";

console.log(comVar);

console.log(hoistingVar);

var hoistingVar = "Aceita hoisting com resultado undefined";

console.log(hoistingVar);

comVar = "Mudei o valor var";

console.log(comVar);

//------------------------------------------------------------

console.log("let:");

let comLet = "Declarada com let";

console.log(comLet);

// console.log(hoistingLet);

let hoistingLet = "Não aceita hoisting";

console.log(hoistingLet);

comLet = "Mudei o valor let";

console.log(comLet);

//------------------------------------------------------------

console.log("const:");

const comConst = "Declarada com const";

console.log(comConst);

// console.log(hoistingConst);

const hoistingConst = "Não aceita hoisting";

console.log(hoistingLet);

// comConst = "NUNCA MUDA o valor";

console.log(comConst, "NUNCA MUDA o valor");

console.log("");

//------------------------------------------------------------

var clima = "quente";

clima = "frio";

console.log(`O clima está ${clima}...`);

let diaEsta = "chuvoso";

diaEsta = "ensolarado";

console.log(`...mas o dia está ${diaEsta}`);

const linguagemPreferida = "JavaScript";

// linguagemPreferida = "PHP";

console.log(`Minha linguagem de programação preferida é ${linguagemPreferida}`);

console.log("");

console.log("ESCOPO");

var x = 10;

console.log("var x antes do bloco =", x);

{
  var x = 0;
}

console.log("var x depois do bloco =", x);

console.log("");

//------------------------------------------------------------

let y = 10;
const t = 51;

console.log("let y antes do bloco =", y);
console.log("const t antes do bloco =", t);

{
  // t = 25;
  y = 20;

  const t = 100;
  // let y = 5;
  console.log("let y dentro do bloco =", y);
  console.log("const t dentro do bloco =", t);
}

console.log("let y depois do bloco =", y);
console.log("const t depois do bloco =", y);
