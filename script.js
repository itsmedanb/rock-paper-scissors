
let choice = "choice";
let playerChoice = "rock";
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
  
  switch(Math.floor(Math.random() *3)){
    case 0:
      choice = "rock";
      break;
    case 1:
      choice = "paper";
      break;
    case 2:
      choice = "scissors";
      break;
  }
  return choice;
  
}

function playRound (){
  if(playerChoice == "rock" && computerPlay() == "scissors" || playerChoice == "paper" && computerPlay() == "rock" || playerChoice == "scissors" && computerPlay() == "paper"){
    return "you win";
  }
  else if(computerPlay() == " rock" && playerChoice == "scissors" || computerPlay() == "paper" && playerChoice == "rock" || computerPlay() == "scissors" && playerChoice == "paper"){
    return "you lose";
  }
  else{
    return "tie";
  }
}

function game(){
  playRound(playerChoice, computerPlay());
  
  if(playRound() == "you win"){
    playerScore++;
  }
  if (playRound() == "you lose"){
    computerScore++;
  }
  console.log(playerScore, computerScore);
}

while (playerScore < 4 || computerScore < 4) {
  game();
}