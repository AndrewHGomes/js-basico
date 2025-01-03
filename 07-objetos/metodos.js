pessoa.apresentarSe = function () {
  return `Olá! Sou ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos.`;
};

console.log(pessoa.apresentarSe());
console.log(pessoa.minhaProfissao());

console.log("");

delete pessoa.colegas;
console.table(pessoa);

console.log("");
