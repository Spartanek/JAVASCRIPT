// Перевірка пароля (if...else):
// створіть блок if else який приймає пароль і перевіряє його на відповідність наступним критеріям:
// "Довжина": Довжина не менше 8 символів
// Вивести console.log() "Пароль прийнято" або відповідне повідомлення про помилку.

// Алгоритм вирішення задачі:
// 1. Створити input
// 2. Знайти цей input
const input = document.getElementById("password");
// 3. Додати слухач подій
input.addEventListener("input", functionSuper);
function functionSuper(e) {
  // (знайти значення input)
  const value = input.value;
  // 4. if else  перевірити довжину value
  value.length >= 8
    ? console.log("Пароль прийнято")
    : console.log("Пароль не прийнято");
}
