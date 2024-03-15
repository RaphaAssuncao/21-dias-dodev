//Car dealership

let models = []
let years = []
let values = []
let proceed = true
let counter = 0

while(proceed) {
    let model = prompt("What's the model of the car?")
    models[counter] = model
    let year = parseInt(prompt("What's the year of the car?"))
    years[counter] = year
    let value = Number(prompt("What's the value of the car?"))
    values[counter] = value
    counter++

    let answer = prompt("Would you like to insert new information? (y/n)")
    if (answer !== 'y') {
        proceed = false
    }
} 

console.log("Registered Car: ")
for (i = 0; i < models.length ; i++) {
    console.log(`${models[i]} - ${years[i]} - ${values[i]}`)
}

for (let i = 0; i < values.length - 1; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
        if (values[j] > values[j + 1]) {

            let modelHighestValue = models[j]
            models [j] = models [j + 1]
            models [j + 1] = modelHighestValue

            let yearHighestValue = years[j]
            years[j] = years[j + 1]
            years[j + 1] = yearHighestValue

            let HighestValue = values[j]
            values[j] = values[j + 1]
            values[j + 1] = HighestValue
        }
    }
}

console.log("Cars sorted by price: ")
for (let i = 0; i < models.length; i++) {
    console.log(`${models[i]} - ${years[i]} - ${values[i]}`)
}