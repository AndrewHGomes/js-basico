let c = 10;

while (c >= 0) {
  console.log(`Valor de c - ${c}`);
  if (c === 6) {
    console.log(`Parou porque c é ${c}`);
    break;
  }
  c--;
}

console.log("");

for (let i = 10; i <= 100; i += 10) {
  console.log(`Rodando ${i}`);
  if (i >= 50) {
    console.log(`Parou no ${i}`);
    break;
  }
}

console.log("");

let velocidade = 100;

while (velocidade > 0) {
  console.log(`O carro está a ${velocidade} km/h`);
  velocidade -= 20;
  console.log("Diminuindo 20 km/h");

  if (velocidade === 40) {
    break;
  }
}

console.log("O carro parou.");

console.log("");
