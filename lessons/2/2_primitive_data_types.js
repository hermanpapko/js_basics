// let user1 = {
//   name: "Herman",
//   birthYear: 2007,
// };
// let user2 = {
//   name: "Artur",
//   birthYear: 1982,
// };
// function howOldRU(user) {
//   let date = new Date().getFullYear();
//   return `Hello ${user.name}! You are ${date - user.birthYear} old.`;
// }

// console.log(howOldRU(user1));
// console.log(howOldRU(user2));

let a2 = "Nice to meet you Dude!";
//! Expected output: 'Nice too meet you Sir' (use replace())
console.log(a2.replace("Dude", "Sir"));

let a3 = "Have a nice day! Nice to meet you Dude!";
//! Expected output: 'Nice too meet you...' (use slice())
console.log(`${a3.slice(0, 16)}...`);
console.log(a3);

// let a4 = "I will master javascript string methods";
// //! Expected output: an array of words (use split())
// let words = a4.split(" ");
// console.log(words[2]);

let a5 = "MAKE ME LOWERCASE. I HATE CAPSLOCK TYPERS";
//! Expected output: a5 in lowercase (toLowerCase())
/************/
console.log(a5.toLowerCase());

/************/
let a6 = "make me uppercase. i want everybody noticing me";
//! Expected output: a5 in lowercase (toUpperCase())
let lines = a6.split(".");
let line2 = lines[1].split(" ");

console.log(
  a6[0].toUpperCase() +
    lines[0].slice(1, lines[0].length) +
    ". " +
    line2[1].toUpperCase() +
    lines[1].slice(2, lines[1].length)
);
console.log(line2);
