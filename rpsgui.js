let computerScore = 0;
let playerScore = 0;

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

btnRock.addEventListener('click', () => {
    GameRound("rock");    
});
btnPaper.addEventListener('click', () => {
    GameRound("paper");
});
btnScissors.addEventListener('click', () => {
    GameRound("scissors");
});

function GameRound(playerChoice){
    
    // let the computer take its turn and determine a winner
    let computerChoice = ComputerTurn();
    let winner = DetermineWinner(playerChoice, computerChoice);

    // update score
    if (winner == "player") { playerScore++; }
    if (winner == "computer") { computerScore++; }

    // update the status screen
    if (playerScore < 5 && computerScore < 5){ 
        UpdateStatus(playerChoice, computerChoice, winner);
        return; 
    }
    
    GameOver();
    
}

function GameOver(){

    const statusText = document.querySelector('#statusText');
    const scoreText = document.querySelector('#scoreText');
    const controls = document.querySelector('#controls');
    let winner = 0;

    // disable game controls
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    // who won?
    if (playerScore > computerScore) { winner = "The Player"; }
    else { winner = "The Computer"; }
    
    statusText.textContent = 'GAME OVER'
    scoreText.textContent = `${winner} wins!`

    // show new game button
    const resetButton = document.createElement('button');
    resetButton.id = "btnReset"
    resetButton.textContent = "New Game";
    resetButton.addEventListener('click', () => {
        RestartGame();
    });
    controls.appendChild(resetButton);

}

function RestartGame(){

    const statusText = document.querySelector('#statusText');
    const scoreText = document.querySelector('#scoreText');
    const btnReset = document.getElementById('btnReset');
    playerScore = 0;
    computerScore = 0;
    
    // destroy new game button
    btnReset.parentNode.removeChild(btnReset);

    // enable game controls
    btnRock.disabled = false;
    btnPaper.disabled = false;
    btnScissors.disabled = false;

    // reset status & score text
    statusText.textContent = "Choose Rock, Paper or Scissors!";
    scoreText.textContent = "Player: 0 | Computer: 0";    

}

function UpdateStatus(playerChoice, computerChoice, winner) {
    
    const statusText = document.querySelector('#statusText');
    const scoreText = document.querySelector('#scoreText');

    if (winner != "tie") {
        statusText.textContent = `The player chose ${playerChoice}, the computer
            chose ${computerChoice}! The ${winner} wins!`;
    } else {
        statusText.textContent = `The player and the computer BOTH
            chose ${playerChoice}! It's a TIE!`;
    }

    scoreText.textContent = `Player: ${playerScore} | 
        Computer: ${computerScore}`;

}

function ComputerTurn(){

    let randomNumber = 0;
    let choiceToReturn = 0;

    // the computer will randomly choose (0)rock, (1)paper or (2)scissors
    // and then will return the value (rock, paper or scissors)

    randomNumber = Math.floor(Math.random() * Math.floor(3));

    switch (randomNumber){
        
        case 0:
        choiceToReturn = "paper";      
        break;

        case 1:
        choiceToReturn = "rock";
        break;

        case 2:
        choiceToReturn = "scissors";

    }

    return choiceToReturn;

}

function DetermineWinner(playerChoice, computerChoice) {

    let winner = 0;

    if (playerChoice == "paper"){

        switch (computerChoice){

            case "rock":
            winner = "player";
            break;

            case "paper":
            winner = "tie";
            break;

            case "scissors":
            winner = "computer";
        }

        return winner;


    } else if (playerChoice == "rock"){

        switch (computerChoice){

            case "rock":
            winner = "tie";
            break;

            case "paper":
            winner = "computer";
            break;

            case "scissors":
            winner = "player";
        }

        return winner;

    } else if (playerChoice == "scissors") {

        switch (computerChoice){

            case "rock":
            winner = "computer";
            break;

            case "paper":
            winner = "player";
            break;

            case "scissors":
            winner = "tie";
        }

        return winner;
        

    }
}