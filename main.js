function computerPlay(){
    let computer = Math.floor(Math.random()*2);
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
    return(choice)
}

function playRound(playerSelection,computerSelection){
    result= ""
    switch (playerSelection){
        case "scissors":
            // if (computerSelection=="rock"){
            //     result = "lose";
            // }else if (computerSelection=="paper"){
            //     result = "win";
            // }
            // else {
            //     result=
            // }
        switch (computerSelection){
                case "rock":
                    result = "lose";
                    break;
                case "paper":
                    result = "win";
                    break;
                case "scissors":
                    result = "draw";
                    break;
            }
        break;
        case "rock":
            switch (computerSelection){
                case "rock":
                    result = "draw";
                    break;
                case "paper":
                    result = "lose";
                    break;
                case "scissors":
                    result = "win";
                    break;
            }
            break;
        case "paper":
            switch (computerSelection){
                case "rock":
                    result = "win";
                    break;
                case "paper":
                    result = "draw";
                    break;
                case "scissors":
                    result = "lose";
                    break;

            }
            break;
    }
    // console.log(result)
    return (result);

}

for (i=0;i<5;i++){
    // const playerSelection = window.prompt("Player selection for Paper,rock, scissor :");
    playerSelection = playerSelection.toLowerCase();
    // const playerSelection = "scissors";
    console.log("player : "+playerSelection)
    const computerSelection = computerPlay();
    const result = playRound(playerSelection,computerSelection)
    if (result=="win"){
        console.log("Player win")
    }
    else if (result=="lose"){
        console.log("Computer win")
    }
    else{
        console.log("Draw")
    }
}
// const playerSelection = "rock";
// console.log("player : "+playerSelection)
// const computerSelection = computerPlay();




// for (let i=0;i<5;i++){
//     computerPlay
// }


