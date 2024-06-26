// Перевірка пароля (if...else):
// створіть блок if else який приймає пароль і перевіряє його на відповідність наступним критеріям:
// "Довжина": Довжина не менше 8 символів
// Вивести console.log() "Пароль прийнято" або відповідне повідомлення про помилку.

// Алгоритм вирішення задачі:
// 1. Створити input
// 2. Знайти цей input
const input = document.getElementById("password");
// 3. Додати слухач подій
input.addEventListener("input", functionSuper);
function functionSuper(e) {
  // (знайти значення input)
  const value = input.value;
  // 4. if else  перевірити довжину value
  value.length >= 8
    ? console.log("Пароль прийнято")
    : console.log("Пароль не прийнято");
}
// Конвертер оцінок (switch case):
// Створіть switch case, який конвертує числову оцінку(0 - 100) у літерну(A, B, C, D, F).Використайте такі діапазони:
//     A: 90 - 100, B: 80 - 89, C: 70 - 79, D: 60 - 69, F: 0 - 59.

// Визначення сезону (if...else if):
// Напишіть if else, яка приймає номер місяця(1 - 12) і повертає, до якого сезону він належить.
// const input3 = document.querySelector(".input3Dop");
// const text3 = document.querySelector(".sms3");
// чи має в даному випадку давати івент лісенер на інпут?
// const changeValue = parseInt(input3.value);
// if (changeValue === 1 || changeValue === 2 || changeValue === 12) {
//   text3.textContent = "Це зима";
// } else if (changeValue === 3 || changeValue === 4 || changeValue === 5) {
//   text3.textContent = "Це весна";
// } else if (changeValue === 6 || changeValue === 7 || changeValue === 8) {
//   text3.textContent = "Йой, літо надворі";
// } else {
//   text3.textContent = "Ну, осінь, також непогано";
// }
const input3 = document.querySelector(".input3Dop");
const text3 = document.querySelector(".sms3");
input3.addEventListener("input", functionSeason);
function functionSeason(e) {
  const changeValue = parseInt(input3.value);
  if (changeValue === 1 || changeValue === 2 || changeValue === 12) {
    text3.textContent = "Це зима";
  } else if (changeValue === 3 || changeValue === 4 || changeValue === 5) {
    text3.textContent = "Це весна";
  } else if (changeValue === 6 || changeValue === 7 || changeValue === 8) {
    text3.textContent = "Йой, літо надворі";
  } else if (changeValue === 9 || changeValue === 10 || changeValue === 11) {
    text3.textContent = "Ну, осінь, також непогано";
  } else {
    text3.textContent = "Йой, щось не то";
  }
}

// Калькулятор знижки (тернарний оператор):
// Створіть тернарний оператор, який обчислює знижку на товар.Якщо сума покупки більше 1000, знижка 10 %, інакше 5 %.Використайте тернарний оператор.
const input4 = document.querySelector(".input4Dop");
const text4 = document.querySelector(".sms4");
input4.addEventListener("input", functionTren);
function functionTren(e) {
  const changeValue2 = parseInt(input4.value);
  // чого не працює
  text4.textContent =
    changeValue2 > 1000
      ? changeValue2 - changeValue2 * 0.1
      : changeValue2 - changeValue2 * 0.05;
  // changeValue2 > 1000
  //   ? text4.textContent(changeValue2 - changeValue2 * 0.1)
  //   : text4.textContent(changeValue2 - changeValue2 * 0.05);
}
// НЕ ВИХОДИТЬ
// Перевірка року на високосність (if...else):
// Створіть блок if else, який перевіряє, чи є рік високосним. Рік високосний, якщо він ділиться на 4, але не на 100, або якщо він ділиться на 400.
const input5 = document.querySelector(".input5Dop");
const text5 = document.querySelector(".sms5");
input5.addEventListener("input", functionYear);
function functionYear(e) {
  const eventValue = parseInt(e.target.value);
  if (
    (eventValue % 4 === 0 && eventValue % 100 !== 0) ||
    eventValue % 400 === 0
  ) {
    text5.textContent = "рік високосний";
  } else {
    text5.textContent = "мене не проведеш, рік не є високосним";
  }
}
// Світлофор (if...else if та switch case):
// Напишіть два варіанти (з використанням if...else if та switch case),  приймає колір світлофора і повертає дію ("Йдіть", "Приготуйтесь", "Стійте").

// Абсолютне значення (тернарний оператор):
// Напишіть тернарний оператор, який повертає абсолютне значення числа(-3 = 3, 10 = 10)

// Категоризація віку (if...else if):
// Створіть блок if else, яка приймає вік і повертає категорію: "Дитина"(0 - 12), "Підліток"(13 - 19), "Дорослий"(20 - 64), "Пенсіонер"(65 +).

// Вибір способу оплати (switch case та тернарний оператор):
// Напишіть функцію, яка приймає спосіб оплати(готівка, кредитна картка, PayPal) і суму.Поверніть повідомлення про комісію: 0 % для готівки, 2 % для кредитної картки, 3 % для PayPal.
// Використайте switch case для вибору способу оплати та тернарний оператор для визначення, чи потрібно додавати слово "комісія" до відповіді.
