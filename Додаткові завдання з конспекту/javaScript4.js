// Творчі завдання
//  Написати програму яка перевіряє чи введене число через input потрапляє в діапазон від 55 до 99 включно. Якщо так, вивести на екран "Число потрапляє в діапазон". Якщо ні, вивести "Число не потрапляє в діапазон".
// тут і 55, і 99 виключно?
const check = document.querySelector(".inputchecking");
check.addEventListener("input", checkFunction);

function checkFunction(event) {
  //  If you don't use parseInt(check.value, 10), the value of the input will be treated as a string. When performing comparisons or arithmetic operations on strings, you might not get the expected results because JavaScript will compare them as strings rather than numbers.
  // For example:
  // "55" < "99" (string comparison) will be true.
  // "100" < "99" (string comparison) will be false, which is not what you want when comparing numbers.
  // Using parseInt ensures that the input value is converted to an integer, allowing for proper numerical comparisons.
  // Як зробити, щоб інпут почекав, щоб я написав число. А не зразу вибивав, наприклад, 9 -  "Число не потрапляє в діапазон", а 99 - "Число потрапляє в діапазон"
  // 10 for decimal (base 10). Це типу десяткова система числення?
  const a = parseInt(check.value, 10);
  if (a >= 55 && a <= 99) {
    console.log("Число потрапляє в діапазон");
  } else {
    console.log("Число не потрапляє в діапазон");
  }
}

// Є 3 вікові групи : діти (0-16), дорослі (17-60), пенсіонери (61-100). До якої групи відноситься Максим, якщо йому 55 років. Назву групи вивести на екран.
// як написати що від 0 до 16 років? Не через ===?
const age = 55;
if (age >= 0 && age <= 16) {
  console.log("Ти дитина");
} else if (age >= 17 && age <= 60) {
  console.log("Ти дорослий");
} else {
  console.log("Ти пенсіонер");
}

// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число,яке дорівнює сумі букв імені і прізвища. Якщо умова не виконується - вивести “УПС”. Наприклад: “Віктор Сташко” Віктор — 6 літер, Сташко — 6 літер. Виводимо 12. Використовувати вбудований метод length.
// помилка десь
// function checkNameAndSurname() {
//   const name = document.getElementById("name").value;
//   const surname = document.getElementById("surname").value;
//   const result = document.getElementById("result");

//   const nameLength = name.length;
//   const surnameLength = surname.length;

//   if (nameLength > 4 && surnameLength > 5) {
//     const totalLength = nameLength + surnameLength;
//     result.textContent = totalLength;
//   } else {
//     result.textContent = "УПС";
//   }
// }
// Виберіть будь-яке число від 1 до 5 включно через функцію random. За допомогою if else визначіть, що це за число.
// Math.floor(Math.random() * (max - min ) + min);
// Math.floor, щоб було натуральне число
const randomNumber = Math.floor(Math.random() * (5 - 1) + 1);
// console.log(randomNumber);
if (randomNumber === 1) {
  console.log("Тобі випала одиничкa");
} else if (randomNumber === 2) {
  console.log("Тобі випала двієчка");
} else if (randomNumber === 3) {
  console.log("Тобі випала трієчка");
} else if (randomNumber === 4) {
  console.log("Тобі випала четвірочка");
} else {
  console.log("Тобі випала п'ятірочка");
}
// Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".
// const radioButtons = document.querySelectorAll("[name=group1]");
// const multiP = document.getElementById("multiP");
// radioButtons.addEventListener("click, changeLanguage");
// function changeLanguage(event) {
//   const selectedValue = radioButtons.value;
//   switch (selectedValue) {
//     case "ua":
//       multiP.textContent = "Січень";
//       break;
//     case "en":
//       multiP.textContent = "January";
//       break;
//     case "ru":
//       multiP.textContent = "Январь";
//       break;
//     case "fr":
//       multiP.textContent = "Janvier";
//       break;
//     default:
//       multiP.textContent = "В залежності від кнопки буде зміна мови";
//   }
// }
const radioButtons = document.querySelectorAll('input[name="group1"]');
const multiP = document.getElementById("multiP");
const img = document.getElementById("img");
// всеодно треба проговорити
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", changeLanguage);
});

function changeLanguage(event) {
  // не поняв запису після дорівнює
  const selectedValue = event.target.value;

  switch (selectedValue) {
    case "ua":
      multiP.textContent = "Січень";
      img.src = "../img/multinational-corporations-50.jpg";
      break;
    case "en":
      multiP.textContent = "January";
      img.src = "../img/multinational-corporations-50.jpg";
      break;
    case "ru":
      // цікаво, що змінена картинка далі йде, що треба додавати ручками у кожен випадок
      multiP.textContent = "Що тут у нас?";
      img.src = "../img/81f878d5e1ccb9a1cba880557ff564a3.jpg";
      break;
    case "fr":
      multiP.textContent = "Janvier";
      img.src = "../img/multinational-corporations-50.jpg";
      break;
    default:
      multiP.textContent = "В залежності від кнопки буде зміна мови";
  }
}
// Select Radio Buttons:

// const radioButtons = document.querySelectorAll('input[name="group1"]'); selects all radio buttons with the name group1.
// Add Event Listeners:

// radioButtons.forEach(radioButton => { ... }); loops through each radio button.
// radioButton.addEventListener("click", changeLanguage); adds a click event listener to each radio button, so the changeLanguage function is called whenever a radio button is clicked.
// Change Language Function:

// function changeLanguage(event) { ... } defines the function to be called when a radio button is clicked.
// const selectedValue = event.target.value; gets the value of the clicked radio button.
// switch (selectedValue) { ... } uses a switch statement to change the text content of the paragraph based on the selected radio button's value.
// This should ensure that the text in the paragraph element updates correctly based on the selected radio button.
