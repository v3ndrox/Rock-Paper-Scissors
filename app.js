function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?");
  return playerChoice.toLowerCase();
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else return "scissors";
}

let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log(
      `It's a tie between ${playerSelection} and ${computerSelection}!`
    );
  } else {
    if (playerSelection === "rock" && computerSelection === "paper") {
      console.log("Rock loses to Paper, you lose.");
      computerCount++;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log("Rock beats Scissors, you win.");
      playerCount++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      console.log("Paper beats Rock, you win.");
      playerCount++;
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      console.log("Paper loses to Scissors, you lose.");
      computerCount++;
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
      console.log("Scissors lose to Rock, you lose.");
      computerCount++;
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      console.log("Scissors beats Paper, you win.");
      playerCount++;
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(getPlayerChoice(), getComputerChoice());
    console.log(`You:${playerCount} | Computer:${computerCount}`);
  }
  if (playerCount > computerCount) {
    console.log("Congratulations! you beat the computer.");
  } else if (playerCount == computerCount) {
    console.log("Well what do you know, it's a tie.");
  } else {
    console.log("You lost to the computer.");
  }
  playerCount = 0;
  computerCount = 0;
}
