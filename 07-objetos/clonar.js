const obj1 = {
  a: "teste",
  b: 50,
};

console.log("obj1:", obj1);

const referencia = obj1;

console.log("referencia:", referencia);

const cloneAssign = {};

Object.assign(cloneAssign, obj1);

console.log("cloneAssign:", cloneAssign);

const cloneSpread = { ...obj1 };

console.log("cloneSpread:", cloneSpread);
