const povzunok = document.getElementById("font-size-control");
const text = document.getElementById("text");
povzunok.addEventListener("input", Drag);
// function Drag(event) {
//   text.fontSize = text + "25px";
// }
// function Drag(event) {
//   text = contentString.fontsize(3);
// }
// просто зменшується
// function Drag(event) {
//   text.style.fontSize = "7pt";
// }
// тут мабуть через цикл йде
// я не знаю, як зробити, щоб воно правильно зменшувалось і збільшувалось
function Drag(event) {
  text.style.fontSize = povzunok.value + "px";
}
