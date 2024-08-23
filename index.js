// Завдання 1
const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true,
};

user.hobby = "skydiving";
user.premium = false;
user.mood = "happy";

const { name, age, hobby, premium, mood } = user;

console.log(name, age, hobby, premium, mood);
const keysUser = Object.keys(user);
for (const key of keysUser) {
  console.log(`${key}: ${user[key]}`);
}
// НЕ ПРАЦЮЄ
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const {
//   name,
//   age,
//   hobby: newHobby = "skydiving",
//   premium: newPremium = false,
//   mood = "happy",
// } = user;

// console.log(name, age, newHobby, newPremium, mood);
// Завдання 2

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
// трохи не так, але думаю можна
// таких ключів не було у цьому об.єкті, тобто вже існуючі треба перейменувати
// const { name2, age2 } = { name: "Mango", age: 2 };
// console.log(name2, age2);
const { name: name2, age: age2 } = { name: "Mango", age: 2 };
console.log(name2, age2);
const { mail, isOnline, score } = {
  mail: "poly@mail.com",
  isOnline: true,
  score: 500,
};
console.log(mail, isOnline, score);
// Завдання 4

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
// Чи можна якось підв.язати назву ключа з такого об.єкта, як у нас, щоб постійно не переписувати при деструктур.? Тут йде про одну тему (зарплата), але ключі (імена тут) різні
const {
  mango: mangoSalary,
  poly: polySalary,
  alfred: alfredSalary,
} = {
  mango: 100,
  poly: 150,
  alfred: 80,
};
console.log(mangoSalary, polySalary, alfredSalary);
const {
  kiwi: kiwiSalary,
  lux: luxSalary,
  chelsy: chelsySalary,
} = {
  kiwi: 200,
  lux: 50,
  chelsy: 150,
};
console.log(kiwiSalary, luxSalary, chelsySalary);
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
const {
  ann: ann1,
  david: david1,
  helen: helen1,
  lorence: lorence1,
} = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(ann1, david1, helen1, lorence1);
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

const {
  poly: poly2,
  mango: mango2,
  ajax: ajax2,
} = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(poly2, mango2, ajax2);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

const {
  lux: lux3,
  david: david3,
  kiwi: helen3,
  chelsy: lorence3,
} = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(lux3, david3, helen3, lorence3);
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
const destrFunc = function ({ name, price, quantity }) {
  console.log(name, price, quantity);
};
destrFunc(products5[0]);
destrFunc(products5[1]);
destrFunc(products5[2]);
destrFunc(products5[3]);

// Щось не то зробив
// const destrFunc = function ({ nameParam, priceParam, quanParam }) {
//   const { nameParam, priceParam, quanParam } = {
//     nameParam,
//     priceParam,
//     quanParam,
//   };
//   console.log(nameParam, priceParam, quanParam);
// };
// destrFunc({ name: "Радар", price: 1300, quantity: 4 });
// destrFunc({ name: "Сканер", price: 2700, quantity: 3 });
// destrFunc({ name: "Дроїд", price: 400, quantity: 7 });
// destrFunc({ name: "Захоплення", price: 1200, quantity: 2 });

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
// я у минулій задачі виводив
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

// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

let randomId = Math.floor(Math.random() * 1000 + 1);
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
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  createTransaction(amount, type) {
    // id - має бути унікальним
    // Метод створює
    const transaction = {
      amount,
      type,
      id: randomId,
      // id: 1,
    };
    // не треба прописувати amount, type, бо це вже константа
    // але чи потрібно писати id чи randomid?
    const { id } = transaction;
    console.log(amount, type, id);
    return transaction;
  },

  /*
   * Метод відповідає за додавання суми до балансу.
   * Приймає суму танзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його в історію транзакцій
   */
  deposit(amount) {
    if (amount <= 0) {
      console.log("Додати 0 або менше 0 не можна");
      return;
    }

    const depositTransaction = this.createTransaction(
      amount,
      Transaction.DEPOSIT
    );

    //  Метод відповідає за додавання суми до балансу.
    this.balance += amount;
    // Викликає createTransaction для створення об'єкта транзакції

    // push - він дозволяє додати що передасте в масив
    //  після чого додає його в історію транзакцій
    this.transactions.push(depositTransaction);
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
  withdraw(amount) {
    // Метод відповідає за зняття суми з балансу.
    if (amount > this.balance) {
      console.log(
        `зняття такої суми не можливо, недостатньо коштів. Вам не вистачає ${
          amount - this.balance
        } грн`
      );
      return;
    }
    const withdrowTransaction = this.createTransaction(
      amount,
      Transaction.WITHDRAW
    );

    this.balance -= amount;
    //  Викликає createTransaction для створення об'єкта транзакції

    // після чого додає його в історію транзакцій.
    this.transactions.push(withdrowTransaction);
  },

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод шукає і повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      // Метод шукає
      if (id === transaction.id) {
        // повертає об'єкт транзакції
        return transaction;
      }
    }
  },

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {
    let result = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        result += transaction.amount;
      }
    }
    return result;
  },
};

console.log(account.createTransaction(1000, Transaction.DEPOSIT));
// console.log(account.createTransaction(1000, "Deposit"));

account.deposit(1000);
account.withdraw(1000);

// console.log(account.getBalance());
console.log(account.getTransactionDetails(randomId));
account.deposit(1000);

// console.log(account.getBalance());

console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getBalance());
