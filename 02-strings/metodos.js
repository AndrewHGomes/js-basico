console.log(umTexto);

const sanitizar = umTexto.trim();
console.log(sanitizar);

const tamanho = sanitizar.length;
console.log(tamanho);

const testePad = "1";

const inserirInicio = testePad.padStart(3, "0");
console.log(testePad, inserirInicio);

const inserirFim = testePad.padEnd(3, "5");
console.log(testePad, inserirFim);

const stringEmArray = sanitizar.split(" ");
console.log(stringEmArray);

const arrayEmString = stringEmArray.join("-");
console.log(arrayEmString);

const palavra = "Amor";
const repetir = palavra.repeat(3);
console.log(repetir);
