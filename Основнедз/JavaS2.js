// Створити розмітку з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
const inputDays = document.getElementById("inputDays");
const buttonDays = document.getElementById("buttonDays");
const neprostoPeshka = document.querySelector(".neprostoPeshka");
const form = document.getElementById("dayForm");

// Add event listener to the form to call daysFinalizing on submit
form.addEventListener("submit", daysFinalizing);
// знову неправильно зрозумів куди вішати event listener
// inputDays.addEventListener("input", daysChoosing);
// buttonDays.addEventListener("click", daysFinalizing);
// function daysChoosing(event) {
// const inputInfo = inputDays.value.trim().toLowerCase();
// }

function daysFinalizing(event) {
  event.preventDefault(); // Prevent form from submitting
  // наступний рядок коду ламав увесь код, бо не знаходився поза функцією
  // Get the input value and process it
  const inputInfo = inputDays.value.trim().toLowerCase();
  // Check if the input matches any of the working days
  if (
    inputInfo === "понеділок" ||
    inputInfo === "вівторок" ||
    inputInfo === "середа" ||
    inputInfo === "четвер" ||
    inputInfo === "п'ятниця"
  ) {
    neprostoPeshka.textContent = `Це робочий день, а саме ${inputInfo}`;
  } // Check if the input matches any of the weekend days
  else if (inputInfo === "субота" || inputInfo === "неділя") {
    neprostoPeshka.textContent = `Це вихідний день, а саме ${inputInfo}`;
  } // If input doesn't match any known days
  else {
    neprostoPeshka.textContent = "Щось Ви десь помилились";
  }
}
