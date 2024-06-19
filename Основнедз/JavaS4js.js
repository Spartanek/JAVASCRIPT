// Створити розмітку з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
const forma = document.getElementById("formMonth");
const input = document.querySelector(".inputForCount");
const peshka = document.querySelector(".outputNumber");
forma.addEventListener("submit", functionNumbers);
function functionNumbers(event) {
  event.preventDefault();
  const object = parseInt(input.value);
  switch (object) {
    case 1:
      peshka.textContent = "Йой, ти обрав січень. Це значить, що 31 день. ";
      break;
    case 2:
      peshka.textContent = "Йой, ти обрав лютий. Це значить, що 29 днів. ";
      break;
    case 3:
      peshka.textContent = "Йой, ти обрав березень. Це значить, що 31 день ";
      break;
    case 4:
      peshka.textContent = "Йой, ти обрав квітень. Це значить, що 30 днів ";
      break;
    case 5:
      peshka.textContent = "Йой, ти обрав травень. Це значить, що 31 день";
      break;
    case 6:
      peshka.textContent = "Йой, ти обрав червень. Це значить, що 30 днів ";
      break;
    case 7:
      peshka.textContent = "Йой, ти обрав липень. Це значить, що 31 день";
      break;
    case 8:
      peshka.textContent = "Йой, ти обрав серпень. Це значить, що 31 день ";
      break;
    case 9:
      peshka.textContent = "Йой, ти обрав вересень. Це значить, що 30 днів ";
      break;
    case 10:
      peshka.textContent = "Йой, ти обрав жовтень. Це значить, що 31 день ";
      break;
    case 11:
      peshka.textContent = "Йой, ти обрав листопад. Це значить, що 30 днів";
      break;
    case 12:
      peshka.textContent = "Йой, ти обрав грудень. Це значить, що 31 день";
      break;
    default:
      peshka.textContent = "Йой, щось пішло не так";
      break;
  }
}
