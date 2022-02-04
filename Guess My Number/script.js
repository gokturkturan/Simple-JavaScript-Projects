'use strict';

let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function backGroundColor(colorCode) {
  document.querySelector('body').style.backgroundColor = colorCode;
}

function showNumberArea(numOrQmark) {
  document.querySelector('.number').textContent = numOrQmark;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is no input
  if (!guess) {
    displayMessage('⛔No Number!');
  } else {
    // when input not in range (1-20)
    if (guess > 20 || guess < 1) {
      displayMessage('Choose a Number between the 1 and 20');
    } else {
      // when player wins
      if (guess === number) {
        displayMessage('✅Correct Number!');
        backGroundColor('#60b347');
        showNumberArea(number);
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
      } else if (guess !== number) {
        displayMessage(guess < number ? '📉Too Low!' : '📈Too High!');
        score--;
        if (score === 0) {
          displayMessage('😥Game Over');
          backGroundColor('red');
          showNumberArea(number);
        }
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.score').textContent = score;
  backGroundColor('#222');
  displayMessage('Start guessing...');
  showNumberArea('?');
  document.querySelector('.guess').value = '';
});
