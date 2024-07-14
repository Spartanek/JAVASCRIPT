// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

// 👉 Спочатку через for
for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
  // тобто цей запис не працює?
  string = friends[i] + ",";
  // а цей працює?
  string = string + friends[i] + ",";
  // Mango,Ajax
  //   string += element[i];
  // хм, вивело Mowx

  // for (let i = 0; i < friends.length; i++) {
  //   string += friends[i];
  //   if (i < friends.length - 1) {
  //     string += ", ";
  //   }
  // }
}

console.log(string);
// 👉 Потім через join()
console.log(friends.join(","));

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
console.log(cards);
// Параметр begin визначає індекс, з якого слід починати витяг.
// Параметр end, визначає індекс елемента, на якому слід закінчити витяг. Метод slice не включає елемент з індексом end у витягнуті елементи.
const cardsCopy = cards.slice();
// const cardsCopy = cards.slice(0, cards.length);

// 3. Видалити
// Видалення (по індексу), метод indexOf()
const cardToRemove = "Карточка-3";
for (let j = 0; j < cardsCopy.length; j++) {
  const element = cardsCopy[j];
  if (element === cardToRemove) {
    let findElement = cardsCopy.indexOf(element);
    console.log(findElement);
    cardsCopy.splice(findElement, 1);
  }
}
console.log(`Після видалення ${cardsCopy}`);
//  Додавання (по індексу)
const cardToInsert = "Карточка-6";
for (let r = 0; r < cardsCopy.length; r++) {
  const element = cardsCopy[r];
  if (element !== cardToInsert) {
    // cardsCopy.push(cardToInsert);
    // якщо напишу length-1, то позаду 5. Я всеодно не зрозумів, воно ж по індексу повинно ставитись
    cardsCopy.splice(cardsCopy.length, 0, cardToInsert);
    break;
  }
}
console.log(`Після додавання ${cardsCopy}`);
//  Оновлення (по індексу)
const cardToUpdate = "Карточка-4";
for (let y = 0; y < cardsCopy.length; y++) {
  const element = cardsCopy[y];
  if (element === cardToUpdate) {
    let findElement = cardsCopy.indexOf(element);
    console.log(findElement);
    cardsCopy.splice(findElement, 1, "Змінена карточка-4");
  }
}
console.log(`Після додавання ${cardsCopy}`);
