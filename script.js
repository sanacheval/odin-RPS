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
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
} 

let rockBtn = document.querySelector("button#rock");
let paperBtn = document.querySelector("button#paper");
let scissorsBtn = document.querySelector("button#scissors");
let div = document.querySelector("div#results");
let result = document.createElement("p");
let reset = document.querySelector("button#reset")
let scores = document.createElement("p");

reset.addEventListener("click", () => {
    div.textContent="";
    humanScore=0;
    computerScore=0;
})

rockBtn.addEventListener("click", () => {
    result.textContent = `${playRound("rock", getComputerChoice())} Computer: ${computerScore}, Human: ${humanScore}`;
    div.appendChild(result);
    scores.textContent="";
    if (humanScore+computerScore===5) {
        showResults();
    }
})

paperBtn.addEventListener("click", () => {
    result.textContent = `${playRound("paper", getComputerChoice())} Computer: ${computerScore}, Human: ${humanScore}`;
    div.appendChild(result);
    scores.textContent="";
    if (humanScore+computerScore===5) {
        showResults();
    }
})

scissorsBtn.addEventListener("click", () => {
    result.textContent = `${playRound("scissors", getComputerChoice())} Computer: ${computerScore}, Human: ${humanScore}`;
    div.appendChild(result);
    scores.textContent="";
    if (humanScore+computerScore===5) {
        showResults();
    }
})

function showResults() {
    if (humanScore>computerScore) {
        scores.textContent = `You won! The final score was ${humanScore} for you and ${computerScore} for the computer.`;
        div.appendChild(scores);
    }
    else {
        scores.textContent = `You lost! The final score was ${computerScore} for the computer and ${humanScore} for you.`;
        div.appendChild(scores);
    }
    humanScore=0;
    computerScore=0;
}
