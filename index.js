// 1-е завдання
// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)
const galereya = document.querySelector(".gallery");
document.addEventListener("keydown", (event) => {
  // друге завдання блокується
  // event.preventDefault();
  // чи до key підв'язуватись
  // overflow - не працює
  // або тільки через scrollLeft або через scrollRight?
  if (event.code === "ArrowRight") {
    galereya.scrollLeft += 20;
  }
  if (event.code === "ArrowLeft") {
    galereya.scrollLeft -= 20;
  }
});
// 2-е завдання
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.
const deleteBoxes = function () {
  divForModifying.innerHTML = "";
};
const createBoxes = function (amount) {};
const inputValueFunction = function (event) {
  const value = event.target.value;
  createBoxes(value);
};
// додав клас до інпуту, думаю, це не порушує правил
const input = document.querySelector(".input");
input.addEventListener("input", inputValueFunction);

// якось по-іншому треба звертатись до data-action
const divForModifying = document.getElementById("boxes");
const createButton = document
  .querySelector('[data-action="render"]')
  .addEventListener("click", createBoxes);

const deletingButton = document
  .querySelector('[data-action="destroy"]')
  .addEventListener("click", deleteBoxes);

// При натисканні на кнопку Очистити, колекція елементів очищається.

// Кожен створений div:

// Має випадковий rgb колір фону

// Розміри найпершого div — 30px на 30px

// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.
