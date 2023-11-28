'use strict';

// Selecting elements
const current0 = document.getElementById('#current--0');
const current1 = document.getElementById('#current--1');
const total0 = document.getElementById('#score--0');
const total1 = document.getElementById('#score--1');
const dice = document.querySelector(".dice");
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
c
// Starting conditions
current0.textContent = 0
current1.textContent = 1
dice.classList.add('hidden');
let currentScore = 0;
// Rolling dice functionality
btnRoll.addEventListener('click', function(){
// 1. Generating a random dice roll
    const diceRoll = Math.truncate(Math.random()*6)+1;
// 2. Display dice
    dice.classList.remove('hidden');
    dice.scr = `dice-${diceRoll}.png`
// 3. Check for rolled 1: if true, switch to the next player
    if (diceRoll != 1) {
        currentScore += diceRoll;
        current0.textContent = currentScore;
    }
    else {
        
    }
});