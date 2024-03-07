let hunger = prompt("Are you hungry? [Y/N]")
let money = prompt("Do you have money? [Y/N]")
let restaurant = prompt("The restaurant is open? [Y/N]")

if (hunger === 'N' || money === 'N'){
    console.log('Today dinner will be at home.')
}

else if (hunger === 'Y' && restaurant === 'N'){
    console.log('Order a delivery!')
}

else {
    console.log ('Today dinner will be at your favorite restaurant!')
}