function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return "Rock";
  } else if (random == 2) {
    return "Paper";
  } else return "Scissors";
}

const getPlayerChoice = "rock";

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie between ${playerSelection} and ${computerSelection}!`;
  } else {
    if (playerSelection === "rock" && computerSelection === "Paper") {
      return "Rock loses to Paper, you lose.";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
      return "Rock beats Scissors, you win.";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
      return "Paper beats Rock, you win.";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "Scissors"
    ) {
      return "Paper loses to Scissors, you lose.";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
      return "Scissors lose to Rock, you lose.";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "Paper"
    ) {
      return "Scissors beats Paper, you win.";
    }
  }
  console.log(playerSelection, computerSelection);
}

console.log(playRound(getPlayerChoice, getComputerChoice()));
