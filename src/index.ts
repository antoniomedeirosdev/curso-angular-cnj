import Circle from "./interface/Circle";
import Shape from "./interface/Shape";
import Triangle from "./interface/Triangle";

const tr = new Triangle(3, 8);
const cr = new Circle(3);

function imprimirArea(shape: Shape) {
  console.log(shape.calculateArea());
}

imprimirArea(tr);
imprimirArea(cr);
