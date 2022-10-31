// Напиши скрипт, який реагує на зміну значення input#font - size - control
//     (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість
// font - size.В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputEl = document.querySelector('input#font-size-control');
const textEl = document.querySelector('span#text');

textEl.style.fontSize = `${inputEl.value}px`;

function changeFontSize() {
  textEl.style.fontSize = `${this.value}px`;
}
inputEl.addEventListener('input', changeFontSize);
