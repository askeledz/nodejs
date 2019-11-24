// input (argument) - code - output (return value)

let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)

// covertFahrenheitToCelsius
//(32 to 0) (68 to 20)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8
    return celsius
}

console.log(convertFahrenheitToCelsius(32)) // 0
console.log(convertFahrenheitToCelsius(68)) // 20
