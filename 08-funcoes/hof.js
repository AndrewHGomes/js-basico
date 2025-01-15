function calcular(a, b, operacao) {
  console.log(`Realizando uma operação entre ${a} e ${b}:`);
  return operacao(a, b);
}

const soma = (a, b) => `É uma soma: ${a} + ${b} = ${a + b}`;

const subtrair = (a, b) => `É uma subtração: ${a} - ${b} = ${a - b}`;

console.log(calcular(10, 6, soma));

console.log(calcular(10, 6, subtrair));

const linguagensProgramacao = [
  "JavaScript",
  "Python",
  "C#",
  "Java",
  "PHP",
  "Ruby",
];

console.log(`Minha Lista: ${linguagensProgramacao}`);

linguagensProgramacao.forEach((e, i) => console.log(`${i} -> ${e}`));

const modificar = linguagensProgramacao.map((e) => {
  return e === "JavaScript" ? "JavaScript-The Best" : e;
});

console.log(modificar);

const filtrar = linguagensProgramacao.filter((e) => {
  return e[0] === "J";
});

console.log(filtrar);

const reduzir = linguagensProgramacao.reduce((prev, curr) => {
  return prev + curr;
});

console.log(reduzir);

const ordenarPorTamanho = [...linguagensProgramacao].sort((a, b) => {
  return a.length - b.length;
});

console.log(ordenarPorTamanho);

const ordenarPelaLetra = [...linguagensProgramacao].sort();

console.log(ordenarPelaLetra);
