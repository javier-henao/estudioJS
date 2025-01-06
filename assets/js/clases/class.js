//Clase Persona
class Persona {
  static _conteo = 0; // Propiedad estatica

  static get conteo() {
    return Persona._conteo + " instancias ";
  }

  static mensaje() {
    console.log(this.nombre);
    console.log("Hola, soy un metodo estatico");
  }

  // Propiedades de la clase, esta inicializacion es opcional, solo basta con dejarlas en el constructor
  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  //Constructor
  constructor(
    nombre = "sin nombre",
    codigo = "sin codigo",
    frase = "sin frase"
  ) {
    // Asignacion de valores proporcionados (usar this)
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  // Sets: ESTABLECE UN VALOR
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  // Gets: RECUPERA UN VALOR
  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  // Metodos
  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    this.quienSoy(); // Llamando un metodo dentro de otro (usar this)
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

// Creacion usando la clase persona
const spiderman = new Persona("javier", "devman", "tu");
// const iroman = new Persona("tony", "ironman", "yo");
// const iroman2 = new Persona("tony2", "ironman2", "yo2");
// console.log(iroman);

// LLamando metodos
// spiderman.quienSoy();
// iroman.quienSoy();

spiderman.miFrase();
// iroman.miFrase();

// Uso Set:  ESTABLECE UN VALOR
spiderman.setComidaFavorita = "El pay de cereza de la tia May";

// spiderman.nemesis = "duende verde"; // Esto lo permite cuando no se ha establecido, es algo por mejorar en JS
// console.log(spiderman);

// Uso Get:  RECUPERA UN VALOR
// console.log(spiderman.getComidaFavorita);

// Persona._conteo = 2;
console.log("Conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
