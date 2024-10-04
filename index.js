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
// Створи функцію destroyBoxes(), яка очищає div#boxes.
// При натисканні на кнопку Очистити, колекція елементів очищається.
const deleteBoxes = function () {
  divForModifying.innerHTML = "";
};
// const createDivFunction = function () {
//   const element = document.createElement("div");
//
//   element.style.backgroundColor = randomColor;
//   divForModifying.append(element);
// };
const createBoxes = function (amount, callback) {
  const numBoxes = Number(amount);
  for (let i = 0; i < numBoxes; i++) {
    // Кожен створений div:
    let basicWidthandHeight = 10;
    const element = document.createElement("div");
    // element.style.width = basicWidthandHeight + 30;
    // element.style.length = basicWidthandHeight + 30;
    // Взагалі неправильно писав
    element.style.width = `${basicWidthandHeight + 30}px`;
    element.style.height = `${basicWidthandHeight + 30}px`;
    element.textContent = `Box ${i + 1}`;
    // const randomColor = Math.floor(Math.random() * (max + 1));
    // вимагає 3 палітри r-red, g-green, b-blue
    // Має випадковий rgb колір фону
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
    element.style.backgroundColor = randomColor;
    divForModifying.append(element);
  }
};
let inputValue = 0;
const inputValueFunction = function (event) {
  inputValue = event.target.value;
};
// додав клас до інпуту, думаю, це не порушує правил
const input = document.querySelector(".input");
input.addEventListener("input", inputValueFunction);

// якось по-іншому треба звертатись до data-action
const divForModifying = document.getElementById("boxes");
const createButton = document
  .querySelector('[data-action="render"]')
  .addEventListener("click", () => {
    createBoxes(inputValue);
  });

const deletingButton = document
  .querySelector('[data-action="destroy"]')
  .addEventListener("click", deleteBoxes);

// Розміри найпершого div — 30px на 30px

// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px
