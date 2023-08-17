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


