const primeiroNumero = Number(prompt("Insira o 1º número:"));
const segundoNumero = Number(prompt("Insira o 2º número:"));

console.log(primeiroNumero, segundoNumero);

const soma = (a, b) => {
  return `SOMA: ${a} + ${b} = ${a + b}`;
};

const subtracao = (a, b) => {
  return `SUBTRAÇÃO: ${a} - ${b} = ${a - b}`;
};

const multiplicacao = (a, b) => {
  return `MULTIPLICAÇÃO: ${a} x ${b} = ${a * b}`;
};

const divisao = (a, b) => {
  const dividir = a / b;
  return `DIVISÃO: ${a} : ${b} = ${dividir.toFixed(2)}`;
};

alert(
  `${soma(primeiroNumero, segundoNumero)}
${subtracao(primeiroNumero, segundoNumero)}
${multiplicacao(primeiroNumero, segundoNumero)}
${divisao(primeiroNumero, segundoNumero)}
`
);
