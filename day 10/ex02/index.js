let array = []
let invertedArray = []

for (let i = 0; i < 5; i++) {
    let number = parseInt(prompt("Insert 5 numbers"))
    array[i] = number 
}
console.log(`Original array: ${array}`)

let counter = 4
for (i = 0; i < 5; i++) {
    invertedArray[i] = array[counter]
    counter--
}
console.log(`Inverted array: ${invertedArray}`)