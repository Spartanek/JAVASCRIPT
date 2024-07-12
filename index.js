// Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const arrayFirst = [1, 2, 3];
// чи коректне таке написання?
arrayFirst[1] = 10;
console.log(arrayFirst);
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const arraySecond = ["Перший рядок", "Другий рядок", "Третій рядок"];
arraySecond[3] = "Четвертий рядок";
console.log(arraySecond);
// Створити скрипт який поверне суму всіх чисел в масиві.
const arrayThird = [];
for (let i = 0; i < 5; i++) {
  arrayThird[i] = Math.floor(Math.random() * (20 - 1 + 1) + 1);
  // щось якось не поняв
  //   let total = 0;
  //  Number(total += arrayThird[i]);
}
let total = 0;
for (let i = 0; i < arrayThird.length; i++) {
  total += arrayThird[i];
}
console.log(total);
console.log(arrayThird);

// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for.
const arrayFour = [];
for (let i = 0; i < 5; i++) {
  arrayFour.push(Math.floor(Math.random() * (5 - 1 + 1) + 1));
  console.log(arrayFour[i]);
}
// Створити масив із 5-ти рядків. Вивести на екран кожен рядок з масиву, який містить більше 5-ти символів.

const arrayFive = ["easy", "peasy", "lemon-squeezy", "kek", "cheburek"];
for (let index = 0; index < arrayFive.length; index++) {
  if (arrayFive[index].length > 5) {
    console.log(arrayFive[index]);
  }
}

// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.
const arraySix = [];
for (let i = 0; i < 10; i++) {
  arraySix[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
console.log(arraySix);
// let numbers = [3, 7, 2, 8, 5];
// let max = numbers[0]; // initialize to the first value

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log(max); // Outputs: 8
// пристосований верхній код
let maxsimus = 0;
for (let i = 0; i < arraySix.length; i++) {
  const element = arraySix[i];
  if (element > maxsimus) {
    maxsimus = element;
  }
}
console.log(maxsimus);
// рішення від чату джпт, але занадто складно
// const maxNumber = Math.max(...arraySix);
// console.log("The largest number in the array is:", maxNumber);

// console.log(arraySix);
// for (const number of arraySix) {
//   console.log(Math.max(arraySix));
// }

// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
// перший варіант, але не такий який я хочу. Чи є сенс писати взагалі else
// const arraySeven = [];
// for (let i = 0; i < 10; i++) {
//   arraySeven[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
//   if (arraySeven[i] % 2 === 0) {
//     console.log(arraySeven[i]);
//   } else {
//     continue;
//   }
// }
// другий варіант
const arraySeven = [];
for (let i = 0; i < 10; i++) {
  arraySeven[i] = Math.floor(Math.random() * (10 - 1 + 1) + 1);
}
console.log("Raw array:", arraySeven);

const evenArray = [];
for (let i = 0; i < arraySeven.length; i++) {
  if (arraySeven[i] % 2 === 0) {
    evenArray.push(arraySeven[i]);
  }
}
console.log(evenArray);
