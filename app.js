const roundResult = document.querySelector("#roundResult");
const startGame = document.querySelector("#start");
const restartGame = document.querySelector("#restart");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerCount = document.querySelector("#playerScore");
const computerCount = document.querySelector("#pcScore");

let playerScore = 0;
let computerScore = 0;
let sameResult = 0;
let gameOver = true;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1) {
    return "rock";
  } else if (random == 2) {
    return "paper";
  } else return "scissors";
}

rock.disabled = true;
rock.classList.add("disabled");
paper.disabled = true;
paper.classList.add("disabled");
scissors.disabled = true;
scissors.classList.add("disabled");
restartGame.disabled = true;
restartGame.classList.add("disabled");

startGame.addEventListener("click", () => {
  gameOver = false;
  playerCount.textContent = `${playerScore}`;
  computerCount.textContent = `${computerScore}`;
  roundResult.textContent = "Best of 5";
  rock.disabled = false;
  rock.classList.remove("disabled");
  paper.disabled = false;
  paper.classList.remove("disabled");
  scissors.disabled = false;
  scissors.classList.remove("disabled");
  restartGame.disabled = false;
  restartGame.classList.remove("disabled");
  startGame.classList.add("disabled");
  startGame.disabled = true;
  if (!gameOver) {
    rock.addEventListener("click", () => {
      let cpChoice = getComputerChoice();
      if (cpChoice === "rock") {
        sameResult = 0;
        sameResult++;
        console.log("Draw");
        if (sameResult > 1) {
          roundResult.textContent = `You both went with the rock, a draw it is. ...(${sameResult})`;
        } else {
          roundResult.textContent =
            "You both went with the rock, a draw it is.";
        }
      } else if (cpChoice === "scissors") {
        sameResult = 0;
        sameResult++;
        console.log("Win");
        playerScore++;
        if (sameResult > 1) {
          roundResult.textContent = `Rock smashes scissors to shards! You win! ...(${sameResult})`;
          playerCount.textContent = `${playerScore}`;
        } else {
          roundResult.textContent = `Rock smashes scissors to shards! You win!`;
          playerCount.textContent = `${playerScore}`;
        }
      } else {
        sameResult = 0;
        sameResult++;
        console.log("Lose");
        computerScore++;
        computerCount.textContent = `${computerScore}`;
        if (sameResult > 1)
          roundResult.textContent = `Your rock gets wrapped in a deadly paper, and suffocates to death, you lose. ...(${sameResult})`;
        else {
          roundResult.textContent = `Your rock gets wrapped in a deadly paper, and suffocates to death, you lose.`;
        }
      }
      if (playerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you win!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "red";
        playerCount.style.color = "green";
      } else if (computerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you lose.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "green";
        playerCount.style.color = "red";
      }
    });

    paper.addEventListener("click", () => {
      let cpChoice = getComputerChoice();
      if (cpChoice === "paper") {
        console.log("Draw");
        roundResult.textContent = `If this was an airplane fight someone might've won, but it is not, a draw it is.`;
      } else if (cpChoice === "rock") {
        console.log("Win");
        playerScore++;
        roundResult.textContent =
          "You hug the opponents rock to death with your affection and love, you win!";
        playerCount.textContent = `${playerScore}`;
      } else {
        console.log("Lose");
        computerScore++;
        roundResult.textContent =
          "You got a makeover by the opponents scissors... and not a pretty one at that, you lose.";
        computerCount.textContent = `${computerScore}`;
      }
      if (playerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you win!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "red";
        playerCount.style.color = "green";
      } else if (computerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you lose.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "green";
        playerCount.style.color = "red";
      }
    });

    scissors.addEventListener("click", () => {
      let cpChoice = getComputerChoice();
      if (cpChoice === "scissors") {
        console.log("Draw");
        roundResult.textContent = `Would have been cooler if this was a sword fight, but a scissor fight... meh, it's a draw.`;
      } else if (cpChoice === "paper") {
        console.log("Win");
        playerScore++;
        roundResult.textContent =
          "Snip snip! as your opponents paper shivers with fear not knowing the grim fate that awaits it, you win!";
        playerCount.textContent = `${playerScore}`;
      } else {
        console.log("Lose");
        computerScore++;
        roundResult.textContent =
          "You stare at the metallic blades reflection of what used to be a perfectly cutting scissors once... , you lose.";
        computerCount.textContent = `${computerScore}`;
      }
      if (playerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you win!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "red";
        playerCount.style.color = "green";
      } else if (computerScore == 5) {
        gameOver = true;
        roundResult.textContent = "Game over, you lose.";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        rock.classList.add("disabled");
        paper.classList.add("disabled");
        scissors.classList.add("disabled");
        pcScore.style.color = "green";
        playerCount.style.color = "red";
      }
    });
  }
});

restartGame.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  pcScore.style.color = "black";
  playerCount.style.color = "black";
  gameOver = false;
  playerCount.textContent = `${playerScore}`;
  computerCount.textContent = `${computerScore}`;
  roundResult.textContent = "Best of 5";
  rock.disabled = false;
  rock.classList.remove("disabled");
  paper.disabled = false;
  paper.classList.remove("disabled");
  scissors.disabled = false;
  scissors.classList.remove("disabled");
  startGame.classList.add("disabled");
  startGame.disabled = true;
  console.clear();
});
