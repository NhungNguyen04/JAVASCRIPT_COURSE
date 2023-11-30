'use strict';

// Selecting elements
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const total0 = document.getElementById('score--0');
const total1 = document.getElementById('score--1');
const dice = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
current0.textContent = 0;
current1.textContent = 0;
total0.textContent = 0;
total1.textContent = 0;
dice.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function(){
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
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        activePlayer = activePlayer === 0?1:0;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
        currentScore = 0;
    }
});