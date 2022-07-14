/*
    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
*/

function transformTemperature(tempereture) {
    const celsiusTrue = tempereture.toUpperCase().includes('C')
    const fahrenheitTrue = tempereture.toUpperCase().includes('F')


//fluxo de erro
    if (!celsiusTrue && !fahrenheitTrue) {
        throw new Error('Grau não identificado')
    }
//fluxo ideal, F -> C
    let updatedTempereture = Number(tempereture.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
    let temperetureSign = '°C'

//fluxo alternativo, C ->
    if (celsiusTrue) {
        updatedTempereture = Number(tempereture.toUpperCase().replace("C", ""));
        formula = (celsius) => (celsius * 9/5) + 32
        temperetureSign = '°F'
    }

    return formula(updatedTempereture) + temperetureSign
}

try {
    console.log(transformTemperature('10C'))
    console.log(transformTemperature('50F'))
    transformTemperature('50Z')
} catch (error) {
    console.log(error.message)
}
