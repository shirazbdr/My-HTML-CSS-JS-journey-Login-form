/*let scores = {
    playerScore: 0,
    computerScore: 0,
};

let rounds = {
    playedRounds: 0,
    maxRounds: 10,
};

let elements = {
    playerScoreElement: document.querySelector('.player-score'),
    computerScoreElement: document.querySelector('.computer-score'),
    showResult: document.querySelector('.show-result'),
    resetButton: document.querySelector('.reset-game'),
    gameButtons: document.querySelectorAll('.rock-button, .paper-button, .scissor-button'),
};

function pickComputerChoice(){
    let randomMove = Math.random();
    let computerMove = '';

    if(randomMove > 0 && randomMove <= 1/3){
        computerMove = 'Rock';
    }
    else if(randomMove > 1/3 && randomMove <= 2/3){
        computerMove = 'Paper';
    }
    else if(randomMove > 2/3 && randomMove <= 3/3){
        computerMove = 'Scissor';
    }
    return computerMove;

}

function playGame(playerMove){
    if(rounds.playedRounds >= rounds.maxRounds){
        return;
    }

    let computerMove = pickComputerChoice();

    let result = '';
    if(computerMove === 'Rock'){
        if(playerMove === 'Rock'){
            result = 'tie';
        }
        else if(playerMove === 'Paper'){
            result = 'win';
        }
        else if(playerMove === 'Scissor'){
            result = 'lose';
        }
    }
    else if(computerMove === 'Paper'){
        if(playerMove === 'Rock'){
            result = 'lose';
        }
        else if(playerMove === 'Paper'){
            result = 'tie';
        }
        else if(playerMove === 'Scissor'){
            result = 'win';
        }
    }
    else if(computerMove === 'Scissor'){
        if(playerMove === 'Rock'){
            result = 'win';
        }
        else if(playerMove === 'Paper'){
            result = 'lose';
        }
        else if(playerMove === 'Scissor'){
            result = 'tie';
        }
    }
    displayPlayersScore(result);
    rounds.playedRounds++;
    if(rounds.maxRounds === rounds.playedRounds){
        showFinalResults();
        elements.resetButton.disabled = false;
        elements.gameButtons.forEach(btn => btn.disabled = true);
    }

}

function displayPlayersScore(result){

    if(result === 'win'){
        scores.playerScore += 2;
    }
    else if(result === 'lose'){
        scores.computerScore += 2;
    }

    elements.playerScoreElement.textContent = `Your score: ${scores.playerScore}`;
    elements.computerScoreElement.textContent = `Computer's score: ${scores.computerScore}`;

}

function showFinalResults(){

    let finalResult = '';

    if(scores.playerScore > scores.computerScore){
        finalResult = 'You won!'
    }
    else if(scores.playerScore < scores.computerScore){
        finalResult = 'You lose!'
    }
    else if(scores.playerScore === scores.computerScore){
        finalResult = 'You tied!'
    }

    elements.showResult.textContent = finalResult;

}

function resetGame(){

    scores.playerScore = 0;
    scores.computerScore = 0;
    rounds.playedRounds = 0;
    rounds.maxRounds = 10;
    
    elements.playerScoreElement.textContent = `Your score is ${scores.playerScore}`;
    elements.computerScoreElement.textContent = `Computer's score is ${scores.computerScore}`;
    elements.showResult.textContent = ``;
    elements.resetButton.disabled = true;
    elements.gameButtons.forEach(btn => btn.disabled = false);


}
*/
//This is another way to code rock paper scissor using objects











//You can just uncomment this code to run it
//this is another
/*
let playerScore = 0;
let computerScore = 0;
let playedRounds = 0;
let maxRounds = 10;
let playerScoreElement = document.querySelector('.player-score');
let computerScoreElement = document.querySelector('.computer-score');
let showResult = document.querySelector('.show-result');
const resetButton = document.querySelector('.reset-game');
const gameButtons = document.querySelectorAll('.rock-button, .paper-button, .scissor-button');
resetButton.disabled = true;

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
    }

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
    */