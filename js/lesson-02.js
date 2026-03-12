// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
//const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');

// for (let i = 0; i < styles.length; i++) {
//   if (styles[i] === 'blues') {
//     styles[i] = 'classic';
//   }
// }
// console.log(styles);

// function logItems(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`${i + 1} -  ${array[i]}`);
//   }
// }
// console.log(logItems(styles));

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ['Peter', 'John', 'Igor', 'Sasha'];
// function checkLogin(array) {
//   const name = prompt("Введіть ваше ім'я");
//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert('User not found');
//   }
//   console.log(name);
//   let isExist = false;
//   for (let i = 0; i < array.length; i++) {
//     isExist = array[i] === name;
//   }
//   if (isExist) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

// function checkLogin(array) {
//   const name = prompt("Введіть ваше ім'я");

//   let isExist = false;

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === name) {
//       isExist = true;
//       break;
//     }
//   }

//   if (isExist) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert('User not found');
//   }
// }

// checkLogin(logins);
// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.
// function caclculateAverage() {
//   let total = 0;
//   for (const arg of arguments) {
//     if (typeof arg === 'number') {
//       total += arg;
//     }
//   }
//   return total / arguments.length;
// }
// console.log(caclculateAverage(1, 'a', 3, 45, 6));

// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

//const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

// function caclculateAverage(array) {
//   const arr = [];

//   for (let i = 0; i < array.length - 1; i += 2) {
//     arr.push(array[i] + array[i + 1]);
//     console.log(array[i] + array[i + 1]);
//   }
//   return arr;
// }
// console.log(caclculateAverage(someArr));
// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

//const numbers = [12, 5, 35, '56', 12, 24, 7, 80, '3'];

// function findSmallestNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return 'Sory, it is not an array!';
//   }
//   let min = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (min > numbers[i]) {
//       min = numbers[i];
//     }
//   }
//   console.log(min);
// }
// findSmallestNumber(logins);

// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// function findLongestWord(string) {
//   const arr = string.split(' ');
//   console.log(arr);
//   let long = arr[0];

//   for (const item of arr) {
//     if (item.length > long.length) {
//       long = item;
//     }
//   }
//   return long;
// }
// console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'

// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// function sal(obj) {
//   if (Object.keys(obj).length === 0) {
//     return 0;
//   }
//   let total = 0;
//   for (const item in obj) {
//     total += obj[item];
//   }
//   console.log(total);
// }
// sal(salaries);

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

const fruits = [
  { name: 'Яблуко', price: 45, quantity: 7 },
  { name: 'Апельсин', price: 60, quantity: 4 },
  { name: 'Банан', price: 125, quantity: 8 },
  { name: 'Груша', price: 350, quantity: 2 },
  { name: 'Виноград', price: 440, quantity: 3 },
  { name: 'Банан', price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {}
