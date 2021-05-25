//rock paper scissors
function computerPlay()
{
    let a = Math.floor((Math.random()*9)%3)+1;
    if (a == 1){
        return "Rock";
    }
    else if (a == 2){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound (playerSelection, computerSelection)
{
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase())
    {
        return "Draw";
    }
    else if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS" ||
        playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK" ||
        playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER")
            {
                return "You Win! " + playerSelection + " beats " + computerSelection;
            }
    else 
        {
        return "You Lost " + computerSelection + " beats " + playerSelection;
        }
}
let computerSelection = computerPlay();
let playerSelection = "rock";

function game()
{
    
}
