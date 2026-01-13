let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;
let maxRounds = 10;
let playerScoreElement = document.querySelector('.player-score');
let computerScoreElement = document.querySelector('.computer-score');
let showResult = document.querySelector('.show-result');
const resetButton = document.querySelector('.reset-game');
resetButton.disabled = true;
const gameButtons = document.querySelectorAll('.rock-button, .paper-button, .scissor-button');


function pickComputerChoice(){
    let randomMove = Math.random();

    let computerMove = '';

    if(randomMove > 0 && randomMove < 1/3){
        computerMove = 'Paper';
    }
    else if (randomMove >= 1/3 && randomMove < 2/3){
        computerMove = 'Scissor';
    }

    else if (randomMove >= 2/3 && randomMove < 1){
        computerMove = 'Rock';
    }
    return computerMove;
}

function playGame(playerMove){
    if(playedRounds >= maxRounds){
        return;
    }

    const computerMove = pickComputerChoice();

    let result = '';

    if(playerMove === 'Scissor'){
        if(computerMove === 'Rock'){
            result = 'lose';
        }
        else if(computerMove === 'Scissor'){
            result = 'tie!';
        }
        else if(computerMove === 'Paper'){
            result = 'win';
        }

    }
    else if(playerMove === 'Rock'){
        if(computerMove === 'Rock'){
            result = 'tie';
        }
        else if(computerMove === 'Scissor'){
            result = 'win';
        }
        else if(computerMove == 'Paper'){
            result = 'lose';
        }

    }
    else if(playerMove === 'Paper'){
        if(computerMove === 'Rock'){
            result = 'win';
        }
        else if(computerMove === 'Scissor'){
            result = 'lose';
        }
        else if(computerMove === 'Paper'){
            result = 'tie';
        }
    }
    //alert(`You picked ${playerMove}, computer picked ${computerMove}, you ${result}`);
    //document.querySelector('.show-result').textContent = `You picked ${playerMove}, computer picked ${computerMove}, you ${result}`;
    displayPlayersScore(result);
    playedRounds++;
    if(playedRounds === maxRounds){
        showFinalResults();
        resetButton.disabled = false;
        gameButtons.forEach(btn => btn.disabled = true);
        

    }
}


//--------------------------------------------------------------------------------------------


function displayPlayersScore(result){
   
    //let finalResult = '';
    //let showResult = document.querySelector('.show-result');

    //let playerScore = 0;
    //let computerScore = 0;
    
    if(result === 'win'){
        playerScore += 2;
    }

    else if(result === 'lose'){
        computerScore += 2;
    }

    /*if(computerScore > playerScore){
        finalResult = 'You lose!'
    }
    else if (computerScore < playerScore){
        finalResult = 'You win!'
    }
    else if (computerScore === playerScore){
        finalResult = 'You tie'
    }*/

    //showResult.textContent = finalResult;
    playerScoreElement.textContent = `Your score is ${playerScore}`;
    computerScoreElement.textContent = `Computer's score is ${computerScore}`;
}

//-------------------------------------------------------------------------------------------------------------------------


function showFinalResults(){
    let finalResult = '';    

    if(computerScore > playerScore){
        finalResult = 'You lose!'
    }
    else if (computerScore < playerScore){
        finalResult = 'You win!'
    }
    else if (computerScore === playerScore){
        finalResult = 'You tie'
    }
    showResult.textContent = finalResult;
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    playedRounds = 0;
    playerScoreElement.textContent = 'Your score is 0';
    computerScoreElement.textContent = `Computer's score is 0`;
    showResult.textContent = '';
    resetButton.disabled = true;
    gameButtons.forEach(btn => btn.disabled = false);

}


