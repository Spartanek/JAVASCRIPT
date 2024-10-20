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
