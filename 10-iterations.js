console.log("ITERATIONS:");

console.log("for:");

for (let i = 0; i < 2; i++) {
  console.log(`i agora é ${i}`);
}

for (let i = 2; i >= 0; i--) {
  console.log(`i agora é ${i}`);
}

console.log("while:");

let w = 0;

while (w < 2) {
  console.log(`w agora é ${w}`);
  w++;
}

while (w >= 0) {
  console.log(`w agora é ${w}`);
  w--;
}

console.log("do | while:");

let dw = 0;

do {
  console.log(`dw agora é ${dw}`);
  dw++;
} while (dw < 2);

do {
  console.log(`dw agora é ${dw}`);
  dw--;
} while (dw >= 0);
