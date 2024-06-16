const redRadioButton = document.querySelector("[value = red]");
const whiteRadioButton = document.querySelector("[value = white]");
const greenRadioButton = document.querySelector("[value = green]");
// просто тестинг
// if (redRadioButton.checked) {
//   document.body.style.backgroundColor = "red";
// }
// if (whiteRadioButton.checked) {
//   document.body.style.backgroundColor = "white";
// } else {
//   document.body.style.backgroundColor = "green";
// }
// click, change існує, але не існує checked
redRadioButton.addEventListener("click", redChange);
whiteRadioButton.addEventListener("click", whiteChange);
greenRadioButton.addEventListener("click", greenChange);

function redChange(event) {
  document.body.style.backgroundColor = "red";
}
function whiteChange(event) {
  document.body.style.backgroundColor = "white";
}
function greenChange(event) {
  document.body.style.backgroundColor = "green";
}
