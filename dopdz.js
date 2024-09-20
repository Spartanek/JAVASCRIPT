// Завдання для тренування базових методів перебору які ви будете застосовувати постійно (filter,map,reduce,sort) (find)
const products = [
  {
    id: 1,
    name: "Ноутбук",
    price: 25000,
    category: "Електроніка",
    inStock: true,
  },
  {
    id: 2,
    name: "Смартфон",
    price: 15000,
    category: "Електроніка",
    inStock: false,
  },
  { id: 3, name: "Книга", price: 300, category: "Книги", inStock: true },
  { id: 4, name: "Футболка", price: 500, category: "Одяг", inStock: true },
  { id: 5, name: "Кава", price: 100, category: "Продукти", inStock: true },
  {
    id: 6,
    name: "Планшет",
    price: 12000,
    category: "Електроніка",
    inStock: true,
  },
  { id: 7, name: "Джинси", price: 1500, category: "Одяг", inStock: false },
  { id: 8, name: "Чай", price: 80, category: "Продукти", inStock: true },
];

// Завдання 1: Отримати масив назв всіх продуктів, які є в наявності (inStock: true)
const getAvailableProductNames = (products) => {
  // твій код
};

console.log(getAvailableProductNames(products));
// Очікуваний результат: ['Ноутбук', 'Книга', 'Футболка', 'Кава', 'Планшет', 'Чай']

// Завдання 2: Отримати загальну вартість всіх продуктів в категорії 'Електроніка'
const getTotalElectronicsPrice = (products) => {
  // твій код
};

console.log(getTotalElectronicsPrice(products));
// Очікуваний результат: 52000

// Завдання 3: Отримати масив продуктів, відсортованих за ціною (від найдешевшого до найдорожчого)
const getSortedProductsByPrice = (products) => {
  // твій код
};

console.log(getSortedProductsByPrice(products));

// Завдання 4: Отримати об'єкт, де ключі - це категорії, а значення - кількість продуктів в кожній категорії
const getProductCountByCategory = (products) => {
  // твій код
};

console.log(getProductCountByCategory(products));
// Очікуваний результат: { 'Електроніка': 3, 'Книги': 1, 'Одяг': 2, 'Продукти': 2 }

// Завдання 5: Знайти найдорожчий продукт в кожній категорії
const getMostExpensiveProductByCategory = (products) => {
  // твій код
};

console.log(getMostExpensiveProductByCategory(products));
// Очікуваний результат: об'єкт, де ключі - категорії, а значення - об'єкти найдорожчих продуктів
