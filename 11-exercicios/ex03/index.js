const veiculo1 = prompt("Nome do 1º veículo:");
const velocidade1 = Number(prompt("Velocidade do 1º veículo:"));
const veiculo2 = prompt("Nome do 2º veículo:");
const velocidade2 = Number(prompt("Velocidade do 2º veículo:"));

if (velocidade1 > velocidade2) {
  alert(`${veiculo1} está mais rápido que ${veiculo2}`);
} else if (velocidade1 < velocidade2) {
  alert(`${veiculo2} está mais rápido que ${veiculo1}`);
} else {
  alert(`Ambos estão na mesma velocidade`);
}
