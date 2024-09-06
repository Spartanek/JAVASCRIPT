import users from "./users.js";
// Завдання 7
// Отримати загальну суму балансу (поле balance) всіх користувачів.

const calculateTotalBalance = (korystuvachi) => {
  // якщо все так і залишити, але в наступному рядку змінити користувачі на users, то воно всеодно буде працювати
  const sumBalance = korystuvachi.reduce(
    (accu, korystuvach) => accu + korystuvach.balance,
    0
  );
  return sumBalance;
  // твій код
};
console.log(calculateTotalBalance(users)); // 20916
// Завдання 8
// Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.
// Тут ви намагаєтеся порівняти user.friends безпосередньо з friendName. Однак, user.friends — це масив, а ви порівнюєте його зі строкою, що завжди буде призводити до false. Вам потрібно перевірити, чи існує friendName всередині масиву user.friends.

// Рішення:
// Щоб виправити помилку, скористайтеся методом Array.prototype.includes(), щоб перевірити, чи є friendName елементом масиву user.friends.
// const getUsersWithFriend = (korystuvachi, friendName) => {
// const filteringAndGiveNames = korystuvachi.map(
//   (korystuvach) => korystuvach.friends === friendName
// );
// // твій код
// return filteringAndGiveNames;
// };
// Розбираємось
// Метод .filter тепер працює коректно, відфільтровуючи лише тих користувачів, у яких є friendName у списку друзів.
// .includes(friendName) перевіряє, чи є friendName елементом масиву user.friends.
// Метод .map потім витягує name кожного відфільтрованого користувача.
const getUsersWithFriend = (korystuvachi, friendName) => {
  const filtering = korystuvachi
    .filter((korystuvach) => korystuvach.friends.includes(friendName))
    .map((user) => user.name);
  return filtering;
};
console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]
// Завдання 9
// завдання під величезним питанням
// Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)
// Дуже дивно працює
const getNamesSortedByFriendsCount = (korystuvachi) => {
  return korystuvachi
    .map((user) => ({
      // коли я тут і в наступних рядках змінював назву friendsCount, то нічого не працювало
      name: user.name,
      friendsCount: user.friends.length,
    }))
    .sort((a, b) => a.friendsCount - b.friendsCount)
    .map((user) => user.name);

  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
// Завдання 10
// завдання під величезним питанням
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
