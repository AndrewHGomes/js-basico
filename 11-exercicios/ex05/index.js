const medidaMetros = Number(prompt("Digite uma medida em metros"));

let medidaEscolhida = "";

const escolha = prompt(
  `Você digitou ${medidaMetros} metros.
  Para qual dessas medidas abaixo você pretende converter?
  
  1) Milímetros
  2) Centímetros
  3) Decímetros
  4) Decâmetros
  5) Hectômetros
  6) Quilômetros`
);

switch (escolha) {
  case "1":
    medidaEscolhida = `${medidaMetros * 1000}mm`;
    break;
  case "2":
    medidaEscolhida = `${medidaMetros * 100}cm`;
    break;
  case "3":
    medidaEscolhida = `${medidaMetros * 10}dm`;
    break;
  case "4":
    medidaEscolhida = `${medidaMetros / 10}dam`;
    break;
  case "5":
    medidaEscolhida = `${medidaMetros / 100}hm`;
    break;
  case "6":
    medidaEscolhida = `${medidaMetros / 1000}km`;
    break;
  default:
    alert("Escolha inválida...");
    break;
}

if (escolha > 6) {
  alert(`Você não converteu sua medida de ${medidaMetros}m`);
} else {
  alert(
    `A medida inicial era de ${medidaMetros}m,
    Você escolheu converter para ${medidaEscolhida}.`
  );
}
