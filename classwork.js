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
const input2 = document.querySelector(".input2Dop");
const text2 = document.querySelector(".sms2");

input2.addEventListener("input", functionMarks);

function functionMarks(e) {
  const valueshka = parseInt(e.target.value);
  // Switch Statement for Grade Conversion:

  // switch (true) { ... }
  // A switch statement is used to determine which letter grade corresponds to the numeric grade stored in valueshka.
  // Using switch (true) allows us to evaluate each case as a boolean expression.
  switch (true) {
    case valueshka >= 90 && valueshka <= 100:
      text2.textContent = "A";
      break;
    case valueshka >= 80 && valueshka <= 90:
      text2.textContent = "B";
      break;
    case valueshka >= 70 && valueshka <= 79:
      text2.textContent = "C";
      break;
    case valueshka >= 60 && valueshka <= 69:
      text2.textContent = "D";
      break;
    case valueshka >= 0 && valueshka <= 59:
      text2.textContent = "F";
      break;
    default:
      text2.textContent = "Invalid grade";
      break;
  }
}
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
const input6 = document.querySelector(".input6Dop");
const text6 = document.querySelector(".sms6");
input6.addEventListener("input", functionColours);
function functionColours(e) {
  const colorValue = e.target.value.trim().toLowerCase();
  // if (colorValue === "червоний") {
  //   text6.textContent = "Стійте";
  // } else if (colorValue === "жовтий") {
  //   text6.textContent = "Приготуйтесь";
  // } else if (colorValue === "зелений") {
  //   text6.textContent = "Стійте";
  // } else {
  //   text6.textContent = "щось не то";
  // }
  switch (colorValue) {
    case "червоний":
      text6.textContent = "Стійте";
      break;
    case "жовтий":
      text6.textContent = "Приготуйтесь";
      break;
    case "зелений":
      text6.textContent = "Стійте";
      break;
    default:
      text6.textContent = "щось не то";
      break;
  }
}
// Абсолютне значення (тернарний оператор):
// Напишіть тернарний оператор, який повертає абсолютне значення числа(-3 = 3, 10 = 10)
const input7 = document.querySelector(".input7Dop");
const text7 = document.querySelector(".sms7");
input7.addEventListener("input", absoluteFunction);
function absoluteFunction(e) {
  // Math.abs();
  const absValue = parseInt(e.target.value);
  const absFinishValue = absValue < 0 ? Math.abs(absValue) : absValue;
  text7.textContent = "Абсолютне значення" + " " + absFinishValue;
}
// Категоризація віку (if...else if):
// Створіть блок if else, яка приймає вік і повертає категорію: "Дитина"(0 - 12), "Підліток"(13 - 19), "Дорослий"(20 - 64), "Пенсіонер"(65 +).
const input8 = document.querySelector(".input8Dop");
const text8 = document.querySelector(".sms8");

input8.addEventListener("input", functionAge);

function functionAge(e) {
  const ageValue = parseInt(e.target.value);
  if (ageValue >= 0 && ageValue <= 12) {
    text8.textContent = "Ти дитина";
  } else if (ageValue >= 13 && ageValue <= 19) {
    text8.textContent = "Ти підліток";
  } else if (ageValue >= 20 && ageValue <= 64) {
    text8.textContent = "Ти дорослий";
  } else if (ageValue >= 65) {
    text8.textContent = "Йой, ти вже пенсіонер";
  } else {
    text8.textContent = "Щось не то";
  }
}
//   The issue in your code is related to the logic of the if and else if statements. The conditions are being checked in a way that once a condition is true, it will execute the corresponding block and skip the rest. This causes incorrect evaluations. Specifically, the problem lies in the ordering of the else if statements. Let's correct this:

// Fix the order of conditions: Ensure that the age ranges do not overlap incorrectly. For instance, the current order means that an age of 15 will be evaluated as a child because it only checks if age > 0 before it checks if age > 13.
// if (ageValue > 0) {
//   text8.textContent("Ти дитина");
// } else if (ageValue > 13) {
//   text8.textContent("Ти підліток");
// } else if (ageValue > 20) {
//   text8.textContent("Ти дорослий");
// } else if (ageValue > 65) {
//   text8.textContent("Йой, ти вже пенсіонер");
// } else {
//   text8.textContent("Щось пішло не за планом");
// }

// Вибір способу оплати (switch case та тернарний оператор):
// Напишіть функцію, яка приймає спосіб оплати(готівка, кредитна картка, PayPal) і суму.Поверніть повідомлення про комісію: 0 % для готівки, 2 % для кредитної картки, 3 % для PayPal.
// Використайте switch case для вибору способу оплати та тернарний оператор для визначення, чи потрібно додавати слово "комісія" до відповіді.
// const formaOstanya = document.querySelector(".formaOstanya");
// const peshka = document.querySelector(".sms9");
// formaOstanya.addEventListener("submit", functionForma);
// function functionForma(e) {
//   e.preventDefault();
//   // Add event listener to each radio button
//   // це, щоб повісити на кожен радіо кнопку, але я не розумію повністю цей запис
//   // як це записати через target
//   const inputy = document.querySelectorAll(".classInput");
//   inputy.forEach((button) => {
//     button.addEventListener("input", functionForFunction);
//   });
//   function functionForFunction(e) {
//     const constanta = e.target.value;
//     // через switch case оприділяти кнопку
//     switch (constanta) {
//       case "A":
//         break;
//       case "B":
//         break;
//       case "C":

//       default:
//         break;
//     }
//   }
//   const inputMoney = e.elements.nameInputMoney;
//   console.log(inputMoney);
// }

// // const inputMoney = document.querySelector(".inputMoney");
// // inputMoney.addEventListener("input", functionMoney);
// // function functionMoney(e) {
// //   const money = e.target.value;
// // }

// // // через тренарний оператор визначити чи треба додавати слово комісія до відповіді
// // constanta.value === "B"
// //   ? peshka.textContent(
// //       "Ви оплатили кредитною картою. Комісія становить" + " " + money * 0.02
// //     )
// //   : constanta.value === "C"
// //   ? peshka.textContent(
// //       "Ви оплатили через PayPal. Комісія становить" + " " + money * 0.03
// //     )
// //   : "ніякої комісії";
