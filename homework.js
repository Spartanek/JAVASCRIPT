// Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні — "Не всі поля заповнені".
// План
// Створити розмітку з двома текстовими полями та кнопкою
// Знайти ці елементи
const inputik = document.querySelector(".input1-1");
const bratInputik = document.querySelector(".input1-2");
const button1 = document.querySelector(".button1");
const message1 = document.querySelector(".message1");
// повісити на кнопку слухача подій
button1.addEventListener("click", functionNotEmpty);
// створити функцію
function functionNotEmpty(e) {
  // в якій буде умова
  // умова буде пов'язана з перевіркою, щоб В НІ ОДНОМУ з інпутів не було порожньо
  if (inputik.value !== "" && bratInputik.value !== "") {
    message1.textContent = "Обидва поля заповнені ";
  } else {
    message1.textContent = "Не всі поля заповнені";
  }
}

// Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні — "Сума менша або дорівнює 10".
// План
// Створити розмітку з двома числовими полями та кнопкою
// Знайти ці елементи
const inputik2 = document.querySelector(".input2-1");
const bratInputik2 = document.querySelector(".input2-2");
const button2 = document.querySelector(".button2");
const message2 = document.querySelector(".message2");
// повісити на кнопку слухача подій
button2.addEventListener("click", functionAdding);
// створити функцію
function functionAdding(e) {
  e.preventDefault();
  // в якій буде умова
  // умова буде пов'язана з перевіркою, щоб сума значень полів більша за 10
  //   const valueGeneral = parseInt(inputik2.value + bratInputik2.value);
  //   console.log(typeof inputik2.value);
  const valueGeneral = parseInt(inputik2.value) + parseInt(bratInputik2.value);
  //   if (inputik2.value + bratInputik2.value > 10) {
  if (valueGeneral > 10) {
    message2.textContent = "Сума більша за 10";
  } else {
    message2.textContent = "Сума менша або дорівнює 10";
  }
}
// Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні — "Текст не містить слово JavaScript".
// План
// знайти елементи
const input3 = document.querySelector(".input3");
const button3 = document.querySelector(".button3");
const message3 = document.querySelector(".message3");
// повісити слухач подій на кнопку
button3.addEventListener("click", functionCheckJS);
// створюю ф-цію
function functionCheckJS(e) {
  // даю умову, щоб знаходило слово JavaScript в інпуті
  if (input3.value.trim().includes("JavaScript")) {
    message3.textContent = "Текст містить слово JavaScript";
  } else {
    message3.textContent = "Текст не містить слово JavaScript";
  }
}
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні — "Число не входить в діапазон від 10 до 20".
const form4 = document.querySelector(".form4");
const message4 = document.querySelector(".message4");
form4.addEventListener("submit", functionForm);
// console.log(form.elements);
function functionForm(e) {
  e.preventDefault();
  const input4 = form4.elements[0].value;
  console.log(input4);
  if (input4 > 10 && input4 < 20) {
    message4.textContent = "Число входить в діапазон від 10 до 20";
  } else {
    message4.textContent = "Число не входить в діапазон від 10 до 20";
  }
  //   const input4 = form4.elements.nameInput;
}
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.
// містить символ @ та крапку після неї - не поняв умову
const form5 = document.querySelector(".form5");
const message5 = document.querySelector(".message5");
form5.addEventListener("submit", functionForm2);
function functionForm2(e) {
  e.preventDefault();
  const text = form5.elements[0].value;
  const email = form5.elements[1].value;
  const password = form5.elements[2].value;
  if (text.length > 3 && email.includes("@gmail.com") && password.length > 6) {
    //   не поняв як переправляти на іншу сторінку
    window.location = "https://www.instagram.com/go_iteens/";
    // message5.textContent="https://www.instagram.com/go_iteens/";
  } else {
    //   якось треба вказувати помилку в конкретному інпуті?
    message5.textContent = "Щось пішло не за планом";
  }
}
