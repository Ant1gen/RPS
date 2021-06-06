//rock paper scissors
let playerScore = 0;
let computerScore = 0;
let playerScoreDOM = document.getElementById('playerScore');
let computerScoreDOM = document.getElementById('computerScore');
let resultDOM = document.getElementById('result');
let bottons = document.querySelectorAll('.button');

bottons.forEach(button => button.addEventListener('click', playRound));

function computerPlay()
{
    // a random number from 1 to 3
    let a = Math.floor((Math.random()*9)%3)+1;
    if (a == 1){
        return "rock";
    }
    else if (a == 2){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound ()
{
    let playerSelection = this.id;
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection)
    {
        playerScoreDOM.innerText = 'Player Score:' + playerScore;
        computerScoreDOM.innerText = 'Computer Score:' +computerScore;
        resultDOM.innerText = "Draw";
        return "Draw";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper")
        {
            playerScore += 1;
            playerScoreDOM.innerText = 'Player Score:' + playerScore;
            computerScoreDOM.innerText = 'Computer Score:' +computerScore;
            resultDOM.innerText = "Win";
            if (endGame()){return;}
            return "Win";
        }
    else 
        {
            computerScore += 1;
            playerScoreDOM.innerText = 'Player Score:' + playerScore;
            computerScoreDOM.innerText = 'Computer Score:' +computerScore;
            resultDOM.innerText = "Lost";
            if (endGame()){return;}
            return "Lost";
        }
}

function endGame (){
    if (playerScore == 5 )
    {
        playerScore = 0;
        computerScore = 0;
        resultDOM.innerText = "You Win the Game";
        return true;
    } else if (computerScore == 5)
    {
        playerScore = 0;
        computerScore = 0;
        resultDOM.innerText = "You Lost the Game";
        return true;
    }
    return false;
}