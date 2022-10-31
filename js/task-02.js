// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод
// document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список
// ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = dokument.querySelector('ul#ingredients');

function createItem(text) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = text;
  return itemEl;
}

const items = ingredients.map(createItem);
list.append(...items);
