let juegos = ["Zelda", "Mario", "Metroid", "Chrono"];
console.log("Largo:", juegos.length); //length: es una propiedad que nos dice cuantos elementos tiene un arreglo

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1]; //Para acceder al último elemento de un arreglo
console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("F-Zero"); //push: agrega un elemento al final del arreglo
console.log({ juegos });
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Fire Emblem"); //unshift: agrega un elemento al inicio del arreglo
console.log({ juegos });
console.log({ nuevaLongitud, juegos });

let juegoBorrado = juegos.pop(); //pop: elimina el último elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;

console.log(juegos);

let juegosBorrados = juegos.splice(pos, 2); //splice: elimina elementos de un arreglo
console.log({ juegosBorrados, juegos });

console.log(juegos);

let metroidIndex = juegos.indexOf("Metroid"); //indexOf: nos devuelve el índice de un elemento en un arreglo
console.log({ metroidIndex });
