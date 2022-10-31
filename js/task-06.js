// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє
// його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

//     Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті
// data - length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//     якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid, які ми вже
// додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', checkCountSymbol);

function changeStyles(element, remove, add) {
  element.classList.remove(remove);
  element.classList.add(add);
}

function checkCountSymbol() {
  if (Number(this.dataset.length) === this.value.length) {
    changeStyles(inputEl, 'invalid', 'valid');
  } else {
    changeStyles(inputEl, 'valid', 'invalid');
  }
}
