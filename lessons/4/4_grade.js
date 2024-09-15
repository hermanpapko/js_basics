function calculateAverage(array) {
  let average = 0;
  for (i = 0; i < array.length; i++) {
    average += array[i];
  }
  return average / i;
}
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) {
    console.log("Mark : F");
  } else if (average < 70) {
    console.log("Mark : D");
  } else if (average < 80) {
    console.log("Mark : C");
  } else if (average < 90) {
    console.log("Mark : B");
  } else {
    console.log("Mark : A");
  }
}

const marks = [100, 90, 50];
calculateGrade(marks);
