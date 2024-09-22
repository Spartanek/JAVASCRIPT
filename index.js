// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.
function Account({ login, email }) {
  this.login = login;
  this.email = email;
}
Account.prototype.getInfo = function () {
  console.log(this.login, this.email);
};
console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: "Mangozedog",
  email: "mango@dog.woof",
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: "Poly",
  email: "poly@mail.com",
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com
// Завдання 2
// Напиши клас User для створення користувача з наступними властивостями:

// name - рядок
// age - число
// followers - число
// Добав метод getInfo(), який, виводить рядок: User ${ім'я} is ${вік} years old and has ${кількість фоловерів} followers
class User {
  //1 variant
  // constructor(name, age, followers) {
  //   this._name = name; // Consistent with underscore usage
  //   this._age = age; // Consistent with underscore usage
  //   this._followers = followers; // Consistent with underscore usage
  // }
  // 2 variant
  constructor({ name, age, followers }) {
    this._name = name; // Consistent with underscore usage
    this._age = age; // Consistent with underscore usage
    this._followers = followers; // Consistent with underscore usage
  }
  getInfo() {
    console.log(
      `User ${this._name} is ${this._age} years old and has ${this._followers} followers`
    );
  }
}
// АЛЕ В ПЕРШОМУ ЗАВДАННІ ВСЕ ПРАЦЮВАЛО
// ЧОГОСЬ НЕ ПРАЦЮЄ КОЛИ ТАК ЗАПИСАНО
// 2 variant
const mango2 = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});
// БО Конструктор є і такий запис
// 1 variant
// const mango2 = new User("Mango", 2, 20);
mango2.getInfo(); // User Mango is 2 years old and has 20 followers
// 2 variant
const poly2 = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});
// const poly2 = new User("Poly", 3, 17);
poly2.getInfo(); // User Poly is 3 years old and has 17 followers
// Завдання 3
// Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. При виклику буде отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.
class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(itemAdd) {
    this.items.push(itemAdd);
  }
  removeItem(itemToDelete) {
    const indexToDelete = this.items.indexOf(itemToDelete);
    if (indexToDelete > -1) {
      this.items.splice(indexToDelete, 1);
    }
  }
}
// Додай методи класу:

// getItems() - повертає масив поточних товарів
// addItem(item) - отримує новий товар і додає його до поточних
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
const storage = new Storage([
  "Нанітоіди",
  "Пролонгер",
  "Залізні жупи",
  "Антигравітатор",
]);
// console.table що це?
const items = storage.getItems();
// Чому ЦЕЙ і
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem("Дроїд");
// чогось storage.items не працював
console.table(storage.getItems()); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem("Пролонгер");
// і ЦЕЙ запис відрізняються
console.table(storage.getItems()); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// Завдання 4
// Напиши клас StringBuilder. На вхід він отримує один параметр - рядок, який записує у властивість _value.
class StringBuilder {
  constructor(string) {
    this._value = string;
  }
  get value() {
    // не працює
    // console.log(this._value);
    return this._value;
  }
  append(str) {
    return (this._value += str);
  }
  prepend(str) {
    return (this._value = str + this._value);
  }
  pad(str) {
    return (this._value = str + this._value + str);
  }
}
// Додай класу наступний функціонал:

// Геттер value - повертає поточне значення поля _value
// Метод append(str) - отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) - отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) - отримує параметр str (рядок) і додає його на початок і в кінець _value
const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='
// Завдання 5
// Напиши клас Car із зазначеними властивостями і методами.

class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`
    );
  }
  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  // constructor(speed = 0, price, maxSpeed, isOn, distance) {
  //   this.speed = speed;
  //   this.price = price;
  //   this.maxSpeed = maxSpeed;
  //   this.isOn = isOn;
  //   this.distance = distance;
  // }
  // Конструктор: Ви передаєте в конструктор окремі значення для властивостей (speed, price, maxSpeed, isOn, distance), але в самому завданні вказано, що конструктор повинен приймати об'єкт налаштувань. Тобто, об'єкт повинен виглядати так:
  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }
  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */
  // index.js:193 Uncaught RangeError: Maximum call stack size exceeded Якщо не ставити нижнє підкреслення перед price, але чому
  get price() {
    return this._price;
  }
  // Сетер для price: Ви додали сетер з ім'ям newPrice, але це не відповідає завданню. Потрібно просто зробити сетер з ім'ям price. Правильна версія має виглядати так:
  // set newPrice(newPrice) {
  //   this.price = newPrice;
  // }
  set price(newPrice) {
    this._price = newPrice;
  }
  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed = this.speed + value;
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed = this.speed - value;
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn === true) {
      this.distance += this.speed * hours;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
