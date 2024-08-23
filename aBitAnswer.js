console.log("Пояснення");
// ПОЯСНЕННЯ
const hotelik = {
  name: "Hotel",
  stars: 5,
  capacity: 100,
};

// Деструктуризація для витягання значень
const { name, stars, capacity } = hotelik;

console.log(name); // "Hotel"
console.log(stars); // 5
console.log(capacity); // 100

// Якщо ви хочете змінити ключ або значення під час деструктуризації, це можна зробити наступним чином:

// Деструктуризація з перейменуванням ключа та зміною значення
// const { name: hotelName = "New Hotel", stars = 3, status = "empty" } = hotel;
// console.log(hotelName); // "Hotel" (це значення з об'єкта, а не "New Hotel", тому що "name" існує в об'єкті)
// console.log(stars); // 5 (значення з об'єкта)
// console.log(status); // "empty" (значення за замовчуванням, бо в об'єкті немає ключа "status")
// У цьому прикладі:

// name: hotelName = "New Hotel" означає, що ми витягуємо значення з name і зберігаємо його у змінній hotelName. Якщо б name не було в об'єкті, тоді б hotelName отримало значення "New Hotel".
// stars і status також використовуються для деструктуризації. Якщо значення stars є в об'єкті, то використовується воно; якщо ні, буде використане значення за замовчуванням 3.

// Деструктуризація не змінює значення об'єкта. Вона просто витягує значення у змінні. Щоб змінити значення в об'єкті, потрібно використовувати інший підхід, наприклад, створити новий об'єкт із потрібними змінами.

// Приклад 3: Зміна значення в об'єкті
// Якщо ви хочете змінити значення в самому об'єкті, це можна зробити так:

let hotel = {
  name: "Hotel",
  stars: 5,
  capacity: 100,
};

// Оновлюємо значення у об'єкті
hotel = {
  ...hotel, // Залишаємо всі старі значення
  name: "New Hotel", // Змінюємо значення "name"
  status: "empty", // Додаємо новий ключ "status"
};

console.log(hotel.name); // "New Hotel"
console.log(hotel.status); // "empty"

// Помилка Cannot redeclare block-scoped variable означає, що ви намагаєтеся оголосити змінну, яка вже була оголошена раніше в тому ж блоці коду. У вашому випадку це відбувається через те, що ви намагаєтеся повторно оголосити змінну name або stars в тому ж самому контексті (блоці коду).

// Як це виправити:
// Використовуйте різні імена змінних:

// Якщо ви хочете перевизначити змінну, потрібно використовувати нові імена для змінних.
// Не оголошуйте змінні двічі:

// Переконайтеся, що ви не оголошуєте одну й ту саму змінну двічі в межах одного блоку.
const hotelLL = {
  name: "Hotel",
  stars: 5,
  capacity: 100,
};

// Перша деструктуризація
const { name: newhotelName, stars: hotelStars } = hotelLL;

console.log(newhotelName); // "Hotel"
console.log(hotelStars); // 5

// Якщо вам потрібно оголосити іншу змінну, використовуйте інше ім'я змінної:
const { stars: newStars, status: newStatus = "empty" } = hotelLL;

console.log(newStars); // 5
console.log(newStatus); // "empty"
// ще раз перечитати про деконструювання масиву