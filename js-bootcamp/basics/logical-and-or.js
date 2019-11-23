let temp = 59

// logical and operator

if (temp >= 60 && temp <= 90) {
    console.log('It is preatty nice out!')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Eh. do what you want!')
} 

let isGuestOneVegan = false
let isGuestTwoVegan = false 

if (isGuestOneVegan && isGuestTwoVegan){
    console.log('Only offer up vegan dishes!')
} else if (isGuestOneVegan || isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options!')
}else{
    console.log('Offer up anything on the menus!')
}