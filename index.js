//1) Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки
const button1 = document.querySelector(".knopochka");
const showMessageFunction = (e) => alert("Hello World!");
// тобто зміна виступає назвою функції.
// Щось if не вдалось прописати
button1.addEventListener("click", showMessageFunction);
//2)Створіть програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.
// const input = document.getElementById("guessField");
// const peshka = document.getElementById("guessResult");
// input.addEventListener("input", checkGuess);
// function checkGuess(e) {
//   const inputValue = Number(e.target.value);
//   const random = Math.floor(Math.random() * 3);
//   console.log(random);
//   if (inputValue === random) {
//     peshka.textContent = "Ви вгадали!";
//   } else {
//     peshka.textContent = "Ви не вгадали!";
//   }
// }
// 2-й варіант
const input = document.getElementById("guessField");
const peshka = document.getElementById("guessResult");
const button = document.getElementById("checkButton");

button.addEventListener("click", checkGuess);

function checkGuess(e) {
  // мабуть е ставити не треба, бо я звертаюсь до інпута
  const inputValue = Number(input.value);
  const random = Math.floor(Math.random() * 101);
  console.log(random);
  if (inputValue === random) {
    peshka.textContent = "Ви вгадали!";
  } else {
    peshka.textContent = "Ви не вгадали!";
  }
}
// 3)Створіть програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.
//щоб воно змінювалось коли буде клік
let i = 0;
const clickingPeshka = document.querySelector(".showClick");
window.addEventListener("click", showClickFunction);
function showClickFunction() {
  i++;
  clickingPeshka.textContent = `Ти клацнув цілих ${i} разів, так тримати!`;
}
// 4) Напишіть функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.

// const applyCallbackToEachElement = (arr, callback) => {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     callback(element);
//   }
// };
// const squareCallback = function (element) {
//   return element * 2;
// };
// const arr = [1, 2, 3, 4, 5];

// const result = applyCallbackToEachElement(arr, squareCallback);
// console.log(result); // [1, 4, 9, 16, 25]
// Взагалі не зрозуміло, роблю по крокам
// 3) знаходить функцію, яка в своїх параметрах містить arr та ф-цію callback, що буде застосовуватись до кожного елементу списку
// це ф-ція вищого порядку
const applyCallbackToEachElement = (arr, callback) => {
  // 4) створив пустий список result, щоб його наповнити
  const result = [];
  // 5) перебирає елементи списку arr
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    //  6) Застосовує зворотний виклик: callback(element) викликає функцію зворотного виклику з element як аргумент. 9) Результат виклику цієї функції потім надсилається в масив result. Себто наступний рядок коду такий же як і колбек
    // result.push(squareCallback(element));
    result.push(callback(element));
  }
  // 10) повертає остаточний результат
  return result;
};
// 7) бачить ф-цію яку викликали через кол бек і замість b ставить element
// це кол бек ф-ція
const squareCallback = function (b) {
  // 8) робить дії
  return Math.pow(b, 2);
};
// 1) бачить константу зі списком
const arr = [1, 2, 3, 4, 5];
// 2) бачить константу, яка підв.язана на функцію, яка має в собі два аргументи, arr та squareCallback
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [2, 4, 6, 8, 10]
//5)Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = callback(price, discount);
  return discountedPrice;
};

const showDiscountedPrice = function (a, b) {
  return a - (a / 100) * b;
};

const result5 = calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
console.log(result5);
