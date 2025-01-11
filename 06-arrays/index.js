console.log([]);

const arrayPrototype = new Array(1, 2, 3, 4);

console.log(
  arrayPrototype,
  typeof arrayPrototype,
  arrayPrototype instanceof Array,
  arrayPrototype instanceof Object
);

console.log("");

const arrayComum = [5, 6, 7, 8];

console.log(
  arrayComum,
  typeof arrayComum,
  arrayComum instanceof Array,
  arrayComum instanceof Object
);

console.log("");

arrayPrototype[0] = 5;
arrayPrototype[5] = 5;
arrayComum[0] = 1;
arrayComum[5] = 9;
arrayComum[arrayComum.length - 1] = "wow";

console.log(arrayPrototype, arrayComum);
console.log(arrayComum);
console.log(arrayPrototype.length, arrayComum.length);

console.log("");
