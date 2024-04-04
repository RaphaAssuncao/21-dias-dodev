let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

function NumberinCommon(arrayOne, arrayTwo){
  let result = []
  let counter = 0

  for (let i = 0; i < arrayOne.length; i++){
    for (let j = 0; j < arrayTwo.length; j++){
      if (arrayOne[i] === arrayTwo[j]){
        result[counter] = arrayOne[i]
        counter++
        j = arrayTwo.length
      }
    }
  }
  return result
}
console.log(NumberinCommon(arrayA, arrayB))