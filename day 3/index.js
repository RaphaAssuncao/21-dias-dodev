console.log("=============================")
let name = prompt("What's your name?")
let age = parseInt(prompt("Insert your age"))
let height = parseFloat(prompt("Insert your height"))
let weight = parseInt(prompt("Insert your weight"))

let dateOfBirth = (2024 - age)
let BMI = (weight/(height * height))

console.log(name)
console.log(age)
console.log(height)
console.log(weight)

console.log("=============================")
console.log("You were born in "+ dateOfBirth)
console.log("Your BMI is: "+ BMI.toFixed(2))

console.log("Hello " + name + ", you have " + age + " years old, were born in " + dateOfBirth + ", have " + height + ", weigh " + weight +"kg and your BMI is " + BMI.toFixed(2) +"kg/m2")
console.log("=============================")