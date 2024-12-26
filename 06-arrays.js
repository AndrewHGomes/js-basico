console.log("ARRAYS:");

console.log(["leite", "ovos", "margarina", "etc"]);

const testArr = ["Andrew", false, 52, null, { sobrenome: "Gomes" }];

console.log(testArr);

console.log(`testArr[0]: ${testArr[0]}`);

testArr[0] = "PT Taurus G2c 9mm";

console.log(`testArr[0]: ${testArr[0]}`);

testArr.push(true);

testArr.unshift("55");

console.log(testArr);

testArr.pop();

testArr.shift();

console.log(testArr);

const arrTest = ["Olá", "300", true];

console.log(testArr.concat(arrTest));

console.log(testArr.join(" - "));

console.log(testArr.slice(0, 3));

console.log(testArr.splice(1, 4));

const novoArr = ["Andrew", "Henrique", "Gomes"];

console.log(`novoArr: ${novoArr}`);

novoArr.forEach((e, i, arr) => {
  console.log(`${e} está no índice ${i} | ${arr}`);
});

const mapear = novoArr.map((e, i) => {
  return `O ${e} está na posição ${i}`;
});

console.log(mapear);

const filtrar = novoArr.filter((e) => {
  return e.length < 6;
});

console.log(filtrar);

console.log("");

const animais = ["gato", "cachorro", "cavalo", "leão"];

console.log(animais);
console.log(animais.length);

console.log(`O ${animais[3]} é o rei da selva!`);

console.log("");

const construtorArray = new Array("Eu", "Tu", "Ele");

console.log(construtorArray);

console.log(Array.from(construtorArray[2]));
