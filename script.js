//init scores for win logic later

let wins = 0;
let losses = 0;
let draws = 0;



// Logic to return random computer choice
function computerPlay() {
    let num = Math.floor((Math.random() * 3)) + 1;
    if (num == 3) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

//play single round of game
function playRound(playerSelection, computerSelection) {
    console.log(computerSelection);
    if (playerSelection === computerSelection) draws++;
    else if (
        (playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        losses++;
    }
    else {
        wins++
    }
    updateScore();
    console.log(`You have ${wins} wins, ${losses} losses, and ${draws} draws`);
}


//return true if game is over and false if not
function isGameOver() {
    return (wins === 5 || losses === 5) ? true : false;
}


//logic to keep playing rounds til game is over
function game(playerSelection) {

    if (isGameOver()) {
        gameOver();
    } else {
        let computerSelection = computerPlay();
        playRound(playerSelection.toLowerCase(), computerSelection);
    }
    if (isGameOver()) {
        gameOver();
    }



}
const scoreContainer = document.querySelector("#container");
const score = document.createElement('div');

function updateScore() {

    score.classList.add("score");
    score.innerHTML = `You: ${wins} Computer: ${losses}. Draws: ${draws}`;
    scoreContainer.appendChild(score);

}

function winOrLoss(){
    if(score === 5) return "win";
    else return "loss";
    
}


//puts buttons away and then adds a "game over" splash
function gameOver() {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button) => {
        button.style.display = "none";

    });

    if(winOrLoss === "win"){
        const box = document.getElementById('box');
        box.style.display = "block";
    }



}

//init and add event listeners to buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', () => {
    game("rock");
});
paperButton.addEventListener('click', () => {
    game("paper");
});
scissorsButton.addEventListener('click', () => {
    game("scissors");
});









