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
