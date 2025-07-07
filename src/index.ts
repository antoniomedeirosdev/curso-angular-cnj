let nome: string = "Antonio"

let idade = 39

const ehProfessor: boolean = true

console.log(nome)
console.log(ehProfessor)

function soma(x: number, y: number): number {
    return x + y
}

console.log(soma(5,7))

function imprimir(nome: string, sobrenome: string) {
    console.log(`O seu nome é ${nome} ${sobrenome}`)
}

imprimir('Antonio', 'Medeiros')

const novaSoma = (x: number, y: number): number => { return x + y }

console.log(novaSoma(5,7))

const numeros = [1, 2, 3, 4, 5]

numeros
    .filter((numero)=>{return numero % 2 == 0})
    .forEach((numero)=>{console.log(numero)})

import * as readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Por favor digite o seu nome: ", (nome: string) => {
    console.log(`O seu nome é ${nome}`)
})