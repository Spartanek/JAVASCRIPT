const rock_button = document.querySelector('.rock-button');
const scissors_button = document.querySelector('.scissors-button');
const paper_button = document.querySelector('.paper-button');
const win_text = document.querySelector('.rock-button');
const lose_text = document.querySelector('.scissors-button');
const tie_text = document.querySelector('.paper-button');
const variant = [1, 2, 3];

let user = 0;
let comp = 0;

const rockFunction = function () {
  const userChoice = 1;
  let randomEl = variant[Math.floor(Math.random() * variant.length - 1)];
  if (userChoice === randomEl) {
    console.log('Нічия');
  }
};
const scissorsFunction = function () {
  const userChoice = 2;
  let randomEl = variant[Math.floor(Math.random() * variant.length - 1)];
};
const paperFunction = function () {
  const userChoice = 3;
  let randomEl = variant[Math.floor(Math.random() * variant.length - 1)];
};
// TODO: ми це робили швидше в один рядок
rock_button.addEventListener('click', rockFunction);
scissors_button.addEventListener('click', scissorsFunction);
paper_button.addEventListener('click', paperFunction);
