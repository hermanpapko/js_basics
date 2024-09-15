function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === "string") {
      console.log(key, obj[key]);
    }
}
let movie = {
  title: "a",
  releaseYear: 2019,
  reting: 4.5,
  director: "b",
};
showProperties(movie);
