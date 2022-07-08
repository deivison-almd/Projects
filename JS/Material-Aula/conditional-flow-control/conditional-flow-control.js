//  Control flow

//if...else

let temperature = 36.5

if (temperature >= 37) {
    console.log("Você está com febre")
}else {
    console.log("Você não está com febre")
}

//////////////////////////////////////////////////////////////////

//switch

function calculate(num1, operator, num2) {
    let result

    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            result = num1 / num2
            break;
        default:
            console.log('Não impplementado')
            break;
    }
    return result
}

console.log(calculate(7, '+', 3))
console.log(calculate(7, '-', 3))
console.log(calculate(7, '*', 3))
console.log(calculate(7, '/', 3))

//////////////////////////////////////////////////////////////////

//throw

function sayMyName(name = '') {
    if (name === '') {
        throw new Error("Bota o nome fela da put*")
    }

    console.log("depois do erro")
}

//try...catch

try {
    sayMyName('')
} catch (error) {
    console.log(error)
}

