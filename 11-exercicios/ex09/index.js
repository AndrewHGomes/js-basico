const numero = Number(
  prompt("Insira um número para que eu mostre sua tabuada:")
);

let tabuada = "";

for (let i = 1; i <= 10; i++) {
  tabuada += `\n${numero} x ${i} = ${numero * i}`;
}

alert(`Você vai ver a tabuada do ${numero}:${tabuada}`);
