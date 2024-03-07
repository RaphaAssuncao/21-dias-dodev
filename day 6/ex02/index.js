let number = parseInt(prompt('Which multiplication table do you want?? '))
let i,j

for(i = number; i <= number + 2; i++){
    console.log("Number "+ i)
    for(j = 0; j <= 10; j++){
        console.log(i + ' x ' + j + ' = ' + (i * j))
    }
}
