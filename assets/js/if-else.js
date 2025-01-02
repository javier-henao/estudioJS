let a = 0;

// if (a >= 10) {
//   console.log("A es mayor o igual a 10");
// } else {
//   console.log("A es menor a 10");
// }

//console.log("Fin de programa");

const hoy = new Date();

// console.log(hoy);

let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes, etc...

// console.log({ dia }); // 4: Jueves

// if (dia === "5") {
//   console.log("Domingo");
// } else if (dia === 1) {
//   console.log("Lunes");
//   // if (dia === 1) {
//   //   console.log("Lunes");
//   // } else {
//   //   console.log("No es Lunes ni Domingo");
//   // }
// } else if (dia === 2) {
//   console.log("Martes");
// } else {
//   console.log("No es Lunes, Martes o Domingo");
// }

// Sin usar If Else, o Switch, únicamente objetos

dia = 3; // 0: Domingo, 1: Lunes, 2: Martes, etc...

const diasLetras = {
  0: () => "Domingo - 0",
  1: () => "Lunes - 1",
  2: () => "Martes - 2",
  3: () => "Miércoles - 3",
  4: () => "Jueves - 4",
  5: () => "Viernes - 5",
  6: () => "Sábado - 6",
};

const diasLetras2 = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// Dias de la semana
console.log(diasLetras[dia]() || "Día no definido");
console.log(diasLetras2[dia]);
