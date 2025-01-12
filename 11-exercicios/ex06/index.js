const turista = prompt("Olá, turista! Insira seu nome:");

let resposta = prompt(`${turista}, você já visitou alguma cidade? [Sim/Não]`);

let cidades = "";
let quantidade = 0;

while (resposta !== "Não") {
  let cidade = prompt("Qual o nome da cidade visitada?");

  cidades += `\n- ${cidade}`;

  quantidade++;

  resposta = prompt(`Visitou mais alguma cidade, ${turista}? [Sim/Não]`);
}

alert(`
  Nome do turista: ${turista}.
  Quantidade de cidades visitadas: ${quantidade} cidades.
  
  Cidades visitadas: ${cidades}`);
