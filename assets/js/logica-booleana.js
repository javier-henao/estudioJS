const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("Not o la negación");
console.log(true); // true
console.log(!true); // false
console.log(!false); // true

//console.log(!regresaFalse()); // true

console.warn("And"); // true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && !false); // true
console.log(false && true); // false
console.log(false && false); // false

console.log("=========");
console.log(regresaFalse() && regresaTrue()); // false  // regresaFalse() se ejecuta y regresa false, no se ejecuta regresaTrue()
console.log(regresaTrue() && regresaFalse()); // false  // regresaTrue() se ejecuta y regresa true, se ejecuta regresaFalse() y regresa false

console.log("=====&&=====");
regresaTrue() && regresaFalse(); // false

console.log("4 condiciones: ", true || true || true || false); // false

console.warn("OR"); // true si alguno de los valores es verdadero
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true
console.log(false || false); // false

console.log(regresaFalse() || regresaTrue()); // true
console.log(regresaTrue() || regresaFalse()); // true

console.warn("Asignaciones");

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && "Hola Mundo" && 150; // Asigna el último valor verdadero: 150
const a2 = "hola" && "mundo" && soyFalso && true; // Asigna el primer valor falso: false
const a3 = soyFalso || "Ya no soy falso"; // Asigna el primer valor verdadero: Ya no soy falso
const a4 =
  soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo" || true; // Asigna el primer valor verdadero: Ya no soy falso de nuevo
const a5 =
  soyFalso ||
  soyUndefined ||
  regresaTrue() ||
  "ya no soy falso de nuevo" ||
  true; // Asigna el primer valor verdadero: true

console.log({ a1 });
console.log({ a2 });
console.log({ a3 });
console.log({ a4 });
console.log({ a5 });

if (true || true || true || false) {
  console.log("Hacer algo");
} else {
  console.log("Hacer otra cosa");
}
