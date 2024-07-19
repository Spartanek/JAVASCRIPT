// 1)Створіть масив з 5 чисел.Використайте метод push(), щоб додати ще одне число в кінець масиву.
const array1 = [];
for (let i = 0; i < 5; i++) {
  //число 6 ніколи не випаде
  array1[i] = Math.floor(Math.random() * 6);
}
console.log(array1);
array1.push(777);
console.log(array1);
// 2)Дано масив[1, 2, 3, 4, 5].Використайте метод pop(), щоб видалити останній елемент, а потім виведіть новий масив.
const array2 = [1, 2, 3, 4, 5];
array2.pop();
console.log(`список після pop ${array2}`);
// 3)Створіть масив з іменами фруктів. Використайте метод indexOf(), щоб знайти позицію "яблука" в масиві.
const fruitArray = ["абрикос", "яблуко", "апельсин", "банан"];
console.log(`індекс яблука це ${fruitArray.indexOf("яблуко")}`);
// 4) Створіть масив імен. Використайте цикл for та метод push(), щоб створити новий масив, який містить тільки імена, довжина яких більше 5 символів.
const nameArray = ["Eve", "Vadymka", "Kate", "John", "Valentyna"];
const nameNewArray = [];
for (let i = 0; i < nameArray.length; i++) {
  if (nameArray[i].length > 5) {
    nameNewArray.push(nameArray[i]);
  } else {
    continue;
  }
}
// дивно, що це не відображається як список
console.log(`Минулий список ${nameArray}`);
console.log(`Новий список імен ${nameNewArray}`);
// 5)Дано масив чисел.Використайте цикл for, щоб знайти суму всіх елементів масиву.
const array5 = [];
for (let i = 0; i < 10; i++) {
  //число 11 ніколи не випаде
  array5[i] = Math.floor(Math.random() * 11);
}
console.log(array5);
let total = 0;
for (let i = 0; i < array5.length; i++) {
  // =+ це взагалі існує?
  total += array5[i];
}
console.log(total);
// 6**) Створіть масив рядків. Використайте цикл for та методи push() і charAt(), щоб створити новий масив, який містить тільки перші літери слів.
const array6 = ["Van", "ananas", "desk", "yellow", "marshmallow"];
let emptyArray = [];
for (let j = 0; j < array6.length; j++) {
  const bukvy = array6[j].charAt();
  emptyArray.push(bukvy);
}
console.log(emptyArray);
// 7 ***)Створіть масив чисел та змінну з числовим значенням.Використайте цикл for та метод push(), щоб створити новий масив без елементів, що дорівнюють змінній з числовим значенням.

const array7 = [];
let novyiMasyv = [];
const smina = Math.floor(Math.random() * 21);
console.log(`зміна ${smina}`);
// чи краще розділити, а не нагромаджувати дві окремі дії?
for (let i = 0; i < 8; i++) {
  array7[i] = Math.floor(Math.random() * 21);
  if (array7[i] !== smina) {
    novyiMasyv.push(array7[i]);
  }
}
console.log(`список ${array7}`);
console.log(`новий масив ${novyiMasyv}`);
// хоча результат задовільний, але відчуваю, що щось не то
// 8***)Створіть два масиви чисел. Використайте цикли та умовні оператори, щоб знайти спільні елементи цих масивів та створити новий масив з цими елементами.
// щось треба, щоб воно перевіряло перший елемент з усіма
// 1 елемент першого списку             1 елемент другого
//                                      2 елемент другого
//                                      3 елемент другого
//                                      4 елемент другого
//  і тд
// але в той же час, якщо 1 епс (елемент першого списку) однаковий з 2 едс (елемент другого списку), наприклад, то тоді далі не треба перевіряти

let comparedArray = [];
const nonComparedArray1 = [];
const nonComparedArray2 = [];
for (let i = 0; i < 8; i++) {
  // різні рандомні масиви створює
  nonComparedArray1[i] = Math.floor(Math.random() * 21);
  nonComparedArray2[i] = Math.floor(Math.random() * 21);
}

for (let i = 0; i < 8; i++) {
  const elementspysok1 = nonComparedArray1[i];
  const elementspysok2 = nonComparedArray2[i];
  if (nonComparedArray1[i] === nonComparedArray2[i]) {
    comparedArray.push(nonComparedArray1[i]);
  }
}
console.log(nonComparedArray1);
console.log(nonComparedArray2);
console.log(comparedArray);
