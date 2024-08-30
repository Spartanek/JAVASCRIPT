import users from "./users.js";
// Here, you are giving the imported value (which is the default export from users.js) a local name: users. You can choose any name you want here. The name users is simply what you're choosing to call the imported array locally within index.js.
// Завдання 1
// Отримати масив імен всіх користувачів (поле name).
const getUserNames = (korystuvachi) => {
  //   Використовується метод map() для перебору масиву korystuvach. Метод map() створює новий масив, який містить лише імена користувачів. Назвав кожний об.єкт user, а вже в ньому знайшов імена
  const names = korystuvachi.map((user) => user.name);
  // Після виконання методу map() отриманий масив з іменами користувачів зберігається у змінній names.
  return names;
};
// console.log(getUserNames(users)); — викликає функцію getUserNames з аргументом users (імпортованим масивом користувачів) та виводить результат у консоль.
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// Завдання 2
// Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (korystuvachi, color) => {
  //ПОЯСНЕННЯ чого не map у питанні
  const usersWithEyeColor = korystuvachi.filter(
    (user) => user.eyeColor === color
  );
  return usersWithEyeColor;
  // твій код
};

console.log(getUsersWithEyeColor(users, "blue")); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
// Завдання 3
// Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (korystuvachi, stat) => {
  const usersGender = korystuvachi.filter((user) => user.gender === stat);
  return usersGender;
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// Завдання 4
// Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = (korystuvachi) => {
  const neActiv = korystuvachi.filter((user) => !user.isActive);
  return neActiv;
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
// Завдання 5
// Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (korystuvachi, poshta) => {
  const userWithSpecificEmail = korystuvachi.find(
    (user) => user.email === poshta
  );
  return userWithSpecificEmail;
  // твій код
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}
// Завдання 6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUsersWithAge = (korystuvachi, min, max) => {
  const userWithSpecificAge = korystuvachi.filter(
    (user) => user.age >= min && user.age <= max
  );
  return userWithSpecificAge;
  // твій код
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
