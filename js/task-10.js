// Напиши скрипт створення і очищення колекції елементів.Користувач
// вводить кількість елементів в input і натискає кнопку Створити,
//   після чого рендериться колекція.Натисненням на кнопку Очистити,
//     колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх
// у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього
// на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб
//  видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const blockBoxesEl = document.querySelector('#boxes');
const buttonlCreateEl = document.querySelector('[data-create]');
const buttonlDeleteEl = document.querySelector('[data-destroy]');
const countElToCreate = document.querySelector('input[type="number"]');

function createBoxes(amount) {
  const arrElements = [];
  let startSizeBlock = 30;
  for (let i = 0; i < amount; i += 1) {
    const newBlock = document.createElement('div');
    newBlock.style.backgroundColor = getRandomHexColor();
    newBlock.style.width = `${startSizeBlock}px`;
    newBlock.style.height = `${startSizeBlock}px`;
    startSizeBlock += 10;
    arrElements.push(newBlock);
  }

  blockBoxesEl.append(...arrElements);
}

function createDivs() {
  createBoxes(Number(countElToCreate.value));
}

function deleteDivs() {
  blockBoxesEl.innerHTML = '';
}

buttonlCreateEl.addEventListener('click', createDivs);
buttonlDeleteEl.addEventListener('click', deleteDivs);
