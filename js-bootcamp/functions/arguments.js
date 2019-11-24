//multiple arguments

let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//default arguments
//template Strings (Mac keyboard -->  Alt + < )
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name}, Score: ${score}!`
}

console.log(getScoreText())// Name: Anonymous Score: 0
console.log(getScoreText('Andrej', 199)) // Name: Andrej Score: 199
console.log(getScoreText(undefined, 99)) // Name: Anonymous Score: 99

//challenge
// total, tipPercent, deafult .2 for tip 
// return the valu of tip
// A 25 tip on $40 would be $10.......
let getTipPercent = function (total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% tip on $${total} would be $${tip}.`
}

console.log(getTipPercent(123))
console.log(getTipPercent(123, undefined))
console.log(getTipPercent(40, .25))