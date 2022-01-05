let choice = "";
let roundWinner = "";
let computerChoice = choice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');


let computerPlay = () => {
  switch(Math.floor(Math.random() *3)){
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
};

let playRound = () => {
  computerPlay();
  if(playerChoice == "rock" && computerChoice == "rock" || playerChoice == "paper" && computerChoice == "paper" || playerChoice == "scissors" && computerChoice == "scissors"){
    roundWinner = "tie";
  } 
  else if(playerChoice == "rock" && computerChoice == "scissors" || playerChoice == "paper" && computerChoice == "rock" || playerChoice == "scissors" && computerChoice == "paper"){
    roundWinner = "player";
  }
  else if(playerChoice == "scissors" && computerChoice == "rock" || playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors"){
    roundWinner = "computer";
  }
  else{
    console.log("error, playerChoice is not a correct answer");
  }
};

/*

let game = () => {
do{
  playerChoice = prompt("choice");
  playRound();
  if(roundWinner == "tie"){
    console.log("tie, no one won.");
  }
  else if(roundWinner == "player"){
    console.log("You won the round");
    playerScore++;
  }else if (roundWinner == "computer"){
    console.log("The computer won the round");
    computerScore++;
  }
  else{
    console.log("stopping game");
    break;
  }
  console.log("player score is " + playerScore + " computerScore " + computerScore);
}
while (playerScore < 5 && computerScore < 5);

if(playerScore == 5){
  console.log("Player wins the game");
}
else if (computerScore == 5){
  console.log("Computer wins the game");
}

} 


game();
*/


let score = () => {
  if(roundWinner == "player"){
    playerScore++;
    console.log("playerScore = " + playerScore + " computerScore = " + computerScore);
  }else if(roundWinner == "computer"){
    computerScore++;
    console.log("playerScore = " + playerScore + " computerScore = " + computerScore);
  }
  else {
    console.log("playerScore = " + playerScore + " computerScore = " + computerScore);
  }
}

let btnClick = () => {
  rockBtn.addEventListener('click', () => {
    playerChoice = "rock";
    playRound();
    console.log(roundWinner);
    score();
    
  });

  paperBtn.addEventListener('click', () => {
    playerChoice = "paper";
    playRound();
    console.log(roundWinner);
    score();
  });

  scissorsBtn.addEventListener('click', () => {
    playerChoice = "scissors";
    playRound();
    console.log(roundWinner);
    score();
  });

}

window.onload = function(){
  btnClick();
}

