// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.
const inputForMoney = document.querySelector(".inputMoney");
const depositnaButton = document.querySelector(".depositButton");
const gotivkaButton = document.querySelector(".withdrawButton");
const bankAccount = {
  ownerName: "Vadymka",
  accountNumber: 123456789,
  balance: 7,
  deposit(valuesh) {
    if (valuesh <= 0) {
      throw new Error("Від.ємні значення ввести не можна");
    }
    this.balance += valuesh;
    console.log(`Залишок на балансі ${this.balance}`);
  },
  withdraw(valuesh) {
    if (valuesh <= 0) {
      throw new Error("Від.ємні значення ввести не можна");
    }
    this.balance -= valuesh;
    console.log(`Залишок на балансі ${this.balance}`);
  },
};
// як можна за одну ф-цію зробити через розгалудження на ці два види кнопки, а не окремо кожну?

const withdrawFunc = function (e) {
  const value = Number(inputForMoney.value);
  bankAccount.withdraw(value);
};
gotivkaButton.addEventListener("click", withdrawFunc);
// клік треба, а не сабміт
depositnaButton.addEventListener("click", (e) => {
  const value = Number(inputForMoney.value);
  bankAccount.deposit(value);
});

// gotivkaButton.addEventListener("click", e =>{
// const value = Number(inputForMoney.value);
// bankAccount.withdraw(value);});

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки
const inputyk = document.querySelector(".tempInput");
const funcTemp = function (e) {
  const value = e.target.value;
  weather.temperature = value;
  weather.tempCheck();
};
inputyk.addEventListener("input", funcTemp);
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,
  tempCheck() {
    if (this.temperature < 0) {
      console.log("температура нижче 0 градусів Цельсія");
      return true;
    }
    console.log("температура вище або дорівнює 0 градусів Цельсія");
    return false;
  },
};
// Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт
const forma = document.getElementById("formLogin");
const inputLogin = document.querySelector(".inputForName");
const inputEmail = document.querySelector(".inputForEmail");
const inputPassword = document.querySelector(".inputForPassword");
forma.addEventListener("submit", takingValues);
function takingValues(e) {
  e.preventDefault();
  //   if (inputLogin.value != "" && inputEmail != "" && inputPassword != "") {
  if (
    inputLogin.value !== "" ||
    inputEmail.value !== "" ||
    inputPassword.value !== ""
  ) {
    user.name = inputLogin.value;
    user.email = inputEmail.value;
    user.password = inputPassword.value;
    user.login();
  } else {
    alert("Заповни всі поля!");
  }
}

const user = {
  // поки вони пусті, думав, що просто поставити пусті лапки, АЛЕ я невпевнений, що так правильно
  name: "",
  email: "",
  password: "",
  // чи треба щось записувати в душки метода логін?
  login() {
    if (this.name.length < 2) {
      alert("Незадовільне ім'я");
      return;
    }
    if (this.email.length < 12) {
      alert("Незадовільна пошта");
      return;
    }
    if (this.password.length < 10) {
      alert("Незадовільний пароль");
      return;
    }
    alert("Вас додали до бази!");
  },
};
//   які перевірки повинні бути?
// if (
//   this.name.length >= 2 &&
//   this.email.length >= 12 &&
//   this.password.length >= 10
// ) {
//   alert("Ваші дані успішно додано!");
// } else {
//   alert("Щось пішло не так");
// }
// Така річ тільки заплутує, ми вчили іншу тактику
// if (this.name.length >= 2) {
//     if (this.email.length >= 12) {
//         if (this.password.length >= 10) {
//             alert ("Все додалось, чудово!")
//         } else {
//             alert("Не задовільний пароль")
//         }
//     } else {
//         alert("Незадовільна пошта")
//     }
//  }else {
//     alert("Незадовільне ім'я")
// }
// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
// Трохи не поняв
const movie1 = {
  title: "12 розгніваних чоловіків",
  director: "Сідні Люмет",
  year: 1957,
  rating: 9,
  checkRating() {
    if (this.rating > 8) {
      return true;
    }
    return false;
  },
};
const movie2 = {
  title: "Хатіко: вірний друг",
  director: "Лассе Гальстрем",
  year: 2009,
  rating: 7,
  checkRating() {
    if (this.rating > 8) {
      return true;
    }
    return false;
  },
};
// Далі код з інету (зі змінами), бо цього ми ще не вчили
// Function to display movie details on the page
function displayMovie(movie) {
  const container = document.createElement("div");

  // Create elements to display properties
  const titleElement = document.createElement("h2");
  const directorElement = document.createElement("p");
  const yearElement = document.createElement("p");
  const ratingElement = document.createElement("p");

  // Assign values
  titleElement.textContent = `Title: ${movie.title}`;
  directorElement.textContent = `Director: ${movie.director}`;
  yearElement.textContent = `Year: ${movie.year}`;
  ratingElement.textContent = `Rating: ${movie.rating}`;

  // Change color if rating is above 8
  if (movie.checkRating()) {
    titleElement.style.color = "green";
  }

  // Append to container
  container.appendChild(titleElement);
  container.appendChild(directorElement);
  container.appendChild(yearElement);
  container.appendChild(ratingElement);

  // Append to body or any other element in the document
  document.body.appendChild(container);
}

// Display movies
displayMovie(movie1);
displayMovie(movie2);
