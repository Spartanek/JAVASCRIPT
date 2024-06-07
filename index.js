// 1-е завдання
const a = 5 + 5 + "5";
console.log(a);
console.log(typeof a);
// 2-е завдання
const frage = prompt("Впишіть свою пошту");
alert(`Ваша пошта ${frage}`);
const checking = frage.trim().toLowerCase();
if (checking.includes("@") === true) {
  alert(`Ваш gmail має @`);
  const length = frage.trim().length;
  console.log(`Довжина вашої пошти ${length}`);
  alert(`Довжина вашої пошти ${length}`);
} else {
  console.log("Ви написали брєд, а не пошту");
  alert("Ви написали брєд, а не пошту");
}
// 3-е завдання
const firstWord = "My";
const secondWord = "name";
const thirdWord = "is";
// `${firstWord} ${secondWord} ${thirdWord}`
const fullName = firstWord + secondWord + thirdWord;
const matesha = fullName + "Viktor";
console.log(fullName);
alert(fullName);
console.log(matesha);
alert(matesha);
// 4-е завдання
const userName = prompt("Впишіть своє ім'я");
const payment = 3;
