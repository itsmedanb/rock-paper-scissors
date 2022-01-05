let choice = "";
let roundWinner = "";
let computerChoice = choice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let aWinner = false;
const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const results = document.querySelector('#results');
let resultContent = document.createElement('p');
let winnerDisplay = document.createElement('p');
let gameWinner;


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
    ++playerScore;
  }else if(roundWinner == "computer"){
    ++computerScore;
  }
  else {
    
    }
}

let btnClick = () => {
  rockBtn.addEventListener('click', () => {
    resetScore();
    playerChoice = "rock";
    playRound();
    score();
    updateResults();
    
  });

  paperBtn.addEventListener('click', () => {
    resetScore();
    playerChoice = "paper";
    playRound();
    score();
    updateResults();
  });

  scissorsBtn.addEventListener('click', () => {
    resetScore();
    playerChoice = "scissors";
    playRound();
    score();
    updateResults();
    
  });

}

let resetScore = () => {
  if(aWinner == true){
    computerScore = 0;
    playerScore = 0; 
    aWinner = false;
    resultContent.remove();
    winnerDisplay.remove();
  }
}

let updateResults = () => {
  if(playerScore < 5 && computerScore < 5){
    resultContent.textContent = ( "Player Score is: " 
    + playerScore 
    + " Computer score is: " 
    + computerScore);
    document.getElementById('results').appendChild(resultContent);
  }
  else if(playerScore == 5 || computerScore == 5){
    resultContent.textContent = ( "Player Score is: " 
    + playerScore 
    + " Computer score is: " 
    + computerScore);
    document.getElementById('results').appendChild(resultContent);
    if(playerScore == 5){
      gameWinner = "The player";
    }
    if(computerScore == 5){
      gameWinner = "The computer";
    }
    winnerDisplay = document.createElement('p');
    winnerDisplay.textContent = (gameWinner + " has won the game. Choose a sign to play again.");
    document.getElementById('results').appendChild(winnerDisplay);
    aWinner = true;
  }
  else {
    resultContent = document.createElement('p');
    resultContent.textContent = ("error");
    document.getElementById('results').appendChild(resultContent);
  }

}


window.onload = function(){
  btnClick();



}


