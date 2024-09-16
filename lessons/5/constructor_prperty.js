// Factory Fumction
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);
console.log(circle);

function Circle(radius) {
  this.rasius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this;
}
const another = new Circle(1);
