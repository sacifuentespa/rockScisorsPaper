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

    while (choiceCapitalized != "Rock" && choiceCapitalized != "Scissors" && choiceCapitalized != "Paper"){
        
        choice = prompt("Choose quickly only Rock, Scissors or Paper!");
        choiceCapitalized = choice[0].toUpperCase();

        for (i = 1; i < choice.length; i++) {
            choiceCapitalized = choiceCapitalized + choice[i].toLowerCase();
        }
    }
    
    return choiceCapitalized;
}

function checkRound(computer,human){
    let computerChoice = computer;
    let humanChoice = human;
    if(computerChoice==humanChoice){
        return "it's a tie!"
    }else if(computerChoice!=humanChoice){
        return "terminator"
    }
}

console.log(checkRound(getComputerChoice(),getHumanChoice()));
