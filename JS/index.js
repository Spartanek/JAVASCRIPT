// TODO:
// FIXME:
// 1 exercise
const input1 = document.querySelector(".leap-year-number-input");
const button1 = document.querySelector(".leap-year-search-button");
const textResult1 = document.querySelector(".leap-year-text-result");

button1.addEventListener("click", yearFunction);
function yearFunction() {
  if (input1.value === "") {
    textResult1.textContent = "Ви не заповнили поле";
  } else {
    const value = Number(input1.value);
    if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
      textResult1.textContent = "Ви народились у високосний рік!";
    } else {
      textResult1.textContent = "Ви народились у невисокосний рік.";
    }
  }
}
// 2 exercise
const input2 = document.querySelector(".guess-number-input");
const button2 = document.querySelector(".guess-number-search-button");
const textResult2 = document.querySelector(".guess-number-text-result");

//TODO:
// чи можна їх в окремий об'єкт поставити
const numberArray = [1337, 1914, 1939, 2014, 2022];
const randomNumber = Math.floor(Math.random() * 100 - 1);
console.log(randomNumber);
button2.addEventListener("click", numberFunction);
function numberFunction() {
  const valueInput2 = Number(input2.value);
  if (valueInput2 === 0) {
    textResult2.textContent = "Ви не заповнили поле";
    return;
  }
  if (valueInput2 === randomNumber) {
    textResult2.textContent = "Ви вгадали число";
    textResult2.style.color = "green";
    return;
  }
  if (valueInput2 !== randomNumber) {
    textResult2.textContent = "Ви не вгадали число";
    textResult2.style.color = "red";
  }
  if (numberArray.includes(valueInput2)) {
    switch (valueInput2) {
      case 1337:
        console.log("You found an Easteregg!");
        break;
      case 1914:
        console.log("You found an Easteregg!");
        break;
      default:
        break;
    }
  }
}
// 3 exercise
// 4 exercise

// 5 exercise
const input3 = document.querySelector(".calculate-time-number-input");
const button3 = document.querySelector(".calculate-time-search-button");
const textResult3 = document.querySelector(".calculate-time-text-result");
button3.addEventListener("click", calculateTimeFunction);
function calculateTimeFunction() {
  let value = Number(input3.value);
  // 500
  if (isNaN(value) || value <= 0) {
    textResult3.textContent = "Ви не заповнили поле";
    return;
  } else {
    // Округлення, value (кількість секунд), де 3600 - кількість секунд в одній годині, а 24 кількість годин у дні
    let days = Math.floor(value / (24 * 3600));
    // Перевизначили value, отримали остачу від ділення на 86400 і записали назад
    value %= 24 * 3600;
    // Все що залишилось переробили в години, де 3600 - кількість секунд в одній годині
    let hours = Math.floor(value / 3600);
    // Відняли все, що залишилось від value
    value %= 3600;
    // все що залишилось від value переробили в секунди, отримавши остачу від ділення
    let seconds = Math.floor(value % 60);
    // все що залишилось від value переробили в хвилини
    let minutes = Math.floor(value / 60);

    // 3600 секунд в годині
    // 3600 * 24 в дні
    // Обчислення годин, що залишаються після виділення днів

    // Обчислення хвилин, що залишаються після виділення годин

    const message = `${days} day, ${hours} hour, ${minutes} minute, ${seconds} second`;
    textResult3.textContent = message;
  }
}

// 6 exercise
// 7 exercise
// 8 exercise

// 9 exercise
// 10 exercise
