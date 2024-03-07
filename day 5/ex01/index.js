// Calculator DoDev

let num1 = Number(prompt("Insert your first number: "))
let num2 = Number(prompt("Insert your second number: "))

let options = Number(prompt('Choose option 1 to 4'+ '\n1 = +; \n2 = -; \n3 = *; \n4 = /'))

switch (options)
{
    case 1:
        console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2))
         break;
    case 2:
        console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2))
        break;
    case 3:
        console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2))
         break;
    case 4:
        console.log(num1 + ' / ' + num2 + ' = ' + (num1 / num2))
        break;
    default:
        console.log('Invalid')
    
        
}
