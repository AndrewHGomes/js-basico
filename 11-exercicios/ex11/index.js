let opcao = "";
const fila = [];

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += `${i + 1}º ${fila[i]} | `;
  }
  opcao = prompt(`
    Fila de espera: ${pacientes}
    Bem vindo ao nosso consultório!
    Em que posso ajudar?
    
    1) Cadastrar Novo Paciente
    2) Consultar Paciente
    3) Sair`);

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Qual é o nome do paciente?");
      if (novoPaciente !== "") {
        fila.push(novoPaciente);
        alert(`Paciente ${novoPaciente} cadastrado com sucesso!`);
      } else {
        alert("Você não inseriu o nome do paciente...");
      }
      break;
    case "2":
      if (fila.length > 0) {
        const pacienteConsultado = fila.shift();
        alert(`Paciente ${pacienteConsultado} foi consultado!`);
      } else {
        alert("Não há nenhum paciente para ser consultado...");
      }
      break;
    case "3":
      alert("Encerrando atividades...");
      alert("Programa finalizado!");
      break;
    default:
      alert("Opção inválida...");
  }
} while (opcao !== "3");
