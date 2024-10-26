const playerElement = document.querySelector('.player');
const obstacleElement = document.querySelector('.obstacle');
const gameField = document.querySelector('.game-container');
const resultText = document.querySelector('.dino-score-text');
let jumping = false;
function AddJumpListener() {
  document.addEventListener('keydown', event => {
    if (event.key === ' ' || event.key === 'ArrowUp') {
      event.preventDefault();
      jumpFunction();
    }
  });
}
let totalScore = 0;
// Колізія, хітбокси
// function monitorCollision() {
//   setInterval(() => {
//     if (isCollision()) {
//       alert('You died');
//     }
//   }, 10);
// }

// function isCollision() {
//   const playerClientRect = playerElement.getBoundingClientRect();
//   const playerL = playerClientRect.left;
//   const playerR = playerClientRect.right;
//   const playerB = playerClientRect.bottom;

//   const obstacleClientRect = obstacleElement.getBoundingClientRect();
//   const obstacleL = obstacleClientRect.left;
//   const obstacleR = obstacleClientRect.right;
//   const obstacleT = obstacleClientRect.top;

//   const xCollision = obstacleR > playerL && obstacleL < playerR;
//   const yCollision = playerB > obstacleT;

//   return xCollision && yCollision;
// }
function jumpFunction() {
  if (jumping) {
    return;
  }
  jumping = true;
  playerElement.classList.add('jump');
  setTimeout(() => {
    playerElement.classList.remove('jump');
    jumping = false;
  }, 1200);
}
function getScore() {
  setInterval(() => {
    totalScore = totalScore + 1;
    resultText.textContent = `Ви пройшли дистанцію у ${totalScore} метрів.`;
  }, 100);
}
// gameField.addEventListener('click', jumpFunction);
function main() {
  AddJumpListener();
  // monitorCollision();
  getScore();
}
// буде викликатися постійно
main();
