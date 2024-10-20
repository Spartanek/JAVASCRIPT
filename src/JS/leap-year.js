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
