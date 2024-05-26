// 1-е завдання
const messageTemperature = prompt(
  "дай мені температуру в Цельсіях (просто число)"
);
// криво дужки працюють, не можу розбити покроково дії для js
const tranformTemperature = (messageTemperature * 9) / 5 + 32;
alert(
  "Бум, магія, твої цельсії це" +
    " " +
    tranformTemperature +
    " " +
    "фаренгейтів"
);
// 2-е завдання
// чи взагалі грають роль подвійні лапки чи одинарні?
const numberDays = prompt(
  "Впишіть кількість днів у будь-якому місяці, будь ласка"
);
if (numberDays <= 31 && numberDays >= 28) {
  const calculationsHours = numberDays * 24;
  const numberHours = alert(
    "Кількість годин у цих днях" + " " + calculationsHours
  );
  console.log("Кількість годин у цих днях" + " " + calculationsHours);
  const calculationsMinutes = calculationsHours * 60;
  const numberMinutes = alert(
    "Кількість хвилин у цих днях" + " " + calculationsMinutes
  );
  console.log("Кількість хвилин у цих днях" + " " + calculationsMinutes);
} else {
  alert("Ви мабуть шуткуєте, місяць не має стількох днів");
  console.log("Ви мабуть шуткуєте, місяць не має стількох днів");
}

// 3-е завдання
// randomInteger не працює
// const healthPlayer = randomInteger(1, 100);
// const message = alert("Вам гра дала" + " " + healthPlayer + "очків здоров'я");
// const energyPlayer = randomInteger(2, 50);
// alert("Вам гра дала" + " " + energyPlayer + "очків енергії");
// const calculationsCrocosyabra = randomInteger(0, 20);
// const crocosyabraHealth = healthPlayer - calculationsCrocosyabra;
// const crocosyabraEnergie = energyPlayer - calculationsCrocosyabra;
// alert(
//   "О, ні, ви зустріли крокозябру. Після такої зустрічі, у вас залишилось" +
//     " " +
//     crocosyabraHealth +
//     "очок здоров'я і" +
//     " " +
//     crocosyabraEnergie +
//     "очок енергії"
// );
// console.log(
//   "О, ні, ви зустріли крокозябру. Після такої зустрічі, у вас залишилось" +
//     " " +
//     crocosyabraHealth +
//     "очок здоров'я і" +
//     " " +
//     crocosyabraEnergie +
//     "очок енергії"
// );
// функція для рандомних чисел

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const healthPlayer = getRandomInt(100);
const message = alert(
  "Вам гра дала" + " " + healthPlayer + " " + "очків здоров'я"
);
const energyPlayer = getRandomInt(50);
alert("Вам гра дала" + " " + energyPlayer + " " + "очків енергії");
const calculationsCrocosyabra = getRandomInt(20);
const crocosyabraHealth = healthPlayer - calculationsCrocosyabra;
const crocosyabraEnergie = energyPlayer - calculationsCrocosyabra;
alert(
  "О, ні, ви зустріли крокозябру. Після такої зустрічі, у вас залишилось" +
    " " +
    crocosyabraHealth +
    " " +
    "очок здоров'я та" +
    " " +
    crocosyabraEnergie +
    " " +
    "очок енергії"
);
console.log(
  "О, ні, ви зустріли крокозябру. Після такої зустрічі, у вас залишилось" +
    " " +
    crocosyabraHealth +
    " " +
    "очок здоров'я та" +
    " " +
    crocosyabraEnergie +
    " " +
    "очок енергії"
);
// 4-е завдання
// як зробити нормальні пробіли, а не через лапки
const shopping = getRandomInt(1000);
const discount = (shopping / 100) * 10;
const finalPrice = shopping - discount;
const shoppingAlert = alert(
  "Йой, оце ви знатно розгулялись аж на" +
    " " +
    shopping +
    " " +
    "гривень. Задля такого покупця і знижечку можна встановити на цілих 10%. Тепер ваша файна покупка становить" +
    " " +
    finalPrice +
    " " +
    "гривень."
);
console.log(
  "Йой, оце ви знатно розгулялись аж на" +
    " " +
    shopping +
    " " +
    "гривень. Задля такого покупця і знижечку можна встановити на цілих 10%. Тепер ваша файна покупка становить" +
    " " +
    finalPrice +
    " " +
    "гривень."
);

// 5-е завдання
const interestingNumber = prompt(
  "Вбий число із плаваючую комою, де плаваюча кома задається через крапку"
);
const notInterstingNumber = Math.floor(interestingNumber);
alert("Вийшло таке число" + " " + notInterstingNumber);
console.log("Вийшло таке число" + " " + notInterstingNumber);

// 6-е завдання
const floatingPrompt = prompt(
  "Вбий число із плаваючую комою, де плаваюча кома задається через крапку"
);
const firstStep = toString(floatingPrompt);
const secondStep = parseFloat(firstStep);
alert("винесено у консоль.");
console.log("Число змінено на" + " " + secondStep);
// 7-е завдання

const firstLevel = toString(prompt("Впиши ціле число"));
console.log("це тип" + " " + typeof firstLevel);
// я не поняв як перевірку на ціле число зробити
if (Number.isInteger(firstLevel) == false) {
  const secondLevel = Number.parseInt(firstLevel);
} else {
  alert("Зміни число");
}
const someLevel = Number.parseInt(firstLevel);
console.log("а тепер тип" + " " + typeof someLevel);
// 8-е завдання
const sqrtMessageNumber = prompt("Впиши число, щоб знайти корінь");
const sqrtProcessNumber = Math.sqrt(sqrtMessageNumber);
console.log("Корінь твого числа це" + " " + sqrtProcessNumber);
// 9-e завдання
const ryadok = prompt("введи  значення");
const cilochusel = prompt("введи цілочисельне значення");

console.log(parseInt(ryadok));
console.log(cilochusel.toString());
