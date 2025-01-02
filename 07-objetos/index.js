console.log("OBJECTS:");

const testObj = {
  prop1: "Henrique",
  prop2: true,
  prop3: [1, 2, 3],
  prop4: 23.5,

  testMethod: function () {
    console.log("Sou um método do objeto testObj");
  },

  descricaoObj: function () {
    return `prop1: ${this.prop1} | prop2: ${this.prop2} | prop3: ${this.prop3} | prop4: ${this.prop4} | outro: ${this.outro}`;
  },
};

console.log(testObj, `| ${typeof testObj}`);

console.log(
  `Valor da propriedade 2: ${testObj.prop2} | ${typeof testObj.prop2}`
);

console.log(`prop4: ${testObj.prop4} | ${typeof testObj.prop4}`);

testObj.prop4 = "31";

console.log(`prop4: ${testObj.prop4} | ${typeof testObj.prop4}`);

testObj.outro = false;

console.log(testObj);

testObj.testMethod();

const descreverObj = testObj.descricaoObj();

console.log(descreverObj);

const pessoa = {
  nome: "Andrew",
  sobrenome: "Gomes",
  idade: 36,

  andar: function () {
    return "andando...";
  },

  apresentarMe: function () {
    return `Sou ${this.nome} ${this.sobrenome}. Tenho ${this.idade} anos
     e já tô ${this.andar()}`;
  },
};

console.log(pessoa);
console.log(pessoa.andar());
console.log(pessoa.apresentarMe());

console.log("");
