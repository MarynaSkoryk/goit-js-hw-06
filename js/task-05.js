// Напиши скрипт, який під час набору тексту в інпуті input#name - input
//     (подія input), підставляє його поточне значення в span#name - output.
//     Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');

function changeText(message) {
  console.log(message.data, message);
  if (this.value.length > 0) {
    spanEl.textContent = this.value;
  } else {
    spanEl.textContent = 'Anonymous';
  }
}
inputEl.addEventListener('input', changeText);
