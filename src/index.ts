class Pessoa {
  nome: string;
  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }
}

const p1 = new Pessoa("bruno", 39);

interface IPessoa {
  nome: string;
  idade: number;
}

const p2: IPessoa = { nome: "bruno", idade: 39 };

function test(p: Pessoa) {
  console.log(p.nome);
}

test(p1);
test(p2);
