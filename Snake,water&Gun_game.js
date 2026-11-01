const choices = ["snake", "water", "gun"];
const totalRounds = 10;

if (confirm("Would you like to play Snake, Water, and Gun?")) {
    let userScore = 0;
    let computerScore = 0;
    let draws = 0;
    let roundsPlayed = 0;
    let gameCancelled = false;

    for (let round = 1; round <= totalRounds; round++) {
        let userChoice;

        while (true) {
            const answer = prompt(
                `Round ${round} of ${totalRounds}\nChoose snake, water, or gun:`
            );

            if (answer === null) {
                gameCancelled = true;
                break;
            }

            userChoice = answer.trim().toLowerCase();
            if (choices.includes(userChoice)) {
                break;
            }

            alert("Please enter snake, water, or gun.");
        }

        if (gameCancelled) {
            break;
        }

        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        let roundMessage;
        roundsPlayed++;

        if (userChoice === computerChoice) {
            draws++;
            roundMessage = "This round is a draw!";
        } else if (
            (userChoice === "snake" && computerChoice === "water") ||
            (userChoice === "water" && computerChoice === "gun") ||
            (userChoice === "gun" && computerChoice === "snake")
        ) {
            userScore++;
            roundMessage = "You win this round!";
        } else {
            computerScore++;
            roundMessage = "The computer wins this round!";
        }

        alert(
            `Round ${round} result:\nYou chose ${userChoice}.\n` +
            `The computer chose ${computerChoice}.\n${roundMessage}\n\n` +
            `Score - You: ${userScore}, Computer: ${computerScore}, Draws: ${draws}`
        );
    }

    let finalMessage;
    if (userScore > computerScore) {
        finalMessage = "Congratulations, you won the game!";
    } else if (computerScore > userScore) {
        finalMessage = "The computer won the game. Better luck next time!";
    } else {
        finalMessage = "The game is a draw!";
    }

    alert(
        `${gameCancelled ? "Game ended early" : "Game over"} after ${roundsPlayed} ` +
        `of ${totalRounds} rounds.\nFinal score - You: ${userScore}, ` +
        `Computer: ${computerScore}, Draws: ${draws}\n${finalMessage}`
    );
}