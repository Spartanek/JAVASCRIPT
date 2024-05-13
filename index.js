"use strict";
// перше завдання
const age = 16.5;
console.log(age);
// друге
// замінив name, бо воно перекреслюється. В інеті написано, що це слова вже зайнято якась "глобальна" зміна
const myName = "Vadimka";
console.log(myName);
// 3 завдання
const isStudent = false;
console.log(isStudent);
// 4 завдання
// цитати в український мові виділяються ще лапками, але javascript цього не дає зробити

const myString =
  "Успіх — це ще не крапка, невдача — це ще не кінець: єдине, що має значення, — це мужність і далі боротися";
console.log(myString);
// 5 завдання
const myNumber = 1000;
console.log(myNumber + 10);
// 6 завдання
const myNull = null;
console.log(myNull);
// 7 завдання
const customerName = prompt("Введи своє ім'я");
const LOGIN_SUCCESS_MESSAGE = "Ласкаво просимо,";
// alert("Ласкаво просимо," + " " + customerName);
alert(LOGIN_SUCCESS_MESSAGE + " " + customerName);
console.log(LOGIN_SUCCESS_MESSAGE + " " + customerName);
// 8 завдання
const agreeConfirmation = confirm("Ви справді готові підтвердити?");
if (agreeConfirmation === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
// 9 завдання
alert("Йой, попереджаємо про небезпеку на сайті");
const agreeDanger = confirm("Підтвердіть небезпеку!");
if (agreeConfirmation === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

// Цікава деталь, якщо в промпті я клацну "відмінити", то буде значення null.
