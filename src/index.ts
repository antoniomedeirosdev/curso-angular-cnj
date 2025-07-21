import Circle from "./interface/Circle";
import Triangle from "./interface/Triangle";

const tr = new Triangle(3,8);
const cr = new Circle(3);

console.log(tr.calculateArea());
console.log(cr.calculateArea());