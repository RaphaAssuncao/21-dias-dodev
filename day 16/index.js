let names = []
let passwords = []

function User(){
  let option = prompt("Choose an option: \n1 Sign Up \n2 Log in \n3 Delete a log in \n4 End Program") 
  return option
}

function SignUp(){
  names.push(prompt("What's your name?"))
  passwords.push(prompt("Create a password:"))
}

function Login(name, password){
  let index = names.indexOf(name)
  if(index !== -1 && passwords[index] == password) {
    return true
  } else {
    return false
  }
}

function Exclusion(name){
  let index = names.indexOf(name)
  if (index !== -1){
    names.splice(index, 1)
    passwords.splice(index, 1)
    console.log("Your account was successfully deleted!")
  } else {
    console.log("User not found")
  }
}

let proceed = true
let name
while (proceed){
  let option = User()
  
  switch(option){
    case '1':
      SignUp()
      break
    case '2':
       name = prompt("Insert your name")
      let password = prompt("Insert your password")
      let login = Login(name, password)
      if(login){
        console.log("Successful login.")
      } else {
        console.log("Name or password is incorrect!")
      }
      break
    case '3':
        name = prompt("Insert your name")
      Exclusion(name)
      break
    case '4':
      proceed = false
      break
    default:
      console.log("Invalid option. Try again.")
      break
  }
}
