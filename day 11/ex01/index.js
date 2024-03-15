let studentNames = []
let studentGrades = []
let proceed = true
let counter = 0

do {
    let name = prompt(`Enter ${counter + 1}º student name: `)
    let grade = parseInt(prompt("Enter test grade: "))
    studentNames[counter] = name
    studentGrades[counter] = grade
    counter++

    let answer = prompt("Do you want to continue? (Y/N)")
    if (answer != 'Y') {
    proceed = false
    }
} while(proceed)

console.log("Student grades: ")

for (i = 0; i < studentNames.length; i++) {
    console.log(`${studentNames[i]} - ${studentGrades[i]}`)
}
let sumGrades = 0
for (i = 0; i < studentGrades.length; i++) {
    sumGrades += studentGrades[i] 
}
let average = sumGrades / studentNames.length
console.log("The sum of grades is: " + sumGrades)
console.log("The average of the class is: " + average)