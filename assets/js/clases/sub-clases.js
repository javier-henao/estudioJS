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

// Herencia en clases JS
class Heroe extends Persona {
  clan = "sin clan";

  constructor(nombre, codigo, frase) {
    const a = 10;
    let b = 10 + a;

    super(nombre, codigo, frase); // Llama el constructor de Persona (Heredado)
    this.clan = "LOS AVENGERS";
  }

  quienSoy() {
    console.log(`Soy ${this.nombre}, ${this.clan}`);
    super.quienSoy();
  }
}

// Creacion usando la clase persona
const spiderman = new Heroe("javier", "devman", "tu");
console.log(spiderman);

spiderman.quienSoy();
