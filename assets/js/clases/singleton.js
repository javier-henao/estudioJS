// SINGLETON: es una instancia unica de la clase

class Singleton {
  static instancia; // por defecto almacena: 'undefine'

  nombre = "";

  constructor(nombre = "") {
    // console.log(Singleton.instancia);

    // const a = undefined;
    // console.log(a);
    // console.log(!a);
    // console.log(!!a);

    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this;
    this.nombre = nombre;

    // return this;
  }
}

const instancia1 = new Singleton("iroman");
const instancia2 = new Singleton("spiderman");
const instancia3 = new Singleton("yosito");

console.log(`Nombre en la instacia1 es: ${instancia1.nombre}`);
console.log(`Nombre en la instacia2 es: ${instancia2.nombre}`);
console.log(`Nombre en la instacia3 es: ${instancia3.nombre}`);
