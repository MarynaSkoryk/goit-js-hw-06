// Лічильник складається зі спану і кнопок, які по кліку повинні
// збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Створи змінну counterValue, в якій буде зберігатися поточне значення
//  лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй
// значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const buttons = document.querySelectorAll('button');
const resultEl = document.querySelector('#value');

for (const button of buttons) {
  button.addEventListener('click', changeCount);
}

function changeCount() {
  const functionButton = this.dataset.action;
  switch (functionButton) {
    case 'decrement':
      counterValue -= 1;
      break;
    case 'increment':
      counterValue += 1;
      break;
  }
  resultEl.textContent = counterValue;
}
