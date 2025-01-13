let total = 25 + 6;

console.log(`Total antes da função: ${total}`);

function subtraindo(a, b) {
  total = a - b;
  console.log(`Total dentro da função: ${total}`);
  return `${a} - ${b} = ${total}`;
}

subtraindo(10, 5);

console.log(subtraindo(6, 4));

console.log(`Total depois da execução da função: ${total}`);

console.log("");
