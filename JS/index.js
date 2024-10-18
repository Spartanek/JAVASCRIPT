const input1 = document.querySelector(".leap-year-number-input");
const button1 = document.querySelector(".leap-year-search-button");
const textResult1 = document.querySelector(".leap-year-text-result");
// TODO:
// FIXME:
button1.addEventListener("click", yearFunction);
function yearFunction() {
  if (input1.value === "") {
    textResult1.textContent = "Ви не заповнили поле";
  } else {
    const value = Number(input1.value);
    textResult1.textContent =
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
const input2 = document.querySelector(".guess-number-input");
const button2 = document.querySelector(".guess-number-search-button");
const textResult2 = document.querySelector(".guess-number-text-result");
const numberArray = [42, 73, 1337, 1914, 1939, 2014, 2022];
button2.addEventListener("click", numberFunction);
function numberFunction() {
  // не поняв, що якщо наприклад неіснуюче число введу, то вона також буде підпадати під цю умову
  // дивно, що без цього не функціонувало
  const value = Number(input2.value);
  if (value === "") {
    textResult2.textContent = "Ви не заповнили поле";
    return;
  }
  switch (value) {
    case 42:
      textResult2.textContent =
        "42 - відповідь на головне питання життя, Всесвіту і всього іншого.";
      break;
    case 73:
      textResult2.textContent =
        "73 - улюблене число Шелдона Купера з Теорії великого вибуху.";
      break;
    case 1337:
      textResult2.textContent =
        "1337 - це Leet, що означає 'elite' в геймерській культурі.";
      break;
    case 1914:
      textResult2.textContent = "1914 - рік початку Першої світової війни.";
      break;
    case 1939:
      textResult2.textContent = "1939 - рік початку Другої світової війни.";
      break;
    case 2014:
      textResult2.textContent =
        "2014 - рік, коли Україна зазнала анексії Криму.";
      break;
    case 2022:
      textResult2.textContent =
        "2022 - рік початку широкомасштабного вторгнення в Україну.";
      break;
    default:
      textResult2.textContent = "Число не знайдено в списку.";
  }
}
