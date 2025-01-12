let dw = 0;

do {
  console.log(`Do While (++): ${dw}`);
  dw++;
} while (dw < 2);

do {
  console.log(`Do While (--): ${dw}`);
  dw--;
} while (dw >= 0);

let velocidade = 0;

do {
  console.log(`Velocidade do veículo é de ${velocidade} km/h`);
  velocidade -= 20;
} while (velocidade > 0);

console.log(`Velocidade final: ${velocidade} km/h`);

console.log("");
