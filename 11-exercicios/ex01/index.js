const nome = prompt("Insira o seu nome:");
const sobrenome = prompt("Insira o seu sobrenome:");
const anoNascimento = Number(prompt("Insira o em que você nasceu:"));
const curso = prompt("Insira o curso pretendido:");

const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;

console.log(nome, sobrenome, anoNascimento, anoAtual, idade, curso);

alert(
  `NOME: ${nome} ${sobrenome}
ANO DE NASCIMENTO: ${anoNascimento}
IDADE: ${idade} anos
CURSO: ${curso}
`
);
