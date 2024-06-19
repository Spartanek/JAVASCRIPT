// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік". При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.
const selectTag = document.getElementById("drinkables");
const peshka = document.querySelector(".prostoPeshka");

// const option = document.getElementsByClassName("optional");
selectTag.addEventListener("change", functionChoosing);
function functionChoosing(event) {
  //   const value = option.value;
  const value = selectTag.value;
  switch (value) {
    case "cafe":
      peshka.textContent = "Кава";
      break;
    case "tea":
      peshka.textContent = "Чай";
      break;
    case "juice":
      peshka.textContent = "Сік";
      break;
    default:
      peshka.textContent = "Вивожу улюблений напій";
      break;
  }
}
// What Went Wrong?
//What Went Wrong with option.value:
// When you tried to use const option = document.getElementsByClassName("optional"); and option.value, it did not work because of the following reasons:

// getElementsByClassName Returns a Collection:

// javascript
// Copy code
// const option = document.getElementsByClassName("optional");
// getElementsByClassName("optional") returns an HTMLCollection of all elements with the class optional.
// An HTMLCollection is similar to an array but is not actually an array. It does not have a value property.
// Accessing a Non-existent value Property:

// javascript
// Copy code
// const value = option.value;
// option is an HTMLCollection, and HTMLCollections do not have a value property.
// Trying to access option.value results in undefined, causing your switch statement to default to "Вивожу улюблений напій".
// Correct Approach:
// Instead of using option.value, you should use selectTag.value to get the selected value from the <select> element. This is already correctly done in the following line:

// javascript
// Copy code
// const value = selectTag.value;
// This way, you directly access the value of the currently selected <option> element within the <select> element.
// Всеодно не зрозумів чому ми до option через select зайшли
