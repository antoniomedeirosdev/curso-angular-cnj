let a = 5;

console.log(5 + 6);
console.log(5 - 6);
console.log(5 * 6);
console.log(5 / 6);
console.log(5 % 6);
console.log(5 ** 2);
console.log(++a);
console.log(--a);

const pessoa = { nome: "Antonio", idade: 33, ehProfessor: false };

for (const chave in pessoa) {
  console.log(chave);
}

const numeros = [1, 2, 3, 4, 5];

for (const n of numeros) {
  console.log(n);
}

numeros.forEach((n) => {
  console.log(n);
});
