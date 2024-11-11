function getComputerChoice() {
    let choice = Math.round(Math.random()*2);
    if (choice===0) {
        return "rock";
    }
    else if (choice===1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let hChoice = "rock";
    //prompt("Enter your choice of rock, paper, or scissors");
    if (hChoice.toLowerCase()==="rock" || hChoice.toLowerCase()==="paper" || hChoice.toLowerCase()==="scissors") {
        return hChoice.toLowerCase();
    }
    else {
        return "You did not enter a valid argument";
    }
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    //paper beats rock
    //rock beats scissors
    //scissors beats paper
    //humanchoice wins
    if (humanChoice==="paper" && computerChoice==="rock" || humanChoice==="rock" && computerChoice==="scissors" ||
        humanChoice==="scissors" && computerChoice==="paper" ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    else if (humanChoice===computerChoice) {
        return `You tied! No one wins.`
    }
    else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
} 

function playGame(rounds) {
    for (let i=0; i<rounds; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
    }
    if (humanScore>computerScore) {
        return `You won! The final score was ${humanScore} for you and ${computerScore} for the computer.`
    }
    else {
        return `You lost! The final score was ${computerScore} for the computer and ${humanScore} for you.`
    }
}
//removed code for now: prompt("Enter the number of rounds you'd like to play:")
//console.log(playGame(1));

let rockBtn = document.querySelector("button#rock");
let paperBtn = document.querySelector("button#paper");
let scissorsBtn = document.querySelector("button#scissors");

rockBtn.addEventListener("click", () => {
    let div = document.querySelector("div#results");
    let result = document.createElement("p");
    result.textContent = `The result is: ${playRound("rock", getComputerChoice())}`;
    div.appendChild(result);
})

paperBtn.addEventListener("click", () => {
    let div = document.querySelector("div#results");
    let result = document.createElement("p");
    result.textContent = `The result is: ${playRound("paper", getComputerChoice())}`;
    div.appendChild(result);
})

scissorsBtn.addEventListener("click", () => {
    let div = document.querySelector("div#results");
    let result = document.createElement("p");
    result.textContent = `The result is: ${playRound("scissors", getComputerChoice())}`;
    div.appendChild(result);
})