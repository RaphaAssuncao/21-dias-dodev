const array = []
const  index = []
let indexCounter = 0

const searchedNumber = parseInt(prompt("Enter the number to search for:"))

for (let i = 0; i < 10; i++) {
    const element = parseInt(prompt(`Enter the element ${i + 1}`))
    array[i] = element
}

for (let i = 0; i < 10; i++) {
    if (array[i] === searchedNumber) {
        index[indexCounter] = i
        indexCounter++
    }
}

console.log(`The number ${searchedNumber} was found in the indexes: ${index}`)