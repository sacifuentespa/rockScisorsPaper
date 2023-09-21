let choice = null;

function getComputerChoice() {
    let numberChoice = Math.floor(Math.random() * 3);
    if (numberChoice == 0) {
        return "Rock";
    } else if (numberChoice == 1) {
        return "Scissors";
    }
    return "Paper";
}

function getHumanChoice() {
    let choiceCapitalized;
    choiceCapitalized = choice[0].toUpperCase();
    for (i = 1; i < choice.length; i++) {
        choiceCapitalized = choiceCapitalized + choice[i].toLowerCase();
    }
    return choiceCapitalized;

}

function choiceSelection(e) {
    choice = e.currentTarget.id;
    const humanChoice = getHumanChoice();
    const result = checkRound(getComputerChoice(), humanChoice);
    console.log(result);
}

function checkRound(computer, human) {
    let computerChoice = computer;
    let humanChoice = human;
    console.log("The computer chooses " + computerChoice)
    console.log("The human chooses " + humanChoice)
    if (computerChoice == humanChoice) {
        return "It's a tie!";
    } else if ((computerChoice == "Rock" && humanChoice == "Scissors") ||
        (computerChoice == "Scissors" && humanChoice == "Paper") ||
        (computerChoice == "Paper" && humanChoice == "Rock")) {
        return "The winner is the Computer";
    } else {
        return "The winner is the Human";
    }
}


function game() {
    const possibleChoices = document.querySelectorAll('button');
    possibleChoices.forEach(function (button) {
        button.addEventListener('click', choiceSelection);
    });
}

game()