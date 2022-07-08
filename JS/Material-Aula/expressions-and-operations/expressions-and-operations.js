/*
    new

    * left-hand-side expression
    * criar um novo objeto
*/

let nome = new String('Deivison')
nome.sobrenome = ('Almeida')
let age = new Number('22')
console.log(nome, age)

/////////////////////////////////////////////////////////////////////////////////

/*  Operadores unários
    typeof
    delete
*/

console.log(typeof "Flávio")

const person = {
    Nome: 'Steve',
    Age: 26
}

delete person.Age

console.log(person)

/////////////////////////////////////////////////////////////////////////////////

//  OPERADORES ARITIMÉTICOS

    //multiplicação
    console.log(2 * 7)

    //divisão
    console.log(27 / 3)

    //soma
    console.log(55 + 12)

    //subtração
    console.log(22-12)

    //  OUTROS OPERADORES

    //resto da divisão
    let rest
    rest = 12 % 5
    console.log(rest)

    //incremento ++
    let increment = 0
    increment++

    console.log(++increment)

    //decremento --
    let decrement = 0
    decrement--

    console.log(--decrement)

    //exponencial
    console.log(9 ** 2)

// FIM OPERADORES ARITIMÉTICOS

/////////////////////////////////////////////////////////////////////////////////

//  Grouping operator   ( )

let operator = 4 + 6 * 7 // sem operator
let operador = (4 + 6) * 7 //com operator
console.log(operator, operador)

/////////////////////////////////////////////////////////////////////////////////

//  OPERADORES DE COMPARAÇÃO

//  Irá comparar valores e retornar um Boolean como resposta à comparação

let one = 1
let two = 2

//igual a ==
//console.log(`two é igual a one:   ${two == 1}  one é igual a 1  ${one == 1}`)  -> colocar na mesma linha
console.log("two é igual a one: ", two == 1)
console.log("one é igual a 1: ", one == 1)


//diferente de !=
console.log("one é diferente de two, 1 e '1'", one != two, one != 1, one != "1")

//estritamente igual a === 
console.log("one é estritamente igual a '1' e 1",one === "1", one === 1)

//estritamente diferente de !==
console.log("two é estritamente diferente de '2' e 2",two !== "2", two !== 2)

//maior que >
console.log("one é maior que two: ",one > two)

//maior igual a >=
console.log("one é maior ou igual a 1", one >= 1)
console.log("two é maior ou igual a 1", two >= 1)

//menor que <
console.log("one é menor que two: ",one < two)

//menor igual a <=
console.log("one é menor ou igual a two", one <= two)
console.log("one é menor ou igual a 1", one <= 1)
console.log("one é menor ou igual a 0", one <= 0)

/////////////////////////////////////////////////////////////////////////////////

//OPERADORES DE ATRIBUIÇÃO (Assignment)

let x

//assignment

x = 1

//addition assignment
x += 2  //x = x + 2
console.log(x)

x = 1

//subtraction assignment
x -= 1  //x = x - 1
console.log(x)

x = 1

//multiplication assignment
x *= 2  // x = x * 2
console.log(x)

x = 1

//division assignment
x /= 2  //x = x / 2
console.log(x)

x = 1

//rest , exponetiation assignment
x %= 2  //x = x % 2
console.log(x)

x = 1

x **= 2 // x = x ** 2
console.log(x)

/////////////////////////////////////////////////////////////////////////////////

//OPERADORES LÓGICOS

// 2 valores do tipo booleanos, que quando verificados, resultará em verdadeiro ou falso


let pao = false
let queijo = true

//AND &&
if ((pao && queijo) == false) {
    console.log("Não gosto de café assim!!")
}else {
    console.log("Esté é café que eu gosto")
}

//OR || 
if ((pao || queijo) == false) {
    console.log("Não gosto de café assim!!")
}else {
    console.log("Serve assim mesmo hehe!!")
}

//NOT !
if ((!pao && queijo) == false) {
    console.log("Não gosto de café assim!!")
}else {
    console.log("Dei um jeito pra tomar o café hehe!!")
}

/////////////////////////////////////////////////////////////////////////////////

//OPERADORES CONDICIONAL (Ternário)

// Dependendo da condição, nós recebemos valores diferentes

//EX: Café da Manhã

let Pao = true
let Queijo = false

const niceBreakfast = Pao && Queijo ? 'café top' : 'Café Ruim'

console.log(niceBreakfast)

let bread = true
let cheese = true

const badBreakfast = Pao || Queijo ? 'café top' : 'café Ruim'

console.log(badBreakfast)

//EX: Maior de 18

let Age = 16

const canDrive = Age >= 18 ? 'Permitido dirigir' : 'Não tem permisão para dirigir'

console.log(canDrive)

/////////////////////////////////////////////////////////////////////////////////

//OPERADOR DE STRING

//comparison (comparação)
console.log(7 == 3)

//concatenation (concatenação)
console.log('De'+'ivi'+'s'+'on')


/////////////////////////////////////////////////////////////////////////////////

/* Falsy

false, 0, -0, "", null, undefined, NaN

*/

//EX: null

console.log("Usando null como exemplo: ",null ? 'Verdadeiro' : 'Falso')

/*TRUTHY

true, {}, [], 1, 3.23, "0", "false", Infinity, -Infinity

*/

console.log("Usando false como exemplo: ","false" ? 'Verdadeiro' : 'Falso')


