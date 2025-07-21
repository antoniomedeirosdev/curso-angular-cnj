import Professor from "./person/Professor";

const bruno = new Professor("Bruno", "Lopes", ["Curso Angular", "Programação Funcional"]);
console.log(bruno.fullName());
console.log(bruno.subjects);