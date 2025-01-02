const pessoa = {
  nome: "Andrew",
  sobrenome: "Gomes",
  idade: 36,
  casado: true,
  profissao: "Desenvolvedor Web",
  empresa: "D'affari Sistemas de Informação",
  colegas: ["Matheus", "Carlos", "Daniela", "Nathan"],

  minhaProfissao() {
    return `Sou ${this.profissao} na ${this.empresa}.`;
  },
};

console.table(pessoa);

console.log("");

console.log(pessoa.nome);
console.log(pessoa.sobrenome);
console.log(pessoa.idade);
console.log(pessoa.casado);
console.log(pessoa.profissao);
console.log(pessoa.empresa);

console.log(pessoa instanceof Object);

console.log("");
