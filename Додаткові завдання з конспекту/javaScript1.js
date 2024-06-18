// if (browser == "Edge") {
//   p.textContent = "You've got the Edge!";
// } else if (
//   browser == "Chrome" ||
//   browser == "Firefox" ||
//   browser == "Safari" ||
//   browser == "Opera"
// ) {
//   p.textContent = "Ми підтримуємо і ці браузери";
// } else {
//   p.textContent = "Маємо надію, що ця сторінка виглядає добре!";
// }
// Забув як знайти браузер
// const browsernaConst = user.browser.family;
const messagePropmt = prompt("Який у вас браузер?").toLowerCase().trim();
const p = document.querySelector(".testingText");
switch (messagePropmt) {
  case "edge":
    p.textContent = "You've got the Edge!";
    break;
  case "chrome":
    p.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "firefox":
    p.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "safari":
    p.textContent = "Ми підтримуємо і ці браузери";
    break;
  case "opera":
    p.textContent = "Ми підтримуємо і ці браузери";
    break;
  default:
    p.textContent = "Маємо надію, що ця сторінка виглядає добре!";
    break;
}
