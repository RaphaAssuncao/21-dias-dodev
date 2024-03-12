let actualSalary
let confirmation 

do {
let name = prompt("What's your name?")
let age = parseInt(prompt("How old are you?"))
 actualSalary = Number(prompt("What is your actual salary?"))

console.log(`Name: ${name}`)
console.log(`Age: ${age}`)
console.log(`Actual Salary: ${actualSalary}`)

 confirmation = prompt("Is all information correct? [Y/N]")
} while (confirmation == 'N')

rise = 0.015
console.log("Salary forecast for the next 10 years:")

for(let year = 1; year <= 10; year++) {
     actualSalary += actualSalary * rise
     rise *= 2
     console.log((2024 + year)+ ` = R$ ${actualSalary.toFixed(2)}`)
}
