'use strict';

const player1TotalScore = document.querySelector('#score--0');
const player2TotalScore = document.querySelector('#score--1');

const diceImg = document.querySelector('.dice');
diceImg.classList.add('hidden');

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1CurrentScore = document.querySelector('#current--0');
const player2CurrentScore = document.querySelector('#current--1');

let TotalScores, activePlayer, playing, score;

//Initial Conditions
function startGame() {
  playing = true;
  activePlayer = 0;
  player1CurrentScore.textContent = 0;
  player2CurrentScore.textContent = 0;
  score = 0;
  TotalScores = [0, 0];
  player1TotalScore.textContent = TotalScores[0];
  player2TotalScore.textContent = TotalScores[1];
  diceImg.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
}

startGame();

function changePlayer() {
  score = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = score;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
}

//Roll Dice
rollDiceBtn.addEventListener('click', function () {
  if (playing) {
    let diceNumber = Math.trunc(Math.random() * 6) + 1;
    console.log(diceNumber);
    diceImg.classList.remove('hidden');

    diceImg.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      score += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent = score;
    } else {
      changePlayer();
    }
  }
});

//Hold Score
holdBtn.addEventListener('click', function () {
  if (playing) {
    if (activePlayer === 1) {
      TotalScores[activePlayer] += score;
      player2TotalScore.textContent = TotalScores[activePlayer];
      if (TotalScores[activePlayer] >= 20) {
        player2.classList.add('player--winner');
        player2.classList.remove('player--active');
        playing = false;
        diceImg.classList.add('hidden');
      }
    } else {
      TotalScores[activePlayer] += score;
      player1TotalScore.textContent = TotalScores[activePlayer];
      if (TotalScores[activePlayer] >= 20) {
        player1.classList.add('player--winner');
        player1.classList.add('player--active');
        playing = false;
        diceImg.classList.add('hidden');
      }
    }
    changePlayer();
  }
});

//Restart Game
newBtn.addEventListener('click', startGame);
