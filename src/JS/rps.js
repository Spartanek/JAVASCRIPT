const rockButton = document.querySelector('.rock-button');
const scissorsButton = document.querySelector('.scissors-button');
const paperButton = document.querySelector('.paper-button');
const win_text = document.querySelector('.rps-win-text');
const lose_text = document.querySelector('.rps-lose-text');
const tie_text = document.querySelector('.rps-tie-text');
const result_text = document.querySelector('.rps-resulting-text');
// FIXME: мабуть не найкраще рішення давати українські слова в масив
const variant = ['ножиці', 'камінь', 'папір'];
// тут не треба ставити взагалі зміну тексту
let user = 0;

let comp = 0;

let tie = 0;

const playGame = function (userChoice) {
  const randomEl = variant[Math.floor(Math.random() * variant.length)];
  result_text.textContent = `Комп'ютер обрав ${randomEl}`;
  if (userChoice === randomEl) {
    console.log('Нічия'); // Tie
    tie++;
    tie_text.textContent = `Перемогла дружба: ${tie}`;
  } else if (
    (userChoice === 'ножиці' && randomEl === 'папір') ||
    (userChoice === 'камінь' && randomEl === 'ножиці') ||
    (userChoice === 'папір' && randomEl === 'камінь')
  ) {
    console.log('Ви перемогли');
    // зміна буде додавати до себе зміну і замінюватисб новою з одиницею
    user++;
    win_text.textContent = `Гравець переміг: ${user}`;
  } else {
    console.log('Ви програли');
    comp++;
    lose_text.textContent = `Комп'ютер переміг: ${comp}`;
  }
};
// TODO: ми це робили швидше в один рядок
// Event listeners for each button
rockButton.addEventListener('click', () => playGame('камінь'));
scissorsButton.addEventListener('click', () => playGame('ножиці'));
paperButton.addEventListener('click', () => playGame('папір'));
// тут також не треба, бо немає динаміки
