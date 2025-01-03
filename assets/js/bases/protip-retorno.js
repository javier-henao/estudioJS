// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido,
//   };
// }

const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Juan", "Perez");
// console.log(persona);
// console.log({ persona });

console.log(crearPersona("Juan2", "Perez2"));

function imprimeArgumentos() {
  console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args) => {
  // Rest operator
  // console.log(edad, args);

  return args;
};

imprimeArgumentos(10, true, false, "Juan", "Perez");
const argumentos = imprimeArgumentos2(10, true, false, "Juan2", "Perez2");

console.log({ argumentos });
console.log(argumentos[0], argumentos[1]);

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Juan3",
  "Perez3"
);

console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona("Javier", "Henao");

console.log({ nuevoApellido });

const tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log("nombre", personaje.nombre);
//   console.log("codeName", personaje.codeName);
//   console.log("vivo", personaje.vivo);
//   console.log("edad", personaje.edad);
//   console.log("trajes", personaje.trajes);
// };

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  // Destructuración
  console.log({ nombre });
  console.log({ codeName });
  console.log({ vivo });
  console.log({ edad });
  console.log({ trajes });
};

imprimePropiedades(tony);
