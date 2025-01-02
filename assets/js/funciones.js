// Funcion: Se define como un bloque de código que se puede reutilizar en cualquier parte de nuestro código.

// Declaración de una función
function saludar() {
  console.log("Hola ");
}

// Declaración de una función anónima
const saludar2 = function (nombre) {
  console.log(arguments);

  console.log("Hola mundo " + nombre);
};

// Función con parámetros
function saludar3(nombre) {
  console.log("Hola " + nombre);
}

// Funcion flecha
const saludarFlecha = () => {
  console.log("Hola mundo ");
};

// Funcion flecha con argumento
const saludarFlecha2 = (nombre) => {
  console.log("Hola mundo " + nombre);
};

// Llamada a la función
// saludar();
// saludar2("Javier", 40, true, "Colombia");
// saludar3("Javier");
// saludarFlecha();
// saludarFlecha2("Flecha");

// Función con retorno
function sumar(a, b) {
  console.log("Funcion para sumar: " + a + " y " + b);

  return a + b;

  console.log("Esta linea no se ejecuta"); // No se ejecuta codigo despues de un return
}

// Funcion flecha con retorno
const sumar2 = (a, b) => a + b;

// Función con retorno
function getAleatorio() {
  return Math.random();
}

// Funcion flecha con retorno
const getAleatorio2 = () => Math.random();

// Llamada a la función con retorno

//console.log(sumar(5, 10));
console.log(sumar2(5, 100));

//console.log(getAleatorio());
console.log(getAleatorio2());
