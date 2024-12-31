let nombre = "Javier Henao";

console.log(nombre);

nombre = "Javier Henao 2";
console.log(nombre);

nombre = "Javier Henao 3";
nombre = `Javier Henao 4`;

console.log(typeof nombre);

nombre = 123;
console.log(typeof nombre);

let esMarvel = true;
console.log(esMarvel);
console.log(typeof esMarvel);

let edad = 33;
console.log(typeof edad);

edad = 33.333;
console.log(typeof edad);

let superPoderDeJavier;
console.log(typeof superPoderDeJavier); // undefined

let soynNull = null;
console.log(typeof soynNull); // object

let symbol1 = Symbol("a");
console.log(typeof symbol1); // symbol

let symbol2 = Symbol("a");
console.log(typeof symbol2); // symbol

console.log(symbol1 === symbol2); // false
