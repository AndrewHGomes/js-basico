for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(`Número é ${i}`);
}

console.log("");

for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`Número é ${i}`);
}

console.log("");

for (let i = 0; i <= 4; i++) {
  if (i === 2) {
    continue;
  }
  console.log(`Número é ${i}`);
}
