

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2,   // us dollar
    "GBP": 0.8,   // british pound
};

// Función para convertir de dólares a yenes japoneses
function fromDollarToYen(amountInDollars) {
    // Utilizamos la tasa de conversión de USD a JPY del objeto oneEuroIs
    return amountInDollars * oneEuroIs["JPY"] / oneEuroIs["USD"];
}

// Función para convertir de euros a dólares estadounidenses
function fromEuroToDollar(amountInEuros) {
    // Utilizamos la tasa de conversión de EUR a USD del objeto oneEuroIs
    return amountInEuros * oneEuroIs["USD"];
}

// Función para convertir de yenes japoneses a Libras esterlinas
function fromYenToPound(amountInYen) {
    // Utilizamos la tasa de conversión de JPY a GBP del objeto oneEuroIs
    return amountInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

let amountInEuros = 3.5
let amountInDollars = 7
let amountInYen = 20

console.log(fromEuroToDollar(amountInEuros)); // Devuelve el equivalente en dólares estadounidenses
console.log(fromDollarToYen(amountInDollars));
console.log(fromYenToPound(amountInYen));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound};
