// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
// помилки: querySelector потребує дужки і крапку (як селектор класу)
// input працює для будь-яких майже інпутів
// у switch можна написати кейси з string та number (якщо число, то лапки біля case не треба, а значення, що вписується в input треба переробити в число )
const numberInput = document.querySelector(".numberMonth");
const forma = document.querySelector(".formaPersha");
const peshka = document.querySelector(".textMonth");
forma.addEventListener("submit", functionMonth);
function functionMonth(event) {
  event.preventDefault();
  const object = parseInt(numberInput.value);
  switch (object) {
    case 1:
      peshka.textContent =
        "Йой, ти обрав січень. Це значить, що пора року - зима";
      break;
    case 2:
      peshka.textContent =
        "Йой, ти обрав лютий. Це значить, що пора року - зима";
      break;
    case 3:
      peshka.textContent =
        "Йой, ти обрав березень. Це значить, що пора року - весна";
      break;
    case 4:
      peshka.textContent =
        "Йой, ти обрав квітень. Це значить, що пора року - весна";
      break;
    case 5:
      peshka.textContent =
        "Йой, ти обрав травень. Це значить, що пора року - весна";
      break;
    case 6:
      peshka.textContent =
        "Йой, ти обрав червень. Це значить, що пора року - літо";
      break;
    case 7:
      peshka.textContent =
        "Йой, ти обрав липень. Це значить, що пора року - літо";
      break;
    case 8:
      peshka.textContent =
        "Йой, ти обрав серпень. Це значить, що пора року - літо";
      break;
    case 9:
      peshka.textContent =
        "Йой, ти обрав вересень. Це значить, що пора року - осінь";
      break;
    case 10:
      peshka.textContent =
        "Йой, ти обрав жовтень. Це значить, що пора року - осінь";
      break;
    case 11:
      peshka.textContent =
        "Йой, ти обрав листопад. Це значить, що пора року - осінь";
      break;
    case 12:
      peshka.textContent =
        "Йой, ти обрав грудень. Це значить, що пора року - зима. Зі скорішим Новим роком!";
      break;
    default:
      peshka.textContent = "Йой, щось пішло не так";
      break;
  }
}
