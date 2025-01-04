console.log("Início do programa:");

// const suaAltura = Number(prompt("Digite sua altura:"));
// const seuPeso = Number(prompt("Digite seu peso:"));

const suaAltura = 1.81;
const seuPeso = 67;

const calculo = seuPeso / (suaAltura * suaAltura);
const imc = calculo.toFixed(1);

const magreza = 18.4;
const normal = 25;
const sobrepeso = 30;
const obesidade1 = 40;
const obesidade2 = 40.1;

if (imc <= magreza) {
  // alert(`IMC: ${imc} | SITUAÇÃO: Magreza`);
  console.log(`IMC: ${imc} | SITUAÇÃO: Magreza`);
} else if (imc <= normal) {
  // alert(`IMC: ${imc} | SITUAÇÃO: Normal`);
  console.log(`IMC: ${imc} | SITUAÇÃO: Normal`);
} else if (imc <= sobrepeso) {
  // alert(`IMC: ${imc} | SITUAÇÃO: Sobrepeso`);
  console.log(`IMC: ${imc} | SITUAÇÃO: Sobrepeso`);
} else if (imc <= obesidade1) {
  // alert(`IMC: ${imc} | SITUAÇÃO: Obesidade I`);
  console.log(`IMC: ${imc} | SITUAÇÃO: Obesidade I`);
} else {
  // alert(`IMC: ${imc} | SITUAÇÃO: Obesidade II`);
  console(`IMC: ${imc} | SITUAÇÃO: Obesidade II`);
}

console.log("Fim do programa!");

console.log("");
