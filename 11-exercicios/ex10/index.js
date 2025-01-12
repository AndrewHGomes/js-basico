let palavra = prompt("Digite uma palavra para vermos se é palíndromo:");

palavra = palavra.toUpperCase().trim();

console.log(palavra);

let palavraInvertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

alert(`
  Palavra Digitada: ${palavra}
  Palavra Invertida: ${palavraInvertida}`);

if (palavra === palavraInvertida) {
  alert(`${palavra} é um Palíndromo!`);
} else {
  alert(`${palavra} não é um Palíndromo!`);
}
