let name 
let salary

function askingEmployee(){
  name = prompt("What is the employee's name?")
  salary = Number(prompt("What is the employee's salary?"))
  calculateSalaryIncrease(name, salary)
}

function calculateSalaryIncrease(name, salary){
  let increase = 0

  if (salary <= 1500) {
    increase = 0.2
  } else if (salary > 1501 && salary <= 2000) {
    increase = 0.15
  } else if (salary > 2001 && salary <= 3000) {
    increase = 0.1
  } else {
    increase = 0.05
  }
  let newSalary = salary + (salary * increase)

  console.log(`Employee's name: ${name}`)
  console.log(`Salary: ${salary}`), 
  console.log(`Increase Percentage: ${increase}`)
  console.log(`Readjusted Salary: ${newSalary}`) 
  calculateAgain()
}

function calculateAgain(){
  let answer = prompt("Would you like to calculate again with new information? [Y/N]")
  if (answer === 'Y'){
    askingEmployee()
  } else {
    console.log("Program closed")
  }
}