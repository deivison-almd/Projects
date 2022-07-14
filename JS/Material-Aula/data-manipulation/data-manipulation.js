/*
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9'+5) //type coersion do js fazendo uma concatenação
console.log(Number('9')+5) //type conversion fazendo a conversão de String para Number

/////////////////////////////////////////////////////////////////////////////////////////

//Manipulando Strings e Números

//Transformar String em Número e Número em String

let string = "777"
let number = 888

console.log(Number(string))
console.log(String(number))


//Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Pneumoultramicroscopicossilicovulcanoconiótico"
console.log('A palavra Pneumoultramicroscopicossilicovulcanoconiótico possui: '+word.length+' caracteres')

let num = 7561561
console.log(String(num).length) //necessário a conversão de Number para String


//Tranformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let numero = 6546.5346

// "toFixed(2)" alterando para duas casas decimais e "replace" alterando o ponto por virgula
console.log(numero.toFixed(2).replace(".",","))



//Transforme letras minuúsculas em maiúsculas. Faça o contrário disso também

let word2 = "mais vale um passaro na mão..."
console.log(word2.toUpperCase())
let palavra ="DO QUE DOIS VOANDO"
console.log(palavra.toLowerCase())


//Verificar se o texto contém a palavra Amor

let phrase = "Eu quero Amor"
console.log(phrase.includes("Amor")) //"includes" é case sensitive

/////////////////////////////////////////////////////////////////////////////////////////////

//Manipulando Strings e Arrays

//Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do arrray. Depois disso, tranfirme o array em um texto e onde eram espaços, coloque _

let frase= "Eu quero viver a Vida"
let myArray = frase.split(" ")
let fraseWithUndescore = myArray.join("_")
console.log(fraseWithUndescore)

/////////////////////////////////////////////////////////////////////////////////////////////

//Manipulando Arrays

//Criar Arrray com construtor

let MyArray = new Array('a', 'b', 'c')
console.log(MyArray)


//Contar elementos de um array

console.log(["a", "b", "c"].length)

//Transformar uma cadeia de caracteres em elementos de um array

let Letra = "manipulation"
console.log(Array.from(Letra))


//Manipulando Arrays 2


let techs = ["html", "css", "js"]

// Adicionar um item no fim
console.log(techs.push("node.js"))

//adicionar um item no começo
console.log(techs.unshift("sql"))

//remover do fim
console.log(techs.pop())

//remover do começo
console.log(techs.shift())

//pegar somente alguns elementos di array
//console.log(techs.slice(1,3))

//remover 1 ou mais itens em qualquer possição do array
//console.log(techs.splice(1, 2))

//encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log("O elemento do array está na posição: "+index)
