'use strict';

const body = document.querySelector('body');
const message = document.querySelector('.message');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
const guess = document.querySelector('.guess');
const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');

let numberToGuess = Math.ceil(Math.random() * 20);

let scoreValue = 20;
score.textContent = scoreValue;

let highScoreValue = 0;

checkButton.addEventListener('click', () => {
    if (!guess.value) {
        message.textContent = '❌ No number!';
    } else if (Number(guess.value) === numberToGuess) {
        message.textContent = '🎉 Correct Number!';
        number.style.width = '30rem';
        number.textContent = numberToGuess;
        highScoreValue = scoreValue > highScoreValue ? scoreValue : highScoreValue;
        highScore.textContent = highScoreValue;
    } else if (scoreValue > 1) {
        message.textContent = Number(guess.value) > numberToGuess ? '📈 Too high!' : '📉 Too Low!';
        scoreValue -= 1;
        score.textContent = scoreValue;
    } else {
        message.textContent = "💥 You lost the game!"
        scoreValue = 0;
        score.textContent = scoreValue;
    }
});

againButton.addEventListener('click', () => {
    numberToGuess = Math.ceil(Math.random() * 20);
    number.textContent = '?';
    number.style.width = '';
    body.style.backgroundColor = '';
    scoreValue = 20;
    score.textContent = scoreValue;
    guess.value = '';
    message.textContent = 'Start guessing...';
});

