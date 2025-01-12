let opcao = "";
const imoveis = [];

do {
  opcao = prompt(`
    Imóveis Cadastrados: ${imoveis.length}.
    
    Olá, seja bem-vindo!
    Escolha uma das opções abaixo:

    1) Cadastrar novo imóvel
    2) Mostrar imóveis cadastrados
    3) Sair`);

  switch (opcao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Insira o nome do proprietário:");
      imovel.quartos = prompt("Insira a quantidade de quartos:");
      imovel.banheiros = prompt("Insira a quantidade de banheiros:");
      imovel.garagem = prompt("Imóvel possui garagem? [Sim/Não]");

      const confirmacao = confirm(`
        Salvar este imóvel?
        Proprietário: ${imovel.proprietario}
        Quantidade de quartos: ${imovel.quartos}
        Quantidade de banheiros: ${imovel.banheiros}
        Possui garagem? ${imovel.garagem}`);
      if (confirmacao) {
        imoveis.push(imovel);
        alert(`Imóvel cadastrado com sucesso!`);
      } else {
        alert("Voltando ao menu.");
      }
      break;
    case "2":
      if (imoveis.length > 0) {
        for (let i = 0; i < imoveis.length; i++) {
          alert(`
              ${i + 1}º Imóvel:
              Proprietário: ${imoveis[i].proprietario}
              Quantidade de quartos: ${imoveis[i].quartos}
              Quantidade de banheiros: ${imoveis[i].banheiros}
              Possui garagem? ${imoveis[i].garagem}`);
        }
      } else {
        alert("Ainda não há imóveis cadastrados...");
      }
      break;
    case "3":
      alert("Encerrando...");
      alert("Programa encerrado!");
      break;
    default:
      alert("Opção inválida...");
      break;
  }
} while (opcao !== "3");
