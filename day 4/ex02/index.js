let driversLicense = false
let car = false

let name = prompt("What's your name?")
let age = parseInt(prompt('How old are you?'))
let optionDriversL = prompt("Do you have a driver's license? [Y/N]")
let optionCar = prompt('Do you have a car? [Y/N]')

if (optionDriversL == "Y"){
    driversLicense = true
}
if (optionCar == "Y"){
    car = true
}

if (age < 18 || !driversLicense){
    console.log(name + ", you can't drive.")
}

else if (age >= 18 && driversLicense  && !car){
    console.log(name + ", you can drive but don't have a car.")
}

else {
    console.log(name + ", you will be a driver!")
}