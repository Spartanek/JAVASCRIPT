// 1 завдання
// Напиши скрипт, який виконає наступні операції.

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item. Вийде 'У списку 3 категорії.'.
const sagalnaUl = document.getElementById("categories");
// я хотів знайти у sagalnaUl, але ми шукаємо по документу тобто не sagalnaUl.query...
const categories = document.querySelectorAll(".item");
const categoriesNumber = categories.length;
console.log(`У списку ${categoriesNumber} категорії.`);

// Для кожного елемента li.item в списку ul#categories, знайде і виведе в консоль текст заголовка елемента (тега h2) і кількість елементів в категорії (всіх вкладених в нього елементів li).
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent; // Отримати заголовок
  const elementsCount = category.querySelectorAll("li").length; // Підрахувати кількість li всередині ul
  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
});
// Наприклад, для першої категорії вийде:

// Категорія: Тварини
// Кількість елементів: 4

// 2 завдання
// В JS є масив рядків.
const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ingradientUl = document.getElementById("ingredients");
for (let i = 0; i < ingredients.length; i++) {
  const element = ingredients[i];
  const lishka = document.createElement("li");
  lishka.textContent = element;
  //   ingradientUl.append(lishka);
}

const ingridientsMap = ingredients.map((ingridient) => {
  const lishka = document.createElement("li");
  lishka.textContent = ingridient;
  return lishka;
});

console.log(ingridientsMap);

// метод append - він не може працювати з масивами
// ... - rest,spread оператор
ingradientUl.append(...ingridientsMap);
// ingradientUl.append(li, li, li, li, li, li);

// 1-й варіант, але він робить не за одну операцію
// const ingradientUl = document.getElementById("ingredients");
// for (let i = 0; i < ingredients.length; i++) {
//   const element = ingredients[i];
//   const lishka = document.createElement("li");
//   lishka.textContent = element;
//   // ingradientUl.append(lishka);
// }
// 3 завдання
// Напиши скрипт для створення галереї зображень по масиву даних.
// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
// 4 завдання
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// ЩЕ ТРЕБА ПРОГОВОРИТИ INNERHTML
// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
const clocking = document.getElementById("value");
let basicValue = 0;
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
const decreaseBut = document.querySelector('button[data-action="decrement"]');
decreaseBut.addEventListener("click", function (e) {
  basicValue -= 1;
  clocking.innerHTML = basicValue;
});
const increaseBut = document.querySelector('button[data-action="increment"]');
increaseBut.addEventListener("click", function (e) {
  basicValue += 1;
  clocking.innerHTML = basicValue;
});

// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
