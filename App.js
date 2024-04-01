function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  var paper = "paper".toLocaleLowerCase();
  var rock = "rock".toLocaleLowerCase();
  var scissors = "scissors".toLocaleLowerCase();

  if (playerSelection == paper && computerSelection == rock) {
    return "You win, Paper beats rock";
  } else if (playerSelection == paper && computerSelection == scissors) {
    return "You lose, Scissors beats paper!";
  } else if (playerSelection == paper && computerSelection == paper) {
    return "YOU DRAW";
  } else if (playerSelection == scissors && computerSelection == paper) {
    return "You win, Scissors beats Paper";
  } else if (playerSelection == scissors && computerSelection == rock) {
    return "You lose, rocks beats scissors";
  } else if (playerSelection == scissors && computerSelection == scissors) {
    return "YOU DRAW";
  } else if (playerSelection == rock && computerSelection == scissors) {
    return "You win, rock beats scissors";
  } else if (playerSelection == rock && computerSelection == paper) {
    return "You lose, paper beats rock!";
  } else if (playerSelection == rock && computerSelection == rock) {
    return "YOU DRAW";
  }
}

let playerWins = 0;
let computerWins = 0;
let draws = 0;

function playGame() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Please enter something: ").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log("Computer: " + computerSelection);
    console.log("Player 1: " + playerSelection);
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerWins++;
    } else if (result.includes("lose")) {
      computerWins++;
    } else {
      draws++;
    }
    console.log("Player wins: " + playerWins);
    console.log("Computer wins: " + computerWins);
    console.log("Draws: " + draws);
  }

  // Display the final score
  console.log("FINAL SCORES:-");
  console.log("Player wins: " + playerWins);
  console.log("Computer wins: " + computerWins);
  console.log("Draws: " + draws);
}

playGame();
