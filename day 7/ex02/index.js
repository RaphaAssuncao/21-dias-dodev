let value = 0
let counter = 0
let totalBalance = 10000
let withdraw= 0
let balance = 0
let cont = "Y"
let highestBalance = 0
let average = 0 
let totalValue = 0

do{ 
let name = prompt("What's your name?")
let iD = prompt("What's your ID number") 
let value = parseInt(prompt("Insert the transaction amount: "))
let option = prompt("Withdraw [1] | Deposit [2]")

    switch(option){
        case "1":
            if(value > totalBalance || value < 0){
            console.log("Invalid")}
            else{
                value < totalBalance
                totalBalance = totalBalance - value
                break;
            } 
        case "2":
            totalBalance = value + totalBalance
                break;
        }

 cont = prompt("Do you want to continue? [Y/N]")

        highestBalance = highestBalance + value
        if(highestBalance > value){
            highestBalance = value
        }
    
    totalValue += value
    counter++
    average = totalValue / counter


}while(cont =='Y');


console.log("Your total balance is: "+ totalBalance)
console.log("The highest balance is: " + highestBalance)
console.log("The average of the inserted values is: " + average.toFixed(2))