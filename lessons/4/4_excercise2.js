function ageControl(name, age) {
  if (age >= 18) {
    return "Welcome, " + name;
  } else {
    return "Get out";
  }
}
console.log(ageControl("Herman", 18));
