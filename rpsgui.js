let computerScore = 0;
let playerScore = 0;

const btnRock = document.querySelector('#btnRock');
const btnPaper = document.querySelector('#btnPaper');
const btnScissors = document.querySelector('#btnScissors');

// add event listeners
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

    UpdateStatus(playerChoice, computerChoice, winner);
    
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

    // initialize variables
    let randomNumber = 0;
    let choiceToReturn = 0;

    // the computer will randomly choose (0)rock, (1)paper or (2)scissors
    // and then will return the value (rock, paper or scissors)

    // pick a number between 0 and 2
    randomNumber = Math.floor(Math.random() * Math.floor(3));

    // 0 = paper, 1 = rock, 2 = scissors
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

    // return the computer's choice
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