const heroes = ["Batman", "Superman", "Mujer Maravilla", "Flash", "Acuaman"];

console.warn("==== For tradicional ====");

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn("==== For In ====");

for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn("==== For Of ====");

for (let heroe of heroes) {
  console.log(heroe);
}
