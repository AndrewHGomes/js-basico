executar();

function menu() {
  return prompt(`
    Vamos calcular a área de algumas figuras geométricas...
    Escolha uma das opções abaixo:
    1) Área do triângulo
    2) Área do retângulo
    3) Área do quadrado
    4) Área do trapézio
    5) Área do círculo
    6) SAIR`);
}

function executar() {
  let opcao = "";

  do {
    opcao = menu();

    switch (opcao) {
      case "1":
        alert(`Área do Triângulo: ${areaTriangulo()}`);
        break;
      case "2":
        alert(`Área do Retângulo: ${areaRetangulo()}`);
        break;
      case "3":
        alert(`Área do Quadrado: ${areaQuadrado()}`);
        break;
      case "4":
        alert(`Área do Trapézio: ${areaTrapezio()}`);
        break;
      case "5":
        alert(`Área do Círculo: ${areaCirculo()}`);
        break;
      case "6":
        alert("Encerrando aplicação...");
        alert("Programa encerrado!");
        break;
      default:
        alert("Opção inválida...");
        break;
    }
  } while (opcao !== "6");
}

function areaTriangulo() {
  const base = Number(prompt("Qual a base do triângulo?"));
  const altura = Number(prompt("Qual a altura do triângulo?"));
  return `${base} x ${altura} : 2 = ${(base * altura) / 2}`;
}

function areaRetangulo() {
  const base = Number(prompt("Qual a base do retângulo?"));
  const altura = Number(prompt("Qual a altura do retângulo?"));
  return `${base} x ${altura} = ${base * altura}`;
}

function areaQuadrado() {
  const lado = Number(prompt("Qual o lado do quadrado?"));
  return `${lado} x ${lado} = ${lado * lado}`;
}

function areaTrapezio() {
  const baseMaior = Number(prompt("Qual a base maior do trapézio?"));
  const baseMenor = Number(prompt("Qual a base menor do trapézio?"));
  const altura = Number(prompt("Qual a altura do trapézio?"));
  return `((${baseMaior} + ${baseMenor}) x ${altura}) : 2 = ${
    ((baseMaior + baseMenor) * altura) / 2
  }`;
}

function areaCirculo() {
  const pi = Math.PI.toFixed(2);
  const raio = Number(prompt("Qual o raio do círculo?"));
  return `${pi} x ${raio} x ${raio} = ${pi * raio * raio}`;
}
