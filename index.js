// 1-e завдання
const button = document.getElementById("knopochka");
button.textContent = "inputyk tyt";
// 2-e завдання
// Чогось не працює. Не поняв як за type, alt ... знаходити
// const img = document.querySelector([(alt = "wow")]);
const img = document.querySelector(".kartynka");
img.src =
  "https://m.media-amazon.com/images/I/61gE4VBMczL._AC_UF894,1000_QL80_.jpg";
// 3-е завдання
const linka = document.querySelector(".sprechen");
linka.href =
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Methods_2";
// const pictura = document.querySelector([(alt = "AVA")]);
// наступний код не працює
// const pictura = document.querySelector(".3savd");
// pictura.alt = "Novyi alt";
// а цей працює
document.getElementById("3savd").alt = "newAlternateText";
// 4-е завдання
// не виходить
const ulElement = document.querySelector(".ulka");
// alert(ulElement.childNodes);
// ulElement.childNodes[0].textContent("Працьовита Бджілка");
