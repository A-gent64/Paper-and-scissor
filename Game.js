// Paper and scissor
const play = {
    1: "paper",
    2: "scissor",
    3: "rock",
  };
  
  function getFromComputer() {
    let compChoice = Math.floor(Math.random() * 3) + 1;
    return play[compChoice];
  }
  
  function playRound(playerSelection, computerSelection) {
    let play1 = playerSelection;
    let play2 = computerSelection;
  
    if (play1 == "rock" && play2 == "paper") {
      return "You lost";
    } else if (play1 == "rock" && play2 == "scissor") {
      return "You won";
    } else {
      return "It's null";
    }
  }
  
  function playGame() {
    let a = 0;
    let b = 0;
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice"); 
      const computerSelection = getFromComputer(); 
  
      let ans = playRound(playerSelection, computerSelection);
      if (ans == "You lost") {
        a++;
      } else if (ans == "You won") {
        b++;
      }
    }
  
    if (a < b) {
      console.log("You won");
    } else if (a > b) {
      console.log("The computer won!");
    } else {
      console.log("The game is null, no one won!");
    }
  }
  
  playGame();
  