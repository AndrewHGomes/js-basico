let opcao = "";

do {
  opcao = prompt(`
    Escolha uma das opções abaixo:
    
    1 - Opção 1
    2 - Opção 2
    3 - Opção 3
    4 - Encerrar`);

  switch (opcao) {
    case "1":
      alert(`Você escolheu a opção ${opcao}`);
      break;
    case "2":
      alert(`Você escolheu a opção ${opcao}`);
      break;
    case "3":
      alert(`Você escolheu a opção ${opcao}`);
      break;
    case "4":
      alert(`Você escolheu Encerrar...`);
      alert("Programa finalizado!");
      break;
    default:
      alert("Opção inválida!");
      alert("Insira números de 1 a 4");
  }
} while (opcao !== "4");
