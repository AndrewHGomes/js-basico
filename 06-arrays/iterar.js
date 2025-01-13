const pilotos = ["Senna", "Prost", "Alonso", "Schumacher", "Hamilton"];

for (let piloto in pilotos) {
  console.log(`For in: ${piloto} -> ${pilotos[piloto]}`);
}

console.log("");

for (let piloto of pilotos) {
  console.log(`For of: ${piloto}`);
}

console.log("");

pilotos.forEach((piloto, index) => {
  console.log(`For Each: ${piloto} na posição ${index}`);
});

console.log("");
