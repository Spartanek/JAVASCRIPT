// Завдання 1
// Напиши скрипт, який, для об'єкта user, послідовно:

// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};
// Отримуємо масив ключів об'єкта
const keysUser = Object.keys(user);
user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

// Проходимо по масиву ключів за допомогою for...of
// for...of цикл перебирає всі ключі в об'єкті user, які ви отримуєте за допомогою Object.keys(user).
// user[key] — це доступ до значення об'єкта user, яке відповідає поточному ключу key.
// Object.values(user) повертає масив усіх значень, які є в об.єкті user, але воно не пов'язане з поточним ключем, тому цей виклик всередині for...of циклу не підходить.
for (const key of keysUser) {
  //   console.log(user[key], Object.values(key));
  //  вивожу user[key] і Object.values(user) разом, але Object.values(user) повертає масив усіх значень в об'єкті, а не тільки значення, яке відповідає поточному ключу в циклі.
  console.log(`${key}, ${user[key]}`);
}
// Завдання 2
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число - кількість властивостей.

const countProps = function (obj) {
  let totalValues = 0;
  const masyvValues = Object.values(obj);
  for (const element of masyvValues) {
    totalValues += 1;
  }
  return totalValues;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
// Завдання 4
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
  let total = 0;
  // список values об.єкта
  const sumValues = Object.values(employees);
  // назначаю кожен елемент минулого списку в окрему константу, виконується стільки разів скільки було констант
  for (const value of sumValues) {
    total += value;
  }
  return total;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

// Завдання 3
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// const findBestEmployee = function (employees) {
//   let max = 0;
//   const doubledArray = Object.entries(employees);
//   for (let i = 0; i < doubledArray.length; i++) {
//     const arrayValueshka = doubledArray[i][1];
//     if (arrayValueshka > max) {
//       max = arrayValueshka;
//       // не туди поставив ретюрн, бо як проходить перша ітерація все це зупиняється
//       //   return doubledArray[i][1], doubledArray[i][2];
//     }
//     return max;
//   }
// };
const findBestEmployee = function (employees) {
  let max = 0;
  let bestEmployee = ""; // This will store the name of the best employee
  const doubledArray = Object.entries(employees);
  for (let i = 0; i < doubledArray.length; i++) {
    const arrayValue = doubledArray[i][1]; // This accesses the number of tasks completed

    if (arrayValue > max) {
      max = arrayValue;
      bestEmployee = doubledArray[i][0]; // This accesses the employee name
    }
  }
  return bestEmployee;
};
/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

// Завдання 5
// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

const products5 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

// const getAllPropValues = function (arr, prop) {
//   const returningArray = [];
//   // зроблено список з 4 елементів
//   for (const elementArray of arr) {
//     //   кожен елемент був поділений на 3 маленьки списки в яких є властивості
//     const smallArrays = Object.entries(elementArray);
//     if (smallArrays.includes(prop)) {
//       console.log(gg);
//     }
//   }
// };
const getAllPropValues = function (arr, prop) {
  // створюю список до завповнення
  const returningArray = [];
  // якщо навіть буде збільшуватись список продуктів, то до кожного його елемента можна було достукатись
  for (const element of arr) {
    //   знаходить по ключу властивість
    const specificKey = element[prop];
    // пушить цю властивість
    returningArray.push(specificKey);
  }
  return returningArray;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(getAllPropValues(products5, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products5, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products5, "category")); // []
// Чи нормально, що undefined чотири рази з'явились

// Завдання 6
// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

// Викличи функції для перевірки працездатності твоєї реалізації.

const products6 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  for (const element of allProdcuts) {
    if (element.name === productName) {
      const finalAct = element["price"] * element["quantity"];
      return finalAct;
    }
  }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(calculateTotalPrice(products6, "Радар")); // 5200

console.log(calculateTotalPrice(products6, "Дроїд")); // 2800

// Завдання 7 - додаткове, виконувати не обов'язково
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.

/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Кожна транзакція - це об'єкт з властивостями: id, type і amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює і повертає об'єкт транзакції.
   * Приймає суму і тип транзакції.
   */
  createTransaction(amount, type) {
    const transactionObject = {
      id: 1,
      type,
      amount,
    };
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction());
  },

  /*
   * Метод відповідає за зняття суми з балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій.
   *
   * Якщо amount більше, ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливо, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    console.log(this.account);
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
