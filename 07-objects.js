console.log("OBJECTS:");

const pessoa = {
  nome: "Andrew",
  sobrenome: "Gomes",
  idade: 36,

  andar: function () {
    return "andando...";
  },

  apresentarMe: function () {
    return `Sou ${this.nome} ${this.sobrenome}. Tenho ${
      this.idade
    } anos e já tô ${this.andar()}`;
  },
};

console.log(pessoa);
console.log(pessoa.apresentarMe());

console.log("");
