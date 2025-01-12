let opcao = "";
let baralho = [];

do {
  opcao = prompt(`
    Pilha de cartas: ${baralho.length}
    Escolha uma ação?
    
    1) Inserir uma carta
    2) Puxar uma carta
    3) Sair`);

  switch (opcao) {
    case "1":
      let novaCarta = prompt("Qual carta deseja inserir?");
      if (novaCarta !== "") {
        baralho.push(novaCarta);
        alert(`Você inseriu ${novaCarta} ao baralho!`);
      } else {
        alert("Você não inseriu nenhuma carta...");
      }
      break;
    case "2":
      if (baralho.length > 0) {
        let cartaPuxada = baralho.pop();
        alert(`Você puxou ${cartaPuxada} do baralho!`);
      } else {
        alert("Não há cartas no baralho...");
      }
      break;
    case "3":
      alert("Encerrando jogo...");
      alert("Jogo finalizado!");
  }
} while (opcao !== "3");
