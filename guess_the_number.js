let RandomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let preGuess = [];
let NumGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}


function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Plz enter a valid Number')
    }
    else if (guess < 1) {
        alert('Plz enter a number more then 1')
    }
    else if (guess > 100) {
        alert('Plz enter a number less then 100')
    }
    else {
        preGuess.push(guess)
        if (NumGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${RandomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === RandomNumber) {
        displayMessage(`You guess it right`)
        endGame()
    }
    else if (guess < RandomNumber) {
        displayMessage(`Your guess no is TOOOO low`)
    }
    else if (guess > RandomNumber) {
        displayMessage(`Your guess no is TOOOO high`)
    }
}


function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} - `
    NumGuess++;
    remaining.innerHTML = `${11 - NumGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.innerHTML = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p);
    playGame = false;
    newGame();
}


function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        RandomNumber = parseInt(Math.random() * 100 + 1)
        preGuess = []
        NumGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - NumGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    });
}