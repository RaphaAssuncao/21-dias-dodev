let name = prompt("What's your name?")
let age = parseInt(prompt("How old are you?"))
let weight = parseInt(prompt("What's your weight?"))
let height = Number(prompt("What's your height?"))
let profession = prompt("What's your profession?")

console.log(`Hello ${name}, you are ${age} years old, a ${profession}, 
your height ${height.toFixed(2)}M and weigh ${weight}KG `)

if( age >= 18){
    console.log("You are allowed to drink alcoholic beverages.")
} else {
    console.log("You're not allowed to drink alcholic beverages")
}

let days = age * 365.25
let months = days / 30.44
let weeks = days /7

console.log(`Your age in months is: ${months.toFixed()}`)
console.log(`Your age in weeks is: ${weeks.toFixed()}`)
console.log(`Your age in days is: ${days.toFixed()}`)

let BMI = weight / (height*height)

console.log(`Your BMI: ${BMI.toFixed(2)}`)

if(BMI < 18.5){
    console.log("Underweight")
}else if(BMI > 18.5 && BMI < 24.9){
    console.log("Normal weight")
}else if( BMI > 24.9 && BMI < 30){
    console.log("Overweight ")
}else{
    console.log("Obesity ")
}

let actualYear = 2024
let yearOfBirth = actualYear - age
console.log(`You were born in ${yearOfBirth}`)

for(let i = yearOfBirth; i <= 2024; i++){
    let j = i - yearOfBirth 
    console.log(i +` - ${j}  years old`)
}