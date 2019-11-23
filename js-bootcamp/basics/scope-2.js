
// Global (name)
//Local  (name)
    //Local
//Local

let name = 'Andrej'


if (true) {
    let name = 'Mike' // variable shadowing - same var name in different scopes
    if (true) {
        console.log(name)
    }
}

if (true) {
    console.log(name)
}