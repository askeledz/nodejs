//Global scope (convertFahrenheitToCelsius, tempOne,tempTwo)
    //Local scope (fahrenheit, celsius)
        //Local scope (isFreezing)
let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8

    if (celsius <= 0) {
        let isFreezing = true
    }

    return celsius
}

let tempOne = convertFahrenheitToCelsius(32)
let tempTwo = convertFahrenheitToCelsius(68)
console.log(tempOne) // 0
console.log(tempTwo) // 20
