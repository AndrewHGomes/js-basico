console.log("CONDITIONALS:");

console.log("if | else if | else:");

const teste = "5";

if (teste > 5) {
  console.log(`${teste} é maior que 5`);
} else if (teste < 5) {
  console.log(`${teste} é menor que 5`);
} else if (teste === "5") {
  console.log(`${teste} é igual a string '5'`);
} else {
  console.log(`${teste} é igual a 5`);
}

console.log("switch | case:");

const diaDaSemana = new Date().getDay();

let testarDia = "";

switch (diaDaSemana) {
  case 0:
    testarDia = "Domingo";
    break;
  case 1:
    testarDia = "Segunda-feira";
    break;
  case 2:
    testarDia = "Terça-feira";
    break;
  case 3:
    testarDia = "Quarta-feira";
    break;
  case 4:
    testarDia = "Quinta-feira";
    break;
  case 5:
    testarDia = "Sexta-feira";
    break;
  case 6:
    testarDia = "Sábado";
    break;
  default:
    testarDia = "Não existe";
    break;
}

console.log(
  `Variável testada: ${diaDaSemana} | Variável auxiliar: ${testarDia}`
);

console.log("ternary operator:");

const nome = "Andrew";

const autenticacao = nome === "Andrew" ? "Autenticado" : "Não autenticado";

console.log(`Nome: ${nome} | Situação: ${autenticacao}`);

console.log("");
