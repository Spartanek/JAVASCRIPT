function yearFunction() {
  // Trim the input value to avoid any accidental spaces
  if (input1.value.trim() === "") {
    textResult.textContent = "Ви не заповнили поле";
  } else {
    const value = Number(input1.value);
    // Check if the value is a valid number
    if (isNaN(value)) {
      textResult.textContent = "Введіть валідний рік";
      return;
    }

    // Check if the year is a leap year
    if ((value % 4 === 0 && value % 100 !== 0) || value % 400 === 0) {
      textResult.textContent = "Ви народились у високосний рік!";
    } else {
      textResult.textContent = "Ви народились у невисокосний рік.";
    }
  }
}
