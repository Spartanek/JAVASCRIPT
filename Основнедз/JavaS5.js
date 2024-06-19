// Створити розмітку з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".
const forma = document.getElementById("colorForma");
const inputyk = document.querySelector(".colourfulInput");
const button = document.querySelector(".buttonColour");
const p = document.querySelector(".peshkaControl");

forma.addEventListener("submit", functionForma);
function functionForma(event) {
  event.preventDefault();
  const info = inputyk.value.trim().toLowerCase();
  if (info === "червоний") {
    p.textContent = "стоп";
  } else if (info === "зелений") {
    p.textContent = "йти";
  } else if (info === "жовтий") {
    p.textContent = "чекати";
  } else {
    p.textContent = "Йой, щось пішло не по-плану";
  }
}
