console.log("TYPE CONVERSION | TYPE COERSION:");

const numSeis = 6;
const strSeis = String(numSeis);

const strDez = "10";
const numDez = Number(strDez);

console.log(strDez + numSeis);
console.log(numDez + strSeis);
console.log(strDez + strSeis);
console.log(numDez + numSeis);

console.log("");

console.log(strDez.length, strSeis.length);
console.log(numDez.length, numSeis.length);

console.log("");

console.log(Math.PI);
console.log(Math.PI.toFixed(2).replace(".", ","));
