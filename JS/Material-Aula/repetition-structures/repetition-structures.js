// Estrutura de repetição

//for

    //break - parar a execução do loop
    //continue - pula a execução atual

for (let I = 5; I > -5; I--) {
    if (I === -2 ) {
        continue
    }
    //console.log(I)
}

////////////////////////////////////////////////////////

// while
let i = 4458

while (i  >  10) {
    console.log(i)

    i /= 2
}

////////////////////////////////////////////////////////

//for...of

let nome = 'Deivison'
let nomes = ['Leo', 'Gustavo', 'Ana']


for (const char of nome) {
    console.log(char)
}

for (let nome of nomes) {
    console.log(nome)
}

////////////////////////////////////////////////////////

//for...in

let person = {
    Nome: 'Deivison',
    age: '22 anos',
    weight: '60kg'
}

for (const property in person) {
    console.log(property+":", person[property])
}

