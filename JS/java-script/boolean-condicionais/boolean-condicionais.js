// verifique se a sua idade é maior que a de algum parente
// Dependendo do resultado coloque no console 'É maior', É igual' ou 'É menor'

var idade = 22,
  parente = 24;

if (idade > parente) {
  console.log('Sua idade é maior');
} else if (idade == parente) {
  console.log('Sua idade é igual');
} else if (idade < parente) {
    console.log('Sua idade é menor');
}
// Qual o valor é retornado na seguinte expressão?

var expressao = (5 - 2) && (5- ' ') && (5 - 2);
console.log(expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade2 = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome)
console.log(!!idade2)
console.log(!!possuiDoutorado)
console.log(!!empregoFuturo)
console.log(!!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log('Brasil possui mais habitantes.'); 
} else if(china > brasil){
    console.log('China possui mais habitantes');
}

// O que irá aparecer no console?
if (('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso')
}

// O que irá aparecer no console?
if (('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso')
}