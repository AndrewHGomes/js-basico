const usuario = {
  nome: prompt("Insira seu primeiro nome:"),
  sobrenome: prompt("Insira seu sobrenome:"),
  anoNascimento: Number(prompt("Insira seu ano de nascimento:")),
  curso: prompt("Insira seu curso:"),
};

console.log(usuario);

const anoAtual = new Date().getFullYear();
const idade = anoAtual - usuario.anoNascimento;

alert(
  `NOME: ${usuario.nome} ${usuario.sobrenome}
ANO DE NASCIMENTO: ${usuario.anoNascimento}
IDADE: ${idade} anos
CURSO: ${usuario.curso}
`
);
