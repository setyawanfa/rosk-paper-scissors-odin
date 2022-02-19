function computerPlay() {
    let computer = Math.floor(Math.random() * 2);
    var choice = "";
    switch (computer) {
        case 0:
            choice = "rock"
            break;
        case 1:
            choice = "paper"
            break;
        default:
            choice = "scissors"
    }
    // console.log("computer :" +choice)
    return (choice)
}

function playRound(playerSelection, computerSelection) {

    switch (playerSelection) {
        case "scissors":
            switch (computerSelection) {
                case "rock":
                    return ("lose");
                    break;
                case "paper":
                    return ("win");
                    break;
                case "scissors":
                    return ("draw");
                    break;
            }
            break;
        case "rock":
            switch (computerSelection) {
                case "rock":
                    return ("draw");
                    break;
                case "paper":
                    return ("lose");
                    break;
                case "scissors":
                    return ("win");
                    break;
            }
            break;
        case "paper":
            switch (computerSelection) {
                case "rock":
                    return ("win");
                    break;
                case "paper":
                    return ("draw");
                    break;
                case "scissors":
                    return ("lose");
                    break;

            }
            break;
    }



}


function restartFunc(input) {
    finalInput = input + ' \n Restart?'
    alert(finalInput)
    restartGame();
    // if (alert(finalInput)) {
    //     restartGame()
    // } else {
    //     rock.style.pointerEvents = 'none';
    //     paper.style.pointerEvents = 'none';
    //     scissors.style.pointerEvents = 'none';

    //     buttonRestart = document.createElement('button');
    //     buttonRestart.textContent = "Restart?";
    //     restartDiv.append(buttonRestart);
    //     buttonRestart.addEventListener('click', () => {
    //         restartGame()
    //     })


    // }
}

function endGame() {
    if (playerScore > computerScore) {
        restartFunc("You Win!")
    } else {
        restartFunc("You Lose!")
    }
}


var playerShow = document.getElementById('player-score')
var computerShow = document.getElementById('computer-score')

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let computerScore = parseInt(computerShow.textContent)
let playerScore = parseInt(playerShow.textContent)
const restartDiv = document.getElementsByClassName('.restart');





rock.addEventListener('click', () => {
    onClickGame("rock")
})
paper.addEventListener('click', () => {
    onClickGame("paper")
})
scissors.addEventListener('click', () => {
    onClickGame('scissors')
})



showScores(playerScore, computerScore)








function showScores(playerScore, computerScore) {


    // player = document.createElement('p');
    // computer = document.createElement('p');
    playerShow.textContent = playerScore;
    computerShow.textContent = computerScore;

}

function onClickGame(playerSelection) {
    console.log(playerSelection)
    computerSelection = computerPlay()
    console.log(computerSelection)
    var result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result == "win") {
        playerScore += 1;
    } else if (result == "lose") {
        computerScore += 1;
    } else {
        computerScore += 0;
        playerScore += 0;
    }
    showScores(playerScore, computerScore)

    round = Math.max(computerScore, playerScore)
    if (round == 5) {
        endGame()
    }
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    
    showScores(playerScore, computerScore);
    // rock.style.pointerEvents = 'auto';
    // paper.style.pointerEvents = 'auto';
    // scissors.style.pointerEvents = 'auto';

}