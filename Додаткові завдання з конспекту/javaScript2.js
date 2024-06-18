// let a = значення інпуту;

// if (a === 0) {
//     p.textContent = 0;
// }

// if (a === 1) {
//     p.textContent = 1;
// }

// if (a === 2 || a === 3) {
//     p.textContent = '2,3';
// }
const input = document.querySelector(".inputyk");
// console.log(input);

const peshka = document.querySelector(".input-text");
// console.log(peshka);
input.addEventListener("input", writeDown);
function writeDown(event) {
  // converts the input value to an integer, ensuring proper numerical comparison.
  const a = parseInt(input.value, 10);
  if (a === 0) {
    peshka.textContent = 0;
  } else if (a === 1) {
    peshka.textContent = 1;
  } else if (a === 2 || a === 3) {
    peshka.textContent = "2,3";
  }
  //   else {
  //     peshka.textContent(
  //       "Ти не попав по клавіатурі, бажаного результату не буде"
  //     );
  //   }
}
