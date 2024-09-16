function Circle(radius) {
  this.rasius = radius;
  this.draw = function () {
    console.log("draw");
  };
  return this;
}
const circle = new Circle(1);
