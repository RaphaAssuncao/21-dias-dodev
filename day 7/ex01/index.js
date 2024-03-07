let masculine = 0
let feminine = 0
let counter = 1
let = hGradeMan = 0
let average = 0

while(counter <= 5){
    let grade = parseInt(prompt("Enter the student's " + counter + "* grade"))
    let gender = prompt("Enter the student's gender [M/F]")

    if (gender == 'M'){
        if(grade > hGradeMan){
            hGradeMan = grade
        }
        masculine++
        }

    if(gender == 'F' && grade > 7){
        feminine++
    }

    average += grade
    counter++
}

average = average / 5

console.log("The general average is: "+ average)
console.log("Total men's grade: "+ masculine)
console.log("Women who had a grade above  7: "+ feminine)
console.log("The highest grade among men: "+ hGradeMan)
