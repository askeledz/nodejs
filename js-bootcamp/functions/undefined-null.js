//Undefined for variable
let name

name = 'Jen'

if (name === undefined) {
    console.log('PLease provide the name!')
} else {
    console.log(name)
}


// Undefined for function argument
// Undefined as function return default value
let square = function (num){
    console.log(num)
}

let result = square()
console.log(result)


//Null as assigned value 
let age = 27
age = null
console.log(age)