let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}


let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//challenge area
// create function take fahrenheit in and return object with all three


let convertFahrenheit = function (temp){
    return {
        celsius: (temp - 32) / 1.8,
        kelvin: (temp + 459.67) * (5 / 9),
        fahrenheit: temp
    }
}

let temps = convertFahrenheit(100)

console.log(temps)

console.log(`Kelvin: ` + temps.kelvin)
console.log(`Celsius: ` + temps.celsius)
console.log(`Fahrenheit: ` + temps.fahrenheit)

