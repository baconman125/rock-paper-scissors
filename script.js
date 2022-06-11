let computerSelection = "";
let playerSelection = "";
let wins =0;
let computer_wins =0;
let playerNum = 0;
let computerNum = 0;
let result = 0;

const Rock = document.getElementById('rock');
const Paper = document.getElementById('paper');
const Scissors = document.getElementById('scissors');

Rock.addEventListener("click", function (){
    playerSelect(1);
});

Paper.addEventListener("click", function (){
    playerSelect(2);
});

Scissors.addEventListener("click", function (){
    playerSelect(3);
});

function playerSelect(number){
    playerNum = number;
    computerNum = Math.floor(Math.random() * 3) + 1; 
    playerSelection = selection(playerNum);
    computerSelection = selection(computerNum);
    const playerPickText = document.querySelector(".player-pick");
    playerPickText.textContent = `${playerSelection}`;
    const Comp = document.querySelector(".robot-pick");
    Comp.textContent = `${computerSelection}`;
    playRound(playerNum,computerNum);

}
function selection(select) {           
    switch(select) {
        case 1:
            return("Rock");
        case 2:
            return("Paper");
        case 3:
            return("Scissors");
    }
}
function resultFinal(num){
    switch(num){
        case 1:
            document.querySelector('.result').textContent = `Player Scores! ` +`${playerSelection}` + " beats " + `${computerSelection}`;
            break;
        case 0:
            document.querySelector('.result').textContent = "TIE!"
            break;
        case -1:
            document.querySelector('.result').textContent = "Computer Scores! " + `${computerSelection}` + " beats "+ `${playerSelection}`;
            break;
    }
}
function playRound(num1,num2){
    switch(num1-num2){
        case -1:
        case 2:
            result = -1;
            computer_wins++;
            break;
        case 0:
            result = 0;
            break;
        case 1:
        case -2:
            result = 1;
            wins++;
            break;

    }
    resultFinal(result);
    document.querySelector('.num-player-score').textContent = `${wins}`;
    document.querySelector('.num-computer-score').textContent = `${computer_wins}`;
    if(wins === 5){
        document.querySelector('.win-or-lose').textContent = "YOU WIN! REFRESH THE PAGE TO PLAY AGAIN";
        disableBtn(true);
        
        
    }
    else if(computer_wins === 5){

        document.querySelector('.win-or-lose').textContent = "YOU LOSE! REFRESH THE PAGE TO PLAY AGAIN";
        disableBtn(true);
        
        
    }

}
function disableBtn(state){
    document.getElementById("rock").disabled = state;
    document.getElementById("paper").disabled = state;
    document.getElementById("scissors").disabled = state;
}

