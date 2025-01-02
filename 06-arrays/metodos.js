const nomes = ["Andrew", "Viviane", "Rafael", "Irvin", "Sophia"];
console.log(nomes);

const adicionarNoFim = nomes.push("Kátia");
console.log(adicionarNoFim);

const adicionarNoInicio = nomes.unshift("Janico");
console.log(adicionarNoInicio);

const retirarNoFim = nomes.pop();
console.log(retirarNoFim);

const retirarNoInicio = nomes.shift();
console.log(retirarNoInicio);

const inclui = nomes.includes("Sophia");
console.log(inclui);

const indice = nomes.indexOf("Viviane");
console.log(indice);

const cortar = nomes.slice(0, 2);
console.log(cortar);

const concatenar = nomes.concat(retirarNoFim, retirarNoInicio);
console.log(concatenar);

const substituir = concatenar.splice(
  5,
  2,
  `Sra. ${retirarNoFim}`,
  `Sr. ${retirarNoInicio}`
);
console.log(substituir, concatenar);

const reverter = [...nomes].reverse();
console.log(reverter);

const emOrdem = [...nomes].sort();
console.log(emOrdem);

console.log("");
