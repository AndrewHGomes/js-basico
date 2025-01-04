console.log("Início do programa:");

const diaAtual = new Date().getDay();
let hoje = "";

switch (diaAtual) {
  case 0:
    hoje = "Domingo";
    break;
  case 1:
    hoje = "Segunda-feira";
    break;
  case 2:
    hoje = "Terça-feira";
    break;
  case 3:
    hoje = "Quarta-feira";
    break;
  case 4:
    hoje = "Quinta-feira";
    break;
  case 5:
    hoje = "Sexta-feira";
    break;
  case 6:
    hoje = "Sábado";
    break;
  default:
    hoje = "Não existe este dia na semana.";
    break;
}

console.log(`Resultado de new Date().getDay(): ${diaAtual}`);
console.log(`Hoje é ${hoje}`);

console.log("");

let paisOrigem = "Brasil";
let nacionalidade = "";

switch (paisOrigem) {
  case "Brasil":
    nacionalidade = "Brasileiro";
    break;
  case "Argentina":
    nacionalidade = "Argentino";
    break;
  case "Colombia":
    nacionalidade = "Colombiano";
    break;
  case "Peru":
    nacionalidade = "Peruano";
    break;
  default:
    nacionalidade = "Ainda não sei a nacionalidade";
    break;
}

console.log(`País de origem: ${paisOrigem} | Nacionalidade: ${nacionalidade}`);

console.log("Fim do programa!");

console.log("");
