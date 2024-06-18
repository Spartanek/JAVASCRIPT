// Супертворчі завдання
// 1. Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:
// 'Ви зможете забрати товар завтра з 12:00 в нашому офісі'
// 'Кур"єр доставить замовлення завтра з 9:00 до 18:00'
// 'Посилка буде відправлена сьогодні'
// 'Вам передзвонит менеджер'
const p = document.getElementById("peshka");
const radioButtons = document.querySelectorAll('input[name="group1"]');
radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", Ware);
});
function Ware(event) {
  const selectedValue = event.target.value;
  switch (selectedValue) {
    case "kurier":
      p.textContent = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
      break;
    case "mitnehmen":
      p.textContent = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
      break;
    case "post":
      p.textContent = "Посилка буде відправлена сьогодні";
      break;
    default:
      p.textContent = "Вам передзвонить менеджер";
  }
}
// 2. Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.
const auswahl = parseInt(
  prompt("Напишіть який отель Ви хочете по кількості зірок")
);
switch (auswahl) {
  case 1:
    alert("Гарний вибір, ми вже чекаємо 20$ на наш рахунок");
    break;
  case 2:
    alert("Гарний вибір, ми вже чекаємо 30$ на наш рахунок");
    break;
  case 3:
    alert("Гарний вибір, ми вже чекаємо 50$ на наш рахунок");
    break;
  case 4:
    alert("Гарний вибір, ми вже чекаємо 70$ на наш рахунок");
    break;
  case 5:
    alert("Файно, ми вже чекаємо 120$ на наш рахунок");
    break;
  default:
    alert("Такої кількості зірок немає, точніше ще не винайшли");
    break;
}
