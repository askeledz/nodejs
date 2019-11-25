//creating objects
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}
//read objects properties
console.log(`${myBook.title} by ${myBook.author}`)

//change object properties

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


//Model object Pearson --> name, age, location
// Andrej is 41 and lives in Croatia.
//Increase age by 1 and print message again.

let person = {
    name: 'Andrej',
    age: 41,
    location: 'Croatia'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)

person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}.`)