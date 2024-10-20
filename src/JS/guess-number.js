const input2 = document.querySelector(".guess-number-input");
const button2 = document.querySelector(".guess-number-search-button");
const textResult2 = document.querySelector(".guess-number-text-result");

//TODO:
// чи можна їх в окремий об'єкт поставити
const numberArray = [1337, 1914, 1939, 2014, 2022];
const randomNumber = Math.floor(Math.random() * 100 - 1);
console.log(randomNumber);
button2.addEventListener("click", numberFunction);
function numberFunction() {
  const valueInput2 = Number(input2.value);
  if (valueInput2 === 0) {
    textResult2.textContent = "Ви не заповнили поле";
    return;
  }
  if (valueInput2 === randomNumber) {
    textResult2.textContent = "Ви вгадали число";
    textResult2.style.color = "green";
    return;
  }
  if (valueInput2 !== randomNumber) {
    textResult2.textContent = "Ви не вгадали число";
    textResult2.style.color = "red";
    return;
  }
  if (numberArray.includes(valueInput2)) {
    switch (valueInput2) {
      case 1337:
        console.log("You found an Easteregg!");
        break;
      case 1914:
        console.log("You found an Easteregg!");
        break;
      case 1939:
        console.log("You found an Easteregg!");
        break;
      case 2014:
        console.log("You found an Easteregg!");
        break;
      case 2022:
        console.log("You found an Easteregg!");
        break;
      default:
        break;
    }
  }
}
