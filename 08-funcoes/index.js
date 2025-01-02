console.log("FUNCTIONS:");

function basicFunc() {
  console.log(
    "Função é um bloco reutilizável de código que executa uma tarefa específica"
  );
}

basicFunc();

function withParam(param) {
  console.log(param);
}

withParam(
  "Argumentos/Parâmetros são 'variáveis' que são usadas dentro da função"
);

function defaultParam(txt = "texto qualquer") {
  console.log(`O ${txt} é um valor caso a função não receba argumentos`);
}

defaultParam("Parâmetro padrão");
defaultParam();

function returnFunc(algo) {
  return algo;
}

console.log(returnFunc("Return define o que a função deve retornar"));

const anonymousFunc = function () {
  return `Esta função é anônima, foi guardada dentro de uma variável`;
};

console.log(anonymousFunc());

const arrowFunc = () =>
  "Esta é uma arrow function, também é guardada numa variável";

console.log(arrowFunc());

console.log("");
