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
                return "Win";
            }
    else 
        {
        return "Lost";
        }
}
let computerSelection = computerPlay();
//let playerInput = "rock";

function game()
{
playerScore = 0;
computerScore = 0;
    for (i=0; i <5; i++)
    {
        let playerInput = window.prompt("Chose Rock Paper or Scissors");
        let roundResult = playRound(playerInput,computerPlay());
        console.log(roundResult);
        if ( roundResult == "Win")
        {
            playerScore += 1;
        }
        else if ( roundResult == "Lost")
        {
            computerScore += 1;
        }
    }
    if (playerScore > computerScore)
    {
        return "Player Win";
    }
    else if (playerScore < computerScore)
    {
        return "Computer Win";
    }
    else 
    { 
        return "Draw"
    }
}
