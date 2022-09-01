let playerScore =0;
let compScore =0;
let roundCount =0;
let buttons = document.querySelectorAll('.selection');

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

function playgame(e){
    roundCount ++;
    const playerSelection = e.target.getAttribute("data-key")
    const resultElement = document.querySelector(".result-text");
    const compChoiceText = document.querySelector(".choice-text");
    const scoreText = document.querySelector(".score-text");
    const overText = document.querySelector(".over-text");

    const computerChoice = getComputerChoice();
    const result = decide(playerSelection,computerChoice);

    switch(result){
        case "You win":
            playerScore++;
            break;
        case "You lose":
            compScore++;
            break;
    }
 
    overText.textContent = ``;
    compChoiceText.textContent = `Computer chose ${computerChoice}`;
    resultElement.textContent = result;
    scoreText.textContent = `Player: ${playerScore} Computer:${compScore}`;
    
    if(roundCount == 5){
        if(playerScore>compScore){
            overText.textContent = `Game over, you win `;
            playerScore = 0;
            compScore = 0;
            roundCount = 0;

        }    
        else if (compScore>playerScore){
            overText.textContent = `Game over, computer win `;
            playerScore = 0;
            compScore = 0;
            roundCount = 0;
        }      
        else{
            overText.textContent = `Game over, nobody win`;
            playerScore = 0;
            compScore = 0;
            roundCount = 0;
        }
           
    }
}

buttons.forEach(btn => btn.addEventListener("click",playgame));


