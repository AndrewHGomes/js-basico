const umTexto = "  String é uma lista de caracteres. É um texto.  ";
console.log(`${umTexto} | ${typeof umTexto}`);

console.log("");

const aspas = "Escritas entre aspas";
const crase = `Escritas entre crases`;
console.log(`Strings podem ser ${aspas}, ou ${crase}.`);

console.log("");

const outroTexto = new String("Meu novo texto instanciado de String.");
const instancia1 = umTexto instanceof String;
const instancia2 = outroTexto instanceof String;

console.log(`umTexto é instância do Objeto String? ${instancia1}`);
console.log(`outroTexto é instância do Objeto String? ${instancia2}`);

console.log("");

const nome = "Andrew";
const sobrenome = "Gomes";

console.log("Concatenar: Meu nome é " + nome + " " + sobrenome);
console.log(`Interpolar: Meu nome é ${nome} ${sobrenome}`);

console.log("");
