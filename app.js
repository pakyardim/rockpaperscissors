//WEBSITE
const playButtons = document.querySelectorAll(".playButton");
const playimg = document.querySelector(".player-img");
const compimg = document.querySelector(".comp-img");
const winner = document.querySelector(".winner");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const resetButton = document.querySelector(".resetButton");



document.querySelector(".startButton").addEventListener("click", function(e) {

  e.target.style.display = "none";

  playButtons.forEach(playButton =>{
    playButton.style.display = "inline-block";
  });

  playimg.style.display = "inline-block";
  compimg.style.display = "inline-block";
  resetButton.style.display = "inline-block";

  game();
});

//GAME
const move = ["rock", "paper", "scissors"];

function computerPlay(items) {
  return items[Math.floor(Math.random() * items.length)];
}

let playerWin = 0;
let computerWin = 0;

function game() {

    playButtons.forEach(playButton =>{
      playButton.addEventListener('click', function(){
        const cSelection = computerPlay(move);
        console.log(cSelection);
        singleRound(this.name, cSelection);
        playimg.src = `images/${this.name}.png`;
        compimg.src = `images/${cSelection}.png`;
        //buraya images değişimi yapılacak.
      });
    });

    resetButton.addEventListener('click', function(){
      playerWin = 0;
      computerWin = 0;
      playerScore.innerText = 0;
      computerScore.innerText = 0;
      winner.innerText = " ";
      playimg.src = "images/rock.png"
      compimg.src = "images/rock.png";
    });

}



function singleRound(playerSelection, computerSelection) {

  if (playerSelection == computerSelection) {

    winner.style.display = "block";
    winner.innerText = "DRAW! PLAY AGAIN";
    return;

  } else if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock") {

    playerWin++;
    playerScore.innerText = playerWin;

    winner.style.display = "block";
    winner.innerText = "PLAYER WON!";
    return;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {

    playerWin++;
    playerScore.innerText = playerWin;
    winner.style.display = "block";
    winner.innerText = "PLAYER WON!";
    return;

  } else {
    computerWin++;
    computerScore.innerText = computerWin;
    winner.style.display = "block";
    winner.innerText = "COMPUTER WON!";
    return;
  }
}
