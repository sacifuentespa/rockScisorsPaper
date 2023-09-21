//Initialize the needed variables for the functions
let choice = null;
let humanScore = 0;
let computerScore = 0;
let round = 0;
const announcement = document.querySelector('#resultAnnouncement h2');
const score = document.querySelector('#resultAnnouncement p');
const resetButton = document.querySelector('#resetButton');
const roundAnnounce = document.querySelector('h4');
const selection = document.querySelector('h5');

//random generation for the computer choice
function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice == 0) {
        return "Rock";
    } else if (numberChoice == 1) {
        return "Scissors";
    }
    return "Paper";
}

//capitalize the choice from choiceSelection function (from legacy code)
function getHumanChoice() {
    let choiceCapitalized;
    choiceCapitalized = choice[0].toUpperCase();
    for (i = 1; i < choice.length; i++) {
        choiceCapitalized = choiceCapitalized + choice[i].toLowerCase();
    }
    return choiceCapitalized;

}

//select the choice from the human and show the result of the round, change score and check who wins
function choiceSelection(e) {
    choice = e.currentTarget.id;
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    round += 1;
    roundAnnounce.textContent = `In the round ${round}`
    selection.textContent = `Human Chose ${humanChoice} - Computer Chose ${computerChoice}`

    const result = checkRound(computerChoice, humanChoice);    
    announcement.textContent = `The round winner is: ${result}`;
    if (result == "Computer"){
        computerScore += 1;
    }else if(result == "Human"){
        humanScore += 1;
    }
    score.textContent = `Computer: ${computerScore}\r\nHuman: ${humanScore}`;
    console.log(`human: ${humanScore} Computer: ${computerScore}`)
    if (computerScore == 5|| humanScore == 5){
        endGame();
    }
}

//Check who win between the computer and the human
function checkRound(computer, human) {
    let computerChoice = computer;
    let humanChoice = human;

    if (computerChoice == humanChoice) {
        return "It's a tie!";
    } else if ((computerChoice == "Rock" && humanChoice == "Scissors") ||
        (computerChoice == "Scissors" && humanChoice == "Paper") ||
        (computerChoice == "Paper" && humanChoice == "Rock")) {
        return "Computer";
    } else {
        return "Human";
    }
}

//Announce the champion
function endGame() {
    const possibleChoices = document.querySelectorAll('button');
    possibleChoices.forEach(function (button) {
        button.removeEventListener('click', choiceSelection);
    });

    if (computerScore > humanScore) {
        announcement.textContent = "Computer Wins!";
    } else {
        announcement.textContent = "Human Wins!";
    }
}

//reset score 
function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    announcement.textContent = '';
    score.textContent = '';
    roundAnnounce.textContent = '';
    selection.textContent = '';
    console.clear();
    game();
     // Restart the game
}

function game() {
    const possibleChoices = document.querySelectorAll('.buttonsDiv button');
    possibleChoices.forEach(function (button) {
        button.addEventListener('click', choiceSelection);
    });
    resetButton.addEventListener('click', resetGame);
}

game()