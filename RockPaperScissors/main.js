//Random number generator between 0 and 1 for computer.

//Console prompts user for input

//Computer randomly generates choice

//Comparison
RockPaperScissors()
//Winner output

//Restart

function RockPaperScissors(){
  //User selection.
  var userSelection = prompt("Do you choose Rock, Paper or Scissors? Enter Quit to exit.")
  //Random number selection for computer.
  var compSelection = Math.random()
  if(compSelection <0.34) {
    compSelection = "Rock"
  }
  else if(compSelection <=0.67) {
    compSelection = "Paper"
  }
  else {
    compSelection = "Scissors"
  }
  console.log("Computer selection: " + compSelection)
  //------------------------------------------------------
  var userWins = true

  if(userSelection === "Quit" || userSelection === "quit") {
    return
  }
  else if(compSelection === userSelection){
    alert("Draw")
  }
  else{
    if(compSelection === "Rock" || userSelection === "rock"){
      if(userSelection === "Scissors"  || userSelection === "scissors"){
        userWins = false
      }
    }
    else if(compSelection === "Paper" || userSelection === "paper"){
      if(userSelection === "Rock" || userSelection === "rock"){
        userWins = false
      }
    }
    else if(compSelection === "Scissors" || userSelection === "scissors"){
      if(userSelection === "Paper" || userSelection === "paper"){
        userWins = false
      }
    }
    if(userWins){
      alert("User Wins")
    }
    else{
      alert("Computer Wins")
    }
  }
  RockPaperScissors()
};
