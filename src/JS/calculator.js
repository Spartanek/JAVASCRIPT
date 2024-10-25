const firstInput = document.querySelector('.first-number-input');
const secondInput = document.querySelector('.second-number-input');
const textResult = document.querySelector('.calculator-text-result');
let operation = null;

// Add operation
document.querySelector('.add-button').addEventListener('click', () => {
  operation = 'add';
});

document.querySelector('.multiply-button').addEventListener('click', () => {
  operation = 'multiply';
});

document.querySelector('.subtract-button').addEventListener('click', () => {
  operation = 'subtract';
});

document.querySelector('.divide-button').addEventListener('click', () => {
  operation = 'divide';
});

document.querySelector('.equal-button').addEventListener('click', () => {
  const firstInputValue = Number(firstInput.value);
  const secondInputValue = Number(secondInput.value);

  if (isNaN(firstInputValue) || isNaN(secondInputValue)) {
    textResult.textContent = 'Хоча б один інпут не має чисел, а букви';
    return;
  }

  if (operation === 'add') {
    const result = firstInputValue + secondInputValue;
    textResult.textContent = `Результат додавання: ${result}`;
  } else if (operation === 'multiply') {
    const result = firstInputValue * secondInputValue;
    textResult.textContent = `Результат множення: ${result}`;
  } else if (operation === 'subtract') {
    const result = firstInputValue - secondInputValue;
    textResult.textContent = `Результат віднімання: ${result}`;
  } else if (operation === 'divide') {
    if (secondInputValue === 0) {
      textResult.textContent = 'Не можна ділити на нуль';
    } else {
      const result = firstInputValue / secondInputValue;
      textResult.textContent = `Результат ділення: ${result}`;
    }
  }
});
