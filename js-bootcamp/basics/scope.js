// lexical scope (Static Scope) - code block scope
// Global scope - Defined outside of all code blocks
// Local Scope - Defined under code block

//In a scope you can access variables defined in that scope or in any parent/ancestors scope

// Global scope (varOne)
    //Local Scope (varTwo)
        //Local Scope (varFour)
    //Local Scope (varThree)

let varOne = 'varOne' // Global scope

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo' // Local scope
    console.log(varTwo)

    if(true){
        console.log(varOne)
        console.log(varTwo)
        let varFour = 'varFour'
    }
}

if (true){
    let varThree = 'varThree'
    console.log(varThree)
}

