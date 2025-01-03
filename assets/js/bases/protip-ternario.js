const elMayor = (a, b) => (a > b ? a : b);

const tieneMembresia = (miembro) => (miembro ? "2 Dólares" : "10 Dólares");

console.log(elMayor(20, 10)); // 10
console.log(tieneMembresia(false)); // 2 Dólares

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "Thor" : "Loki",
  elMayor(20, 10),
];
console.log(amigosArr); // ["Peter", "Tony", "Dr. Strange", "Thor"]

const nota = 85;

const grado = nota >= 95 ? "A+" : nota >= 90 ? "A" : nota >= 85 ? "B+" : "B";

console.log({ nota, grado }); // { nota: 85, grado: 'B+' }
