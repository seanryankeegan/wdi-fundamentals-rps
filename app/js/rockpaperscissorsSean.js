////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("~~~~Please choose either 'rock', 'paper', or 'scissors'.~~~~")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    console.log("Player chose " + playerMove + ".  Computer chose " + computerMove);
    if (playerMove === "scissors") {
      if (computerMove === "scissors") {
        return winner = "tie";
      }
      else if(computerMove === "rock"){
        return winner = "computer";
      }
      else {
        return winner = "player";
      }
    }
    else if (playerMove === "rock"){
      if (computerMove === "rock"){
        return winner = "tie";
      }
      else if(computerMove === "scissors") {
        return winner = "player";
      }
      else {
        return winner = "computer";
      }
    }
    else if (playerMove === "paper") {
      if (computerMove === "paper") {
        return winner = "tie";
      }
      else if (computerMove === "rock") {
        return winner = "player";
      }
      else {
        return winner = "computer";
      }
    }
    else {
        console.log("Please choose either 'rock', 'paper', or 'scissors'")
    }
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors.  First one to five wins!");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5){
      var winner = getWinner(getPlayerMove(), getComputerMove());
      if (winner === "player"){
      playerWins += 1;
      console.log("Player wins this round!")
    }
    else if (winner === "computer"){
      computerWins += 1;
      console.log("Computer wins this round!")
    }
    else {
      console.log("How boring! A tie for this round!")
    }
    console.log("The current score is Player: " + playerWins + " Computer: " + computerWins);
  }
    if (playerWins === 5) {
      console.log("Player wins this game!")
    }
    else {
      console.log("Computer wins!")
    }

}

playToFive();
