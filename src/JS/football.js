const field = document.querySelector('.football-field');
const cursor = document.getElementById('mouse-svg');
const ball = document.getElementById('ball-svg');
const useElementForBall = document.querySelector('.useElementForBall');
field.addEventListener('mousemove', e => {
  //     getBoundingClientRect() — це метод, який повертає інформацію про розташування та розмір елемента на сторінці. Коли ви викликаєте цей метод для якогось HTML-елемента, він повертає об'єкт із такими властивостями:

  // top — відстань від верхнього краю видимої частини вікна браузера до верхнього краю елемента.
  // left — відстань від лівого краю вікна до лівого краю елемента.
  // bottom — відстань від верхнього краю вікна до нижнього краю елемента.
  // right — відстань від лівого краю вікна до правого краю елемента.
  // width — ширина елемента.
  // height — висота елемента.
  // Отримуємо позицію поля на сторінці
  const fieldRect = field.getBoundingClientRect();
  // Рахуємо координати курсора відносно поля
  const x = e.clientX - fieldRect.left;
  const y = e.clientY - fieldRect.top + 10;

  // Встановлюємо позицію кастомного курсору
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
ball.addEventListener('mouseover', () => {
  useElementForBall.setAttribute(
    'href',
    '../assets/svg/symbol-defs.svg#icon-new-icon'
  );
});
