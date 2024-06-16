// input
const name_input = document.getElementById("name_input");
// span для виводу
const name_output = document.getElementById("name_output");
name_input.addEventListener("input", InputName);
function InputName(event) {
  name_output.textContent = name_input.value;
}

// інше міні-завдання
// трохи дивно виглядає
// чи нормально, що коли набирвається потрібна кількість символів, то воно червоне (що правильно), але коли починаю прибирати елементи, то нічого не змінюється
const checking_input = document.getElementById("validation-input");
// щось з цим блуром і фокусом не зрозуміло, то воно як метод, то як подія
checking_input.addEventListener("blur", Checking);
function Checking(event) {
  if (checking_input.value.length < 6) {
    checking_input.classList.add("valid");
  } else {
    checking_input.classList.add("invalid");
  }
}
// // трохи не зрозумів порядок дій
// if (checking_input.value.length <= 6) {
//   checking_input.classList.add("valid");
// } else {
// }
