let wins = 0;
let losses = 0;
let draws = 0;
function computerPlay() {
    let num = Math.floor((Math.random() * 3));
    if (num == 2) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection) return "Draw!";

    else if (playerChoice === "paper") {
        if (computerSelection === "scissors") return "Player Loses! Computer Wins :(";
        if (computerSelection === "rock") return "Player Wins! Computer Loses :)";
    } else if (playerChoice === "rock") {
        if (computerSelection === "paper") return "Player Loses! Computer Wins :(";
        if (computerSelection === "scissors") return "Player Wins! Computer Loses :)";
    } else if (playerChoice === "scissors") {
        if (computerSelection === "rock") return;
        if (computerSelection === "paper") return "Player Wins! Computer Loses :)";
    } else {
        return playRound(prompt("Error. You may have mispelled the word. Try again"), computerSelection);
    }

}

function game() {
    let whileBool = true;

    while (whileBool) {

        const playerSelection = prompt("Rock, Paper, or Scissors?")
        const computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result)

        if (result === "Draw!") draws++;
        else if (result === "Player Wins! Computer Loses :)") wins++;
        else if (result === "Player Loses! Computer Wins :(") losses++;
        console.log(`You have ${wins} wins, ${losses} losses, and ${draws} draws`);
        if (losses == 5) {
            console.log("You have lost the set of games");
            whileBool = false;
        } else if (wins == 5) {
            console.log("Congrats! You have won the set of games!");
            whileBool = false;
        }
    }

}


game();

console.log(`You had ${wins} wins, ${losses} losses, and ${draws} draws`);
