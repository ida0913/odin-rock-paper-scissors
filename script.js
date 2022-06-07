// init scores
let wins = 0;
let losses = 0;
let draws = 0;

//init result
let result = "";


//init computerSelection
let computerChoice;
//init display Computer image

//function to find if game is over
function isGameOver() {
    return (wins === 5 || losses === 5) ? true : false;
}

//return the final result of game
function finalWinOrLoss() {
    if (wins === 5) return "win";
    else if (losses === 5) return "lose";
    else return "N/A";
}


//init score div inside of #score-container 
const scoreContainer = document.querySelector("#score-container");
const score = document.createElement("div");


//update Score board by updating div created earlier
function updateScoreBoard() {
    score.classList.add("score");
    score.innerHTML = `You: ${wins} Computer: ${losses} Draws: ${draws}`;
    scoreContainer.appendChild(score);
}


//randomly generate rock, paper, or scissors for computer
function computerPlay() {

    let num = Math.floor((Math.random() * 3)) + 1;
    if (num === 3) return "rock";
    else if (num === 2) return "paper";
    else return "scissors";

}


//play a single round of game

function playRound(playerSelection, computerSelection) {

    updateComputerImage();

    if (playerSelection === computerSelection) {
        draws++;
        result = "You Drew!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        losses++;
        result = "You Lost :("
    }
    else {
        wins++;
        result = "You Won!";
    }
    updateScoreBoard();
    updateResult();
}

//logic to keep playing f25
function game(playerSelection) {
    if (isGameOver()) {
        gameOver();
    } else {
        let computerSelection = computerPlay();

        computerChoice = computerSelection;
        playRound(playerSelection.toLowerCase(), computerSelection);
    }
    if (isGameOver()) {
        gameOver();
        //update func w end game splash
    }
}

//update result Div

const resultContainer = document.querySelector("#result");
const resultP = document.createElement("p");

function updateResult() {

    resultP.innerHTML = `${result}`
    resultContainer.appendChild(resultP);

}

//hide element and show final result 
function gameOver() {
    document.getElementById("score-header").innerHTML = `You ${finalWinOrLoss()}!`
    score.innerHTML = `Final Score: You: ${wins} Computer: ${losses} Draws: ${draws}`;
    scoreContainer.appendChild(resultP);
    const allImg = document.querySelectorAll("img");
    allImg.forEach((img) => {
        img.style.display = "none";
    });
    const allP = document.querySelectorAll("p");
    allP.forEach((p) => {
        p.style.display = "none";
    });
    const playAgainBut = document.getElementById("button");
    playAgainBut.style.display = "block";

}
//refresh page to play again
function playAgain() {
    window.location.reload();
}
//update computer selection image

function updateComputerImage() {
    const displayImg = document.getElementById(`comp-${computerChoice}`);
    if (wins == 0 || losses == 0 || draws == 0) {
        displayImg.style.display = "block";
    }
    const otherDisplayImg = document.querySelectorAll(".displayoff");
    otherDisplayImg.forEach((otherImg) => {
        otherImg.style.display = "none";
    });
    displayImg.style.display = "block";
}


//init and add event listeners to imgs

const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playAgainButton = document.getElementById("button");

rockButton.addEventListener("click", () => {
    game("rock");
});

paperButton.addEventListener("click", () => {
    game("paper");
});

scissorsButton.addEventListener("click", () => {
    game("scissors");
});
playAgainButton.addEventListener("click", () => {
    playAgain();
});






