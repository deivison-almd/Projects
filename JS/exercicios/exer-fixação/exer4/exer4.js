/* 4. A variável "student" abaixo é de que tipo de dados?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:

        <name> de idade <age> pesa <weight> kg.

        Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto


*/

let student = {
    nome: "Pedro",
    age: 22,
    stars: 7.6,
    isSubscribed: true,
    weight: 67
} 

console.log(typeof student) //do tipo object
console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} kg.`)