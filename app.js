const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
let userChoice;
let computerChoice;
let result;



const possibleChoices = document.querySelectorAll('button');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1 // or you can use 3

    if (randomNumber === 1) {
        computerChoice = 'rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'scissor';
    }
    if (randomNumber === 3) {
        computerChoice = 'paper';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
    if (computerChoice === userChoice) {
        result = 'its a draw';
    }
    if (computerChoice === 'rock' && userChoice === 'paper' ) {
        result = 'you win';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors' ) {
        result = 'you lost';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors' ) {
        result = 'you win';
    }
    if (computerChoice === 'paper' && userChoice === 'rock' ) {
        result = 'you lost';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock' ) {
        result = 'you win';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper' ) {
        result = 'you lost';
    }

    resultDisplay.innerHTML = result;
}



// function myFunction ()  {
//
//     if (result === 'you lost') {
//
//
//         document.getElementById('result').style.color = "red";
//
//     }
//
//     else {
//
//          document.getElementById('result').style.color = "green";
//
//     }
//
//     }