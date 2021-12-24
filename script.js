

function playRound (playerSelection, computerSelection){
    console.log("Your selection is " + playerSelection, "\nComputer selection is " + computerSelection);
    if (playerSelection == computerSelection){
        console.log("tie");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("you win, rock beats scissors");
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("you win, paper beats rock");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("you win, scissors beats paper");
    }
    else{
        console.log("you lose")
    }
}


// function that returns rock paper or scissors
function computerPlay(){
   val = Math.floor(Math.random() * 3);
   items = ["rock", "paper", "scissors"];
   val = items[val];
   return val;
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));