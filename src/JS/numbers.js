// const numbers_input = document.querySelectorAll('.numbers-input');
const resultText = document.querySelector('.numbers-text-result');
const input1 = document.querySelector('.number-input1');
const input2 = document.querySelector('.number-input2');
const input3 = document.querySelector('.number-input3');

const maxingFunction = () => {
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  const value3 = Number(input3.value);
  const ifStatement =
    !isNaN(value1) &&
    value1 !== '' &&
    !isNaN(value2) &&
    value2 !== '' &&
    !isNaN(value3) &&
    value3 !== '';
  if (ifStatement) {
    const maxValue = Math.max(value1, value2, value3);
    return (resultText.textContent = `Максимальне значення ${maxValue}`);
  } else {
    return (resultText.textContent = 'помилка');
  }
};
input1.addEventListener('input', maxingFunction);
input2.addEventListener('input', maxingFunction);
input3.addEventListener('input', maxingFunction);
