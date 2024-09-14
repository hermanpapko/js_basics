function fizzBuzz(input) {
  if (typeof input !== "number") {
    return "Not a number";
  } else if (input % 5 === 0 && input % 3 === 0) {
    return "FizzBuzz";
  } else if (input % 5 === 0) {
    return "Buzz";
  } else if (input % 3 === 0) {
    return "Fizz";
  } else if (input % 5 !== 0 || input % 3 !== 0) {
    return input;
  }
}
console.log(fizzBuzz(true));

function fizzBuzz(input) {
  typeof input !== "number"
    ? console.log("Not a number")
    : input % 5 === 0 && input % 3 === 0
    ? console.log("FizzBuzz")
    : input % 5 === 0
    ? console.log("Buzz")
    : input % 3 === 0
    ? console.log("Fizz")
    : console.log(input);
}

fizzBuzz(true);
