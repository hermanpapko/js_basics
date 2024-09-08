// Falsy
// undefined
// hull
// 0
// false
// ''
// NaN

// Anything that is not Falsy --> Truthy

// Short-circucity

let userColor = undefined;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log(currentColor);
