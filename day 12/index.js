let names = []
let passwords = []
let proceed = true
let counter = 0

while (proceed) {

    let options = parseInt(prompt("Select one of these options: " + "\n1 = Register \n2 = Login \n3 = Delete registration \n4 = End the program"))

    switch(options){
    case 1:
        names[counter] = prompt("What's your name?")
        passwords[counter] = prompt("What's the password?")
        counter++  

        break;
    
    case 2:
        let name = prompt("What's your name?")
        let password = prompt("What's the password?")
        let validLogin = false

        for ( let i = 0; i < names.length; i++){
            if (name == names[i] && password == passwords[i]){
                validLogin = true
            }
        }
        if (validLogin) {
            alert("Sucessful login. Welcome!")
        } else {
            alert("Incorrect name or password!")
        }

        break;

    case 3:
        let deleteName = prompt("What's the name you would like to delete?")
        let namesAux = []
        let passwordsAux = []
        let counterAux = 0
        
        for (let i = 0; i < counter; i++) {
            if (deleteName == names[i]) {
                alert("Registration successfully deleted")
            } else {
                namesAux[counterAux] = names[i]
                passwordsAux[counterAux] = passwords[i]
                counterAux++
            }
        }
        names = namesAux
        passwords = passwordsAux
        counter--

        break;
    
    case 4:
        proceed = false
        break;
        
    default:
        console.log("Invalid option, choose another option!")
        break;
    }
}