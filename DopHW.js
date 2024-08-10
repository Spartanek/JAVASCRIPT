// Створіть функцію calculateArea, яка приймає радіус кола як аргумент і повертає його площу.Використайте цю функцію для обчислення площі кола з радіусом 5.
const calculatedArea = function (radius) {
  return Math.pow(radius, 2) * 3.14;
};
console.log(`Площа кола: ${calculatedArea(5)} `);
// Напишіть функцію processData, яка приймає число та колбек - функцію.Функція processData повинна викликати колбек, передаючи йому квадрат вхідного числа.Створіть колбек - функцію, яка виводить результат в консоль.
const processData = function (number, callback) {
  return callback(number);
};
const powFunction = function (number) {
  return Math.pow(number, 2);
};
// powFunction треба обов'язково записати
console.log(`квадрат числа 2 дорівнює ${processData(2, powFunction)}`);
// Створіть функцію sum, яка приймає довільну кількість аргументів і повертає їх суму.
let total = 0;
// в дужки нічого не вписую
const sum = function () {
  console.log(arguments);
  for (let i = 0; i < arguments.length; i++) {
    const element = arguments[i];
    total += element;
  }
};
sum(15, 20, 78, 95, 68);
console.log(total);
// Перепишіть наступну функцію як стрілочну:
// function multiply(a, b) {
//     return a * b;
// }
const multiply = (a, b) => {
  return a * b;
};
console.log(`3 * 4 дорівнює ${multiply(3, 4)}`);
// Створіть функцію applyOperation, яка приймає два числа та функцію - операцію.Функція applyOperation повинна застосовувати передану операцію до двох чисел та повертати результат.Створіть кілька функцій - операцій(додавання, віднімання, множення) і використайте їх з applyOperation.
// не поняв завдання
const applyOperation = (a, b, callback) => callback(a, b);
const plusFunction = (a, b) => a + b;
const minusFunction = (a, b) => a - b;
const multiplyFunction = (a, b) => a * b;
console.log(`результат додавання 5 і 2 ${applyOperation(5, 2, plusFunction)}`);
console.log(
  `результат віднімання 5 і 2 ${applyOperation(5, 2, minusFunction)}`
);
console.log(
  `результат множення 5 і 2 ${applyOperation(5, 2, multiplyFunction)}`
);
// Напишіть функцію createPasswordGenerator, яка приймає набір символів і повертає функцію. Повернена функція при кожному виклику повинна генерувати випадковий пароль заданої довжини, використовуючи символи з набору.
// Не зовсім зрозумів завдання і як робити
// створив масив із різних символів
const pack = ["a", "b", "c", "A", "B", "C", "1", "2", "3"];
// створив функцію з ім.ям createPasswordGenerator і повертає іншу ф-цію, яка має параметр length
const createPasswordGenerator = function (pack) {
  return function (length) {
    let passwordNew = "";
    for (let index = 0; index < length; index++) {
      // параметр length для масиву
      const randomCharachterIndex = Math.floor(Math.random() * pack.length);
      passwordNew += pack[randomCharachterIndex];
    }
    return passwordNew;
  };
};
// Тут не поняв взагалі щодо return function
// const generatePassword = createPasswordGenerator(pack);

//  сonsole.log(createPasswordGenerator(pack)(8)); якась дивна багана консоль
// console.log(generatePassword(8));
console.log(createPasswordGenerator(pack)(8));
// Створіть функцію greet, яка приймає ім'я користувача та привітання. Якщо привітання не передано, використайте "Привіт" за замовчуванням.
const nameUser = prompt("Впиши ім'я");
const greet = function (name) {
  if (name !== "") {
    console.log(`Привітики ${name}`);
    return;
  }
  // якщо нуль, то воно пише Привіт, null. Чого?
  console.log("Привіт");
};
greet(nameUser);
