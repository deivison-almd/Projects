

let family = {
    incomes: [1300.00, 220.55, 600.00],
    expenses: [300, 100, 500.25, 4000]

}

function sum(array) {
    let total = 0;

    for (let value of array) {
        total += value
    }

    return total;
}

function calculateIE() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if (itsOk) {
        balanceText = "positivo"
    }

    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateIE()