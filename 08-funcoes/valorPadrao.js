function defaultValue(param = "valor padrão") {
  console.log(`Utilizando ${param}`);
}

defaultValue("parâmetro");
defaultValue("argumento");
defaultValue();

function dizerOi(nome = "usuário") {
  console.log(`Oi, ${nome}`);
}

dizerOi("Viviane");
dizerOi();
