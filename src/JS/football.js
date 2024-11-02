const field = document.querySelector('.football-field');
const cursor = document.getElementById('mouse-svg');
const ball = document.getElementById('ball-svg');
const useElementForBall = document.querySelector('.useElementForBall');

// field.addEventListener('mousemove', e => {
//   //     getBoundingClientRect() — це метод, який повертає інформацію про розташування та розмір елемента на сторінці. Коли ви викликаєте цей метод для якогось HTML-елемента, він повертає об'єкт із такими властивостями:

//   // top — відстань від верхнього краю видимої частини вікна браузера до верхнього краю елемента.
//   // left — відстань від лівого краю вікна до лівого краю елемента.
//   // bottom — відстань від верхнього краю вікна до нижнього краю елемента.
//   // right — відстань від лівого краю вікна до правого краю елемента.
//   // width — ширина елемента.
//   // height — висота елемента.
//   // Отримуємо позицію поля на сторінці
//   const fieldRect = field.getBoundingClientRect();
//   // Рахуємо координати курсора відносно поля
//   const x = e.clientX - fieldRect.left - 30;
//   const y = e.clientY - fieldRect.top - 10;

//   // Встановлюємо позицію кастомного курсору
//   ball.style.left = `${x}px`;
//   ball.style.top = `${y}px`;
// });
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

field.addEventListener('mousedown', e => {
  const fieldRect = field.getBoundingClientRect();
  const x = e.clientX - fieldRect.left - 30;
  const y = e.clientY - fieldRect.top - 10;
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
  ball.style.fill = randomHexColorCode();
});
