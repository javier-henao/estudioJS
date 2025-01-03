const arr = new Array(10);
console.log(arr); // [ <10 empty items> ]

const arr2 = [];
console.log(arr2); // []

const videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log({ videoJuegos });
console.log(videoJuegos); // [ 'Mario 3', 'Megaman', 'Chrono Trigger' ]
console.log(videoJuegos[0]); // Mario 3

let arregloCosas = [
  true,
  123,
  "Javier",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr. Light", ["Dr. Willy", "Woodman"]],
];
console.log(arregloCosas); // [ true, 123, 'Javier', 3 ]
console.log({ arregloCosas });
console.log(arregloCosas[0]); // true
console.log(arregloCosas[2]); // Javier
console.log(arregloCosas[7][3]); // Dr. Light
console.log(arregloCosas[7][4][1]); // Woodman
