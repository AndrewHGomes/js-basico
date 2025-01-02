const objTeste = {
  a: "teste",
  b: 50,
};

console.log("objTeste:", objTeste);

const referencia = objTeste;

console.log("referencia:", referencia);
console.log("referencia é identico a objTeste? ", referencia === objTeste);

const cloneAssign = {};

Object.assign(cloneAssign, objTeste);

console.log("cloneAssign:", cloneAssign);
console.log("cloneAssign é identico a objTeste? ", cloneAssign === objTeste);

const cloneSpread = { ...objTeste };

console.log("cloneSpread:", cloneSpread);
console.log("cloneSpread é identico a objTeste? ", cloneSpread === objTeste);

console.log("");
