// students score, total possible score
// 15/20 --> You got a C (75%)!
//Groups: A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


let gradeCalc = function (score, totalScore) {

    let percent = (score / totalScore) * 100
    let letterGrade = ''

    if (percent >= 90 && percent <= 100) {
        leterGrade = 'A'
    } else if (percent >= 80) {
        leterGrade = 'B'
    } else if (percent >= 70) {
        leterGrade = 'C'
    } else if (percent >= 60) {
        leterGrade = 'D'
    } else {
        leterGrade = 'F'
    }
    return `You got a ${leterGrade} (${percent}%)!`
}

console.log(gradeCalc(1, 20))
console.log(gradeCalc(2, 20))
console.log(gradeCalc(3, 20))
console.log(gradeCalc(4, 20))
console.log(gradeCalc(10, 20))
console.log(gradeCalc(15, 20))
console.log(gradeCalc(17, 20))
console.log(gradeCalc(19, 20))