const javier = {
  nombre: "Javier",
  edad: 40,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

const pedro = {
  nombre: "Pedro",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  },
};

// javier.imprimir();
// pedro.imprimir();

function Persona(nombre, edad) {
  console.log("Se ejecuto esta linea");

  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);
const melissa = new Persona("Melissa", 30);
// console.log(maria);

maria.imprimir();
melissa.imprimir();
