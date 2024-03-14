let array = []
let invertedArray = []
let n = parseInt(prompt("How many numbers do you want to insert into the array?"))

for (i = 0; i < n; i++){
    let numbers = parseInt(prompt(`Insert the ${i + 1}º number: `)) 
     array[i] = numbers
}
console.log(`Original array: " ${array}`)

let counter = n - 1
for (i = 0; i < n; i++) {
    invertedArray[i] = array[counter]
    counter--
}
console.log(`Inverted array: ${invertedArray}`)