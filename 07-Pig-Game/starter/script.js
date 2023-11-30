'use strict';

// Selecting elements
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const total0 = document.getElementById('score--0');
const total1 = document.getElementById('score--1');
const dice = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];
let playing = true;
// Starting conditions
function startGame() {
    current0.textContent = 0;
    current1.textContent = 0;
    total0.textContent = 0;
    total1.textContent = 0;
    currentScore = 0;
    activePlayer = 0;
    const scores = [0, 0];
    playing = true;

    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

startGame();
// Switch player function
function switchPlayer () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0?1:0;
    currentScore = 0;
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
}

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
    if (playing) {
    // 1. Generating a random dice roll
        const diceRoll = Math.trunc(Math.random()*6)+1;
        console.log(diceRoll);
    // 2. Display dice
        dice.classList.remove('hidden');
        dice.src = `dice-${diceRoll}.png`;
    // 3. Check for rolled 1: if true, switch to the next player
        if (diceRoll !== 1) {
            currentScore += diceRoll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            switchPlayer();
        }
    }
});

// Hold functionality
btnHold.addEventListener('click', function(){
// 1. Add current score to total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
// 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
    // Finish the game
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.add('player--winner');
        document
            .querySelector(`.player--${activePlayer}`)
            .classList.remove('player--active');
        playing = false;
    }
    else {
    // Switch to the next player
        switchPlayer();
    }
});

// Restarting the game
btnNew.addEventListener('click', function() {
    startGame();
});