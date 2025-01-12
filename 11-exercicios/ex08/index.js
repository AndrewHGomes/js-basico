let valor = Number(
  prompt("Bem vindo! Qual o valor inicial da sua conta? [R$]")
);

let opcao = "";
let saque = 0;
let deposito = 0;

do {
  opcao = prompt(`
    Saldo é de R$ ${valor.toFixed(2)}
    Que operação deseja realizar?
    
    1) SAQUE
    2) DEPÓSITO
    3) SAIR`);

  switch (opcao) {
    case "1":
      saque = Number(prompt("Que valor deseja sacar? [R$]"));
      if (valor >= 0 && valor >= saque) {
        valor -= saque;
      } else {
        saque;
        alert(
          `Valor indisponível para saque,\nVocê tem R$ ${valor.toFixed(2)}`
        );
      }
      break;
    case "2":
      deposito = Number(prompt("Que valor deseja depositar? [R$]"));
      valor += deposito;
      break;
    case "3":
      alert("Encerrando sistema...");
      alert("Sistema finalizado!");
      break;
    default:
      alert("Opção inválida...");
      alert("Insira apenas 1, 2 ou 3");
  }
} while (opcao !== "3");
