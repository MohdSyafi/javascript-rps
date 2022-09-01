function getComputerChoice(){
    const computerSelection =  Math.floor(Math.random() * 3);
    let computerSelectionString = "";
    switch(computerSelection){
        case 0:
            computerSelectionString = "rock";
        break;

        case 1:
            computerSelectionString = "paper";
        break;

        case 2:
            computerSelectionString = "scissor";
        break;
                
    }

    return computerSelectionString;
}
function decide(playerSelection, computerSelectionString){
    
    const playerSelectionString = playerSelection.toLowerCase();
    let result = ""

    if(playerSelectionString == "rock")
    {

        switch(computerSelectionString){
            case "scissor":
                result = "You win";
            break;
    
            case "paper":
                result = "You lose";
            break;
    
            case "rock":
                result = "You tied";
            break;
                    
        }

    }
    else if(playerSelectionString == "paper")
    {

        switch(computerSelectionString){
            case "rock":
                result = "You win";
            break;
    
            case "scissor":
                result = "You lose";
            break;
    
            case "paper":
                result = "You tied";
            break;
                    
        }

    }
    else if(playerSelectionString == "scissor")
    {

        switch(computerSelectionString){
            case "rock":
                result = "You win";
            break;
    
            case "paper":
                result = "You lose";
            break;
    
            case "scissor":
                result = "You tied";
            break;
                    
        }
    }else{
        result = "invalid user input";
    }

    return result;
}


function playround(){
    const input = prompt("Rock, paper or scissor? : ");
    const computerChoice = getComputerChoice();
    const result = decide(input,computerChoice);
    console.log(`Computer chose ${computerChoice}`);
    console.log(result);
    return result;
}

/* function game(){

let playerPoint = 0;
let computerPoint = 0;

    for(let i = 0 ; i < 5 ; i++){

        const result = playround();
        
        switch(result){
            case "You win":
                playerPoint++;
            break;
    
            case "You lose":
                computerPoint++;
            break;                    
        }

        console.log(`You:${playerPoint}, Computer:${computerPoint}`);
    }

    if(playerPoint>computerPoint){
       console.log("You win the game");        
    }else if(computerPoint>playerPoint){
        console.log("You lose the game")
    }else if(playerPoint==computerPoint){
        console.log("Nobody win the game")
    }
}

game(); */

