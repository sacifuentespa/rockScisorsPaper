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

    let choice;
    let choiceCapitalized;

    while (choiceCapitalized != "Rock" && choiceCapitalized != "Scissors" && choiceCapitalized != "Paper") {

        choice = prompt("Choose quickly only Rock, Scissors or Paper!");
        choiceCapitalized = choice[0].toUpperCase();

        for (i = 1; i < choice.length; i++) {
            choiceCapitalized = choiceCapitalized + choice[i].toLowerCase();
        }
    }

    return choiceCapitalized;
}

function checkRound(computer, human) {
    let computerChoice = computer;
    let humanChoice = human;
    console.log(computerChoice)
    console.log(humanChoice)
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

function game() {
    let computerScore = 0;
    let humanScore = 0;

    for (let i = 0; i < 5; i++) {

        let roundResult = checkRound(getComputerChoice(), getHumanChoice());
        console.log("This round goes for: ", roundResult)
        if (roundResult == "Computer") {
            computerScore += 1;
        } else if (roundResult == "Human") {
            humanScore += 1;
        }
    }
    
    if (computerScore > humanScore){
        console.log("Computer wins!");
        return 0;
    }else if (computerScore < humanScore){
        console.log("Human wins!");
        return 0;
    }else {
        console.log("It was a tie!")
    }
    
}

game();