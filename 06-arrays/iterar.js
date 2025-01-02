let contador = 0;

while (contador < nomes.length) {
  console.log(`While: ${contador + 1}º -> ${nomes[contador]}`);
  contador++;
}

console.log("");

for (let i = 0; i < nomes.length; i++) {
  console.log(`For: ${i + 1}º -> ${nomes[i]}`);
}

console.log("");

for (let nome in nomes) {
  console.log(`For in: ${nome} -> ${nomes[nome]}`);
}

console.log("");

for (let nome of nomes) {
  console.log(`For of: ${nome}`);
}

console.log("");

nomes.forEach((nome, index) => {
  console.log(`For Each: ${nome} na posição ${index}`);
});
