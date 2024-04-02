class Car {
  Name
  Power
  MaximumSpeed
  Acceleration

  constructor(name, power, maximumSpeed, acceleration){
    this.Name = name
    this.Power = power
    this.MaximumSpeed = maximumSpeed
    this.Acceleration = acceleration
  }
  CalculateAverageTime(distance) {
    let result = distance/ (this.MaximumSpeed / this.Acceleration)
    return result
  }
}

class Race{
  Name 
  Type
  Distance
  Winner
  Participants
  
  constructor (name, type, distance) {
    this.Name = name
    this.Type = type
    this.Distance = distance
    this.Winner = ""
    this.Participants = []
  }
  
  WinnerDefine(){
    let lowestTime = this.Participants[0].CalculateAverageTime(this.Distance)
    let winner = this.Participants[0]

    for (let i = 0; i < this.Participants.length; i++) {
      let time = this.Participants[i].CalculateAverageTime(this.Distance)
      if(time < lowestTime) {
        lowestTime = time
        winner = this.Participants[i]
      }
    }
    return this.Winner = winner
  }
  ShowWinner(){
    alert(`The winner is: ${this.Winner.Name}`)
  }
}
let race = new Race('Monaco', 'Formula 1', 60000)

race.Participants[0] = new Car('McLaren', 220, 370, 11)
race.Participants[1] = new Car('Ferrari', 210, 200, 9 )
race.Participants[2] = new Car('Marea', 300, 220, 10)

race.WinnerDefine()
race.ShowWinner()