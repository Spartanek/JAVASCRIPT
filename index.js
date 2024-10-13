const input1 = document.querySelector(".input1");
const button1 = document.querySelector(".search-button");
const textResult = document.querySelector(".text-result");

button1.addEventListener("click", yearFunction);
function yearFunction() {
  if (input1.value.trim() === "") {
    textResult.textContent = "Ви не заповнили поле";
  } else {
    const value = Number(input1.value);
    textResult.textContent =
      (value % 4 === 0 && value % 100 !== 0) || value % 400 === 0
        ? "Ви народились у високосний рік!"
        : "Ви народились у невисокосний рік.";
    // if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
    //   textResult.textContent = "Ви народились у високосний рік!";
    // } else {
    //   textResult.textContent = "Ви народились у невисокосний рік.";
    // }
  }
}
