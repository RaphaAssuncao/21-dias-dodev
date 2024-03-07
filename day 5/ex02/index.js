// DoDev Thru
let liters
let value
let options = parseInt(prompt('Select one of the 3 options for the type of service for your vehicle: ' + '\n1 = Fill with gasoline \n2 = Fill with diesel \n3 = Calibrate the Tires'))

switch (options)
{
    case 1:
        value = parseInt(prompt('What is the desired value? '))
        liters = value / 5
        console.log("Your car has been filled with " +liters.toFixed(1) + "L with gasoline")
            break;
    case 2:
        value = parseInt(prompt('What is the desired value? '))
        liters = value / 3
        console.log("Your car has been filled with "+liters.toFixed(1) + "L with diesel")
            break;
    default:
        console.log('Tires successfully calibrated!')
        break;
}

