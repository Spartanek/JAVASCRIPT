// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.
const logItems = function (array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1}:>> , ${array[i]}`);
    //   чи мені треба якось в return виносить?
    // const result = ;
    // return result;
  }
};
logItems(["Mango", "Poly", "Ajax", "Andre", "Amanda", "Pamela"]);
// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// (в рядку будуть тільки слова і прогалини) як це через if зробити?
// const messagePropmt = prompt("Впишіть слова для гравіювання");
// ТРЕБА ПОСТІЙНО ПЕРЕВОДИТИ PROMPT У NUMBER
// const numberPropmt = prompt('Впишіть ціну для гравіювання одного слова');
// typeof pricePerWord == "number" або  !isNaN(pricePerWord)
const calculateEngravingPrice = function (message, pricePerWord) {
  if (
    //   як перевірити, щоб в message не було number
    //   typeof message === "string"
    //   &&
    !message.includes(",", "-", "?", "!", ";", "'") &&
    typeof pricePerWord === "number" &&
    !isNaN(pricePerWord)
  ) {
    const messageSplit = message.split(" ");
    console.log(`список слів :>> ${messageSplit}`);
    // const smallMath = message.length * pricePerWord;
    // return smallMath;
    return messageSplit.length * pricePerWord;
  }
  //  як правильно користуватись return чи біля нього повідомлення залишати чи як?
  return "не може бути повернута через некоректність";
};
// console.log(`ціна: ${calculateEngravingPrice(messagePropmt, numberPropmt)}`);
// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

const findLongestWord = function (string) {
  let maxCharacter = "";
  const splited = string.split(" ");
  for (let i = 0; i < splited.length; i++) {
    let element = splited[i];
    if (element.length > maxCharacter.length) {
      maxCharacter = element;
    }
  }
  return maxCharacter;
};
const theLongestWord = findLongestWord("Anna Artem Vadym Elizabeth");
console.log(theLongestWord);
// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.
const formatString = function (string) {
  if (string.length <= 40) {
    return `Нічого не змінилось ${string}`;
  }
  if (string.length > 40) {
    //    чи краще splice?
    //   Щось не виходило
    // let a = string.slice(0, 40);
    // a.shift("...");
    // return a;
    //   а так чогось вийшло
    return string.slice(0, 40) + "...";
  }
  return "Щось пішло не так";
};
console.log(
  formatString("Я пишу дууужее дооооовгииииий теееекст ну прям дуууже")
);
// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.
console.log("Ого-го подивіться які у нас SpAm та, навіть, SAle");
const checkForSpam = function (message) {
  const changesToMessage = message.split(" ");
  for (let i = 0; i < changesToMessage.length; i++) {
    const element = changesToMessage[i].toLowerCase();

    if (element === "sale" || element === "spam") {
      return false; // Return true if no "sale" or "spam" is found in any word
    }
    //   return true; не на тому місці
  }
  return true; // Return true if no "sale" or "spam" is found in any word
};
const spamFunction = function (params) {
  if (params === true) {
    //   чого воно не працювало коли були return?
    console.log("реклама нормальна");
  }
  //   чого воно не працювало коли були return?
  else {
    console.log("реклама зі спамом");
  }
};
spamFunction(checkForSpam("Ого-го подивіться які у нас SpAm та, навіть, SAle"));
spamFunction(checkForSpam("Це безпечна реклама без спаму"));
// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers. (зроблено)
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt. (зроблено)
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат prompt записувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

// чого коли я кенселю prompt, то йде object? (це просто баг хрома)
// console.log(typeof prompt());
let numbers = [];
let total = 0;
let input;
const sum = function (array) {
  // як прибрати NULL і UNDEFINED
  for (let j = 0; j < array.length; j++) {
    const element = Number(array[j]);
    if (!isNaN(element)) {
      continue;
    } else {
      console.log(element);
      total += array;
      return total;
    }
  }
};
while (input !== null) {
  input = prompt("Впиши числа");

  if (!isNaN(input)) {
    numbers.push(input);
  } else {
    alert("Було введено не число, попробуйте ще раз");
  }
  console.log(numbers);
  // if (input === null && numbers !== []) { the condition will be always true, чого?
  // чогось додає ще null в список
  if ((input === null && numbers != []) || input === "") {
    break;
  }
}
console.log(sum(numbers));
// Завдання 7 — додаткове, виконувати не обов'язково

// Є масив logins з логінами користувачів. Напиши скрипт додавання
const loginPrompt = prompt("введи свій логін");
const login = loginPrompt.toLowerCase();
const allLoggins = ["zombachock", "minecrafter", "spartanek", "krutelyk"];
// логіна в масив logins.Логін, який додається повинен:
// проходити перевірку на довжину від 4 до 16-ти символів включно
// бути унікальним, тобто бути відсутнім в масиві logins
// Розбий завдання на підзадачі за допомогою функцій.
// Напиши функцію isLoginValid(login), в якій перевір кількість символів параметра login і поверни true або false в залежності від того, чи потрапляє довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.
const isLoginValid = function name(login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};
// Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх логінів і логін, який додається, як параметри і перевіряє наявність login в массиве allLogins, повертає true якщо такого логіна ще немає і false якщо логін вже використовується.
const isLoginUnique = function (allLogins, login) {
  if (!allLogins.includes(login)) {
    return true;
  } else {
    return false;
  }
};
//   for (const eachLogin of allLoggins) {
//     if (login !== eachLogin) {
//       return true;
//     }
//     return false;
//   }
// Напиши функцію addLogin(allLogins, login) яка:
// Приймає новий логін і масив всіх логінів як параметри
const addLogin = function (allLogins, login) {
  // Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
  if (isLoginValid(login) === true) {
    // Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
    if (isLoginUnique(login) === true) {
      // Якщо isLoginUnique поверне true, addLogin додає новий логін в logins і повертає рядок 'Логін успішно доданий!'
      console.log("Логін успішно доданий!");
    } else {
      // Якщо isLoginUnique поверне false, тоді addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже використовується!'
      console.log("Такий логін уже використовується!");
      return;
    }
  } else {
    // Якщо логін не валідний, припинити виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4 до 16 символів'
    console.log("Помилка! Логін повинен бути від 4 до 16 символів");
    return;
  }
};
addLogin(allLogins, login);

console.log("Updated logins:", allLogins);
// 🔔 Принцип єдиної відповідальності функції — кожна функція робить щось одне. Це дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному місці, не зачіпаючи роботу програми в цілому.
// Предикатні функції повертають тільки true або false. Такі функції прийнято називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.
// isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
// isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
// addLogin додають чи не додають логін в масив. При цьому для перевірок умови додавання використовує результати викликів інших функцій — isLoginUnique і isLoginValid.
