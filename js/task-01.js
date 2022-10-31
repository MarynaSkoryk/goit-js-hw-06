// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item.
// Для кожного элемента li.item у спику ul#categories, знайде і виведе
//  в консоль текст заголовку елемента(тегу < h2 >) і кількість елементів
//   в категорії(усіх < li >, вкладених в нього).

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

for (let item of categories) {
  console.log('');
  console.log(`Category: ${item.querySelector('h2').innerText}`);
  console.log(`Elements: ${item.querySelectorAll('li').length}`);
}
