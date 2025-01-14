function dividir(num) {
  console.log(`O número é ${num}`);
  if (num % 2 === 0) {
    console.log(`Vou dividir pois o número é ${num}`);
    dividir(num / 2);
  } else {
    console.log(`Não posso mais dividir pois o número é ${num}`);
    return num;
  }
}

dividir(100);

function fatorial(num) {
  console.log(`Fatorial de: ${num}`);
  if (num === 0) {
    console.log("Fatorial de 0 é 1");
    return 1;
  } else if (num === 1) {
    console.log("Fatorial de 1 é 1");
    return 1;
  } else {
    console.log(`${num} x !${num - 1}`);
    return num * fatorial(num - 1);
  }
}

console.log(fatorial(10));
