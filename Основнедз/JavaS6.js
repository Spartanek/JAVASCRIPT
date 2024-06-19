// Створити розмітку з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами.
// Користувач повинен бути попереджений про можливість ділення на нуль. Де це виписати?
const forma = document.querySelector(".formCalculate");
const firstInput = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");
const select = document.getElementById("selectorOperate");
const peshka = document.querySelector(".numberFinish");
forma.addEventListener("submit", functionOperate);
// якщо с буде тільки в ф-ції, то воно не зрозуміє звідки береться зміна, тому виніс
let c;
function functionOperate(event) {
  event.preventDefault();
  // додав ще parse Int, бо було 77+6 = 776
  const a = parseInt(firstInput.value);
  const b = parseInt(secondInput.value);
  switch (select.value) {
    case "plus":
      //   let я далі прибрав, бо це як переназначення, помилка: Identifier 'c' has already been declared
      c = a + b;
      peshka.textContent = `Після додавання стало ${c}`;
      break;
    case "minus":
      //   const змінив на let, бо пише, що ця зміна задана
      c = a - b;
      peshka.textContent = `Після віднімання стало ${c}`;
      break;
    case "multiply":
      c = a * b;
      peshka.textContent = `Після множення стало ${c}`;
      break;
    case "divide":
      c = a / b;
      peshka.textContent = `Після ділення стало ${c}. До речі, ви можете також ділити на нуль`;
      break;
    default:
      peshka.textContent = "щось пішло не плану";
      break;
  }
}
