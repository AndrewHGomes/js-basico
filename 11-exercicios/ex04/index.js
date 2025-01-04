const atacante = prompt("Insira o nome do jogador atacante:");
const poderAtaque = Number(prompt("Insira seu poder de ataque:"));

const defensor = prompt("Insira o nome do jogador defensor:");
const poderDefesa = Number(prompt("Insira seu poder de defesa:"));

let pontosVida = Number(prompt("Insira seus pontos de vida:"));
const temEscudo = prompt(`${defensor} possui um escudo? [Sim / Não]`);

let dano = 0;

if (poderAtaque > poderDefesa && temEscudo === "Não") {
  dano = poderAtaque - poderDefesa;
} else if (poderAtaque > poderDefesa && temEscudo === "Sim") {
  dano = (poderAtaque - poderDefesa) / 2;
} else if (poderAtaque < poderDefesa) {
  dano;
}

pontosVida -= dano;

alert(
  `Jogador atacante: ${atacante}
  Pode de ataque: ${poderAtaque}
  
  Jogador defensor: ${defensor}
  Poder de defesa: ${poderDefesa}
  ${defensor} possui escudo? ${temEscudo}
  
  Dano causado pelo ataque: ${dano}
  Pontos de vida depois do ataque: ${pontosVida}`
);
