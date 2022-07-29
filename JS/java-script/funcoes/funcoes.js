function verificarIdade(idade) {
  if (idade >= 18) {
    return console.log('Você é maior de idade');
  } else if (idade < 18) {
    return console.log('Você é menor de idade');
  }
}
console.log(verificarIdade(22));

// function mostraConsole() {
//   console.log('Oi')
// }
// addEventListener('click', mostraConsole);

function terceiraIdade(idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return 'Você é velho';
  } else {
    return 'Você ainda não é velho';
  }
}
console.log(terceiraIdade(60));

// Exemplo 1: ==============================================================>
// function media(nota1, nota2, nota3) {
//     let media = (nota1 + nota2 + nota3) / 3;
//     return media;
// }
// console.log(media(7, 8, 8));
// console.log(media(4, 10, 7));

// Exemolo 2: ==============================================================>
// function quadrado(num1) {
//     let quadrado = num1 ** 2;
//     return quadrado;
// }
// console.log(quadrado(7))

// Crie uma função para verificar se um valor é truthy
function valor(val1) {
  if (val1 > 0) {
    return true;
  } else {
    return false;
  }
}
console.log(valor(1));

// Crie uma função matematica que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados de um quadrado
function perimetro(lado) {
  let perimetro = lado + lado + lado + lado;
  return perimetro;
}
console.log(perimetro(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  let nomeCompleto = nome + sobrenome;
  return nomeCompleto;
}
console.log(nomeCompleto('Deivison de Jesus ', 'Dutra Almeida'));

// Crie uma funçãp qie verifica se um número é par
function par(num) {
  let par = num / 2;
  if (num % 2 === 0) {
    console.log('O número é par');
  } else {
    console.log('O número é impar');
  }
  return par;
}
console.log(par(6));

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function menssagem(msg) {
  console.log(typeof 'Tipo de argumento');
}

console.log(menssagem());

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer

addEventListener('click', function () {
  console.log('Deivison Almeida');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(35));