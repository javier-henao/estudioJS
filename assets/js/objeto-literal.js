const personaje = {
  nombre: "Tony Stark",
  codeName: "IronMan",
  vivo: false,
  edad: 40,
  coords: { lat: 34.034, lng: -118.7 },
  trajes: ["Mark I", "Mark V", "Hulkbuster"],
  direccion: { zip: 10880, ubicacion: "Malibu" },
  ultimaPelicula: "Infinity War",
};

console.log({ personaje });
console.log(personaje);
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje["nombre"]);
console.log("Edad:", personaje.edad);
console.log("Coords:", personaje.coords);
console.log("Latitud:", personaje.coords.lat);

console.log("No. Trajes:", personaje.trajes.length);
console.log("Ultimo Traje:", personaje.trajes[personaje.trajes.length - 1]);

const x = "vivo";
console.log("Vivo:", personaje[x]);

console.log("Ultima Pelicula:", personaje["ultimaPelicula"]);

// Más detalles de los objetos literales

delete personaje.edad; // delete: Elimina la propiedad edad
console.log(personaje);

personaje.casado = true; // Agrega la propiedad casado

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// personaje = true; // No se puede reasignar el objeto

console.log(personaje);

Object.freeze(personaje); // Congela el objeto, no se puede modificar

personaje.dinero = 1000000;
personaje.casado = false;
personaje.direccion.ubicacion = "Costa Rica";
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({ propiedades, valores });
