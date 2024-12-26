console.log("STRINGS:");

console.log("Andrew " + "Henrique" + " Gomes");

console.log(`Expressão JS: 1 + 1 = ${1 + 1}`);

const umTexto = "String é uma Lista/Conjunto de Caracteres";

console.log(`${umTexto} | ${typeof umTexto}`);

const comAspas = "escritas entre aspas";

console.log("Concatenação: Para concatenar, as strings devem ser " + comAspas);

const comCrase = `escritas entre crases`;

console.log(`Interpolação: Para interpolar, as strings devem ser ${comCrase}`);

console.log("");

//------------------------------------------------------------

let meuNome = "Andrew";

meuNome += " " + "Gomes";

console.log(meuNome);

console.log("");

//------------------------------------------------------------

console.log(umTexto.toUpperCase());
console.log(umTexto.toLowerCase());
console.log(umTexto.includes("Lista"));

const fraseArray = umTexto.split(" ");
console.log(fraseArray);

const arrayFrase = fraseArray.join(" ");
console.log(arrayFrase);
