/*
======================================
(1)

let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)

No consolel.log vai aparecer 10, e no segundo vai aparecer 10, 5.

=====================================
(2)

let a = 10
let b = 20

c = a
b = c
a = b
console.log(a, b, c)

No console.log vai aparecer 10, 10, 10

======================================
(3)

let CargaHoraria = prompt("Quantas horas você trabalha por dia?")
let SalarioDia  = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${SalarioDia/CargaHoraria} por hora`)

*/
/*
Exercícios de escrita de código
====================
(1)
*/

let Idade

let Nome

console.log(typeof Idade)
console.log(typeof Nome)

/*
====================
Ambos apareceram como "Undefined", pois não atribuimos um valor específico para as variáveis
====================
*/

Idade = prompt("Qual a sua idade?")
console.log(typeof Idade)
Nome = prompt("Qual o seu nome?")
console.log(typeof Nome)

/*
====================
O tipo de variável em ambos os casos mudou para String
====================
*/

alert(`Olá ${Nome}, você tem ${Idade} anos`)

/*
====================
(2)
*/

let Pergunta1 = prompt("Você está usando uma camisa preta?")
console.log(`Você está usando uma camisa preta? ${Pergunta1}`)

let Pergunta2 = prompt("Você está usando jeans hoje?")
console.log(`Você está usando jeans hoje? ${Pergunta2}`)

let Pergunta3 = prompt("Você está ouvindo música agora?")
console.log(`Você está ouvindo música agora? ${Pergunta3}`)

alert(`Você está usando uma camisa preta? ${Pergunta1}
Você está usando jeans hoje? ${Pergunta2}
Você está ouvindo música hoje? ${Pergunta3}`)



/*
====================
(3)
*/


let a = 10
let b = 25
const c = 25
const d = 10
a = c
b = d

console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

/*
Desafio
=================
*/

let numero1 = prompt("Digite um número")
const numero1numero = Number( numero1)

let numero2 = prompt("Digite outro número")
const numero2numero = Number(numero2)

console.log(`A soma dos dois números é ${numero1numero + numero2numero}`)
alert(`A soma dos dois números é ${numero1numero + numero2numero}`)

let numero3 = prompt("Digite um número")
const numero3num = Number(numero3)

let numero4 = prompt("Digite outro número")
const numero4num = Number(numero4)

console.log(`A multiplicação dos dois números é ${numero3num * numero4num}`)
alert(`A multiplicação dos dois números é ${numero3num * numero4num}`)
