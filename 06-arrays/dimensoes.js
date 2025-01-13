const multi = [
  "Uma string",
  ["Um array", true, 5],
  [
    [false, "teste"],
    ["Olá", 50],
  ],
  [],
];

console.log(multi);

console.log(multi[0]);

console.log(multi[1]);
console.log(multi[1][0]);
console.log(multi[1][1]);
console.log(multi[1][2]);

console.log(multi[2]);
console.log(multi[2][0]);
console.log(multi[2][0][0]);
console.log(multi[2][0][1]);
console.log(multi[2][1]);
console.log(multi[2][1][0]);
console.log(multi[2][1][1]);

console.log(multi[3]);

console.log("");
