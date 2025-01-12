// const umaString = prompt("Digite algo textual:");

// console.log(`${umaString} | ${typeof umaString}`);
// alert(`${umaString} | ${typeof umaString}`);

// const umNumber = Number(prompt("Digite algum número:"));

// console.log(`${umNumber} | ${typeof umNumber}`);
// alert(`${umNumber} | ${typeof umNumber}`);

// const umBoolean = confirm("OK para true ou CANCEL para false:");

// console.log(`${umBoolean} | ${typeof umBoolean}`);
// alert(`${umBoolean} | ${typeof umBoolean}`);

console.log("");

let peso;

console.log(peso);
peso = 69;
console.log(typeof peso);

let nome = "Andrew";
let idade = 36;
let estrelas = 4.5;
let inscrito = true;

let estudante = {};
console.log(typeof estudante);

estudante.nome = nome;
estudante.idade = idade;
estudante.estrelas = estrelas;
estudante.inscrito = inscrito;
estudante.peso = peso;

console.log(estudante);
console.log(
  `${estudante.nome}, de idade ${estudante.idade} anos, tem ${estudante.peso} kg.`
);

let estudantes = [];

estudantes[0] = estudante;
console.log(estudantes);

let novoEstudante = {
  nome: "Viviane",
  idade: 39,
  estrelas: 4.8,
  inscrito: false,
  peso: 68,
};

estudantes[1] = novoEstudante;
console.log(estudantes);

console.log(a);
var a = 1;

console.log("");

let pessoa = "Andrew";
console.log(pessoa);
pessoa += " Gomes";
console.log(pessoa);

console.log("");
