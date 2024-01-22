const ComputerChoices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const choice = ComputerChoices[Math.floor(Math.random() * ComputerChoices.length)];
    return choice;
    // console.log(choice);
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ) {
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const results = checkWinner(playerSelection, computerSelection);

    if (results == "Tie") {
        return `You chose ${playerSelection} the computer chose ${computerSelection}: It's a Tie!`
    }
    else if (results == "player") {
        return `${playerSelection} beats ${computerSelection}: You win!!`
    }
    else {
        return `${computerSelection} beats ${playerSelection}: The computer won!!`
    }
}

function getPlayerChoice() {
    let validatedInput = false;

    while(validatedInput == false) {
        const playerChoice = prompt("Enter Rock, paper or scissors:","").toLowerCase();
        if (playerChoice == null) {
            continue;
        }
        const playerChoiceLower = playerChoice.toLowerCase();

        if (ComputerChoices.includes(playerChoiceLower)) {
            validatedInput == true;
            return playerChoiceLower;
        }
    }

}

function game() {
    console.log("Welcome!, here are your results below");
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        // return playRound(playerSelection, computerSelection);
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    
        if (checkWinner(playerSelection,computerSelection) == "player") {
            playerScore++;
        }
        else if (checkWinner(playerSelection,computerSelection) == "computer") {
            computerScore++;
        }
    }
    console.log("-------------------------------------");
    console.log("-------------------------------------");
    if (playerScore > computerScore) {
        console.log(`The player got: ${playerScore} and computer got: ${computerScore}. Player has won the round`);
    }
    else if (playerScore < computerScore) {
        console.log(`The computer got: ${computerScore} and player got: ${playerScore}. Computer has won the round`);
    }
    else {
        console.log(`The player got: ${playerScore} and computer got: ${computerScore}. It's a TIE!`);
    }
    console.log("Game Over!");

}
game();

// console.log(playRound(playerSelection, computerSelection));
