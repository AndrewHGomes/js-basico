function withReturn() {
  return `Este é o retorno da função.`;
}

console.log(withReturn());

const retorno = withReturn();

console.log(retorno);

function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return `A média entre ${a} e ${b} é ${media}`;
}

console.log(calcularMedia(5, 8));
console.log(calcularMedia(6.5, 7.5));

function criarProduto(nome, preco) {
  const produto = {
    nome,
    preco,
  };

  return produto;
}

const teclado = criarProduto("Teclado C3TECH preto", "R$ 165.00");

console.log(teclado);

function verificarIdade(idade) {
  if (idade >= 18) {
    return `${idade} anos. Maior de idade.`;
  } else {
    return `${idade} anos. Menor de idade.`;
  }
}

console.log(verificarIdade(36));
console.log(verificarIdade(15));

function multiplicar(a, b) {
  return `Multiplicando: ${a} x ${b} = ${a * b}`;
}

const num1 = 28;
const num2 = 12;

console.log(multiplicar(num1, num2));

function vitamina(arg1, arg2, arg3) {
  return `Vitamina: ${arg1}, ${arg2} e ${arg3}`;
}

const copo = vitamina("leite", "whey", "banana");

console.log(copo);

console.log("");
