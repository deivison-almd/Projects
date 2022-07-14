// 1ª PARTE



//criar um aplicativo de frases motivacionais

//decraration - declaração da função -> function statement

function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Quem morre no final organiza o funeral')
    console.log('Um dia eu viro desenvolvedor sênior')
}

//chamar a função (execute, run, call, invoke)

createPhrases()
createPhrases()
createPhrases()



console.log('fim do programa')


//FIM DA PRIMEIRA PARTE




//2ª PARTE



//function anonymous

const sum = function(num1, num2) {
    total = num1 + num2
    return total
}

let num1 = 43
let num2 = 21

console.log(`o numero 1 é ${num1}`)
console.log(`o numero 2 é ${num2}`)
console.log(`a soma é ${sum(num1, num2)}`)

sum(2,5)
sum(345,655)
sum(234,77)


//FIM DA SEGUNDA PARTE




//3ª PARTE

//Função é um liquidificador

function fazerSuco(frut1, frut2) {
    return 'suco de: ' + frut1 + frut2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)


//FIM DA TERCEIRA PARTE


//4ª PARTE


//function scope

let subject = 'create video'

function creatThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink())
console.log(subject)


//FIM DA QUARTA PARTE


//5ª PARTE

//function hosting

SayMyName();

function SayMyName() {
    console.log('Pedro')
}


//FIM DA QUINTA PARTE


//6ª PARTE


//arrow function

const sAyMyName = (nome) => {
    console.log(nome)
}

sAyMyName('Deivison')


//7ª Parte


//caalback function

function sayMyName (nome) {
    console.log('Antes de executar a função callback')

    nome()

    console.log('Depois de executar a callback')

}

sayMyName(
    () => {
        console.log('Estou em uma callback ')
    }
)

//FIM DA SETIMA PARTE


/*Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name) {
    this.name = name
}

function Idade(age) {
    this.age = age
}

const deivison = new Person("Deivison")
const idadeD = new Idade("22 anos")
const ancelmo = new Person("Ancelmo")
const idadeN = new Idade("21 anos")

console.log(deivison, idadeD)
console.log(ancelmo, idadeN)