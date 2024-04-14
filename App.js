// Function to get computer's choice
function getComputerChoice() {
  const arr = ["Rock", "Paper", "Scissors"];
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement.toLowerCase();
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You Draw";
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Variables to keep track of scores
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function playGame() {
  let totalRoundsPlayed = 0; // Variable to track total rounds played
  let playAgain = true; // Variable to control whether to play again

  while (playAgain) {
    // Reset scores before starting a new game
    playerWins = 0;
    computerWins = 0;
    draws = 0;

    for (let i = 0; i < 5; i++) {
      const computerSelection = getComputerChoice();
      const playerSelection = makeMove(); // Player's selection
      const result = playRound(playerSelection, computerSelection); // Determine the result of the round
      alert(result); // Display the result

      // No need to update scores here; it's handled in makeMove()

      // Reset clicked images
      resetClickedImages();

      // Update the results displayed on the screen
      updateResultsOnScreen();
    }

    // Display final scores and ask to play again
    alert(
      "FINAL SCORES:\nPlayer wins: " +
        playerWins +
        "\nComputer wins: " +
        computerWins +
        "\nDraws: " +
        draws
    );

    // Increment total rounds played
    totalRoundsPlayed += 5;

    // Check if 5 rounds have been played
    if (totalRoundsPlayed >= 5) {
      // Ask the user if they want to play again
      playAgain = confirm("Do you want to play again?");
      totalRoundsPlayed = 0; // Reset total rounds played if playing again
    }
  }
}

// Call playGame function to start the game
playGame();

// Function to handle player's move when clicking on an image
function makeMove(element) {
  // Toggle color of the clicked element
  toggleColor(element);
  // Proceed with the game logic by calling playRound when player makes a choice
  const playerSelection = element.id; // Get the ID of the clicked element
  const computerSelection = getComputerChoice(); // Get computer's selection
  // Determine the result of the round
  const result = playRound(playerSelection, computerSelection);
  // Display the result in an alert
  alert(result);
  // Update scores based on the result of the round
  if (result === "You win!") {
    playerWins++;
  } else if (result === "You lose!") {
    computerWins++;
  } else {
    draws++;
  }
  // Update the results displayed on the screen
  updateResultsOnScreen();
}

// Function to toggle color of the clicked element
function toggleColor(element) {
  element.classList.toggle("clicked");
}

// Function to reset clicked images
function resetClickedImages() {
  const clickedElements = document.querySelectorAll(".clicked");
  clickedElements.forEach((element) => element.classList.remove("clicked"));
}

// Function to update results on screen
function updateResultsOnScreen() {
  const playerWinsElement = document.querySelector(".player-wins p");
  const computerWinsElement = document.querySelector(".computer-wins p");
  const drawsElement = document.querySelector(".ties p");

  playerWinsElement.textContent = "Player Score: " + playerWins;
  computerWinsElement.textContent = "Computer Score: " + computerWins;
  drawsElement.textContent = "Ties: " + draws;
}
