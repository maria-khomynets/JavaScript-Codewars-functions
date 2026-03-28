// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).
// const styles = ['jazz', 'blues'];
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

//const logins = ['Peter', 'John', 'Igor', 'Sasha'];

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

// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою
// назвою фрукта, це також треба урахувати.

// const fruits = [
//   { name: 'Яблуко', price: 45, quantity: 7 },
//   { name: 'Апельсин', price: 60, quantity: 4 },
//   { name: 'Банан', price: 125, quantity: 8 },
//   { name: 'Груша', price: 350, quantity: 2 },
//   { name: 'Виноград', price: 440, quantity: 3 },
//   { name: 'Банан', price: 125, quantity: 3 },
// ];

// function calcTotalPrice(fruits, fruitName) {
//   let totalPrice = 0;

//   for (let element of fruits) {
//     if (fruitName === element.name) {
//       totalPrice += element.price * element.quantity;
//     }
//   }
//   if (totalPrice === 0) {
//     return `Product ${fruitName} not found!`;
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(fruits, 'Банан'));

// function getExtremeScores(scores) {
//   return {
//   best: (Math.max(...scores))
// worst: (Math.min(...scores))
//   }
// }
// console;

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
//   квадрати кожного елементу вхідного масиву.
//  Очікуваний результат: [1, 4, 9, 16, 25].
//
// const numbers = [1, 2, 3, 4, 5];
// const numbersMap = numbers.map(item => item * item);
// console.log(numbersMap);

// // Дано масив об'єктів. Створіть новий масив, що містить всі значення
// // з масивів values кожного об'єкту, збережених в одному масиві.
// // Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const dataM = data.flatMap(item => item.values);
// console.log(dataM);

// // Дано масив об'єктів.
// // Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// // Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// // const peopleF = people.find(item => item.age < 20);
// // console.log(peopleF);
// const result = people.some(item => item.age < 20);
// console.log(result);

// // Дано масив чисел [2, 4, 6, 8, 10].
// // Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers1 = [2, 4, 6, 8, 10];
// const result1 = numbers1.every(item => item % 2 === 0);
// console.log(result1);

// // Знайдіть перше непарне число

// const numbers2 = [2, 1, 6, 8, 9, 10, 12];

// const numbers2W = numbers2.find(item => item % 2 !== 0);
// console.log(numbers2W);

// // Відсортуйте масив чисел [4, 2, 5, 1, 3]
// // у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];
// const numbersArrayS = numbersArray.toSorted((a, b) => a - b);
// console.log(numbersArrayS);

// // Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
// //  у порядку алфавіту.
// // Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const stringArrayS = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(stringArrayS);

// //  Відсортуйте масив об'єктів за віком у порядку зростання.
// // Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const usersSorted = users.toSorted((a, b) => a.age - b.age);
// console.log(usersSorted);

// // Дано масив об'єктів.
// // Створіть новий масив, що містить тільки об'єкти, в яких
// // вік більше 20 років.
// // Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user1 = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const rez = user1.filter(item => item.age > 20);
// console.log(rez);

// // Дано масив чисел [1, 2, 3, 4, 5].
// // Застосуйте метод для обчислення суми елементів масиву.

// const numbers3 = [1, 2, 3, 4, 5, 6];
// const rez1 = numbers3.reduce((acc, num) => {
//   return acc + num;
// }, 0);
// console.log(rez1); //  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.
// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// - метод subtract - Віднімає value від поточного значення. Повертає this.
// - метод multiply -Множить поточне значення на value. Повертає this.
// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
// Приклад використання:
// const calc = new Calculator();
// Розроби клас Calculator, який дозволяє виконувати арифметичні
// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.
// const result = calc
//   .number(10)   // Встановлюємо початкове значення 10
//   .add(5)       // Додаємо 5 (10 + 5 = 15)
//   .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4)  // Множимо на 4 (12 * 4 = 48)
//   .divide(2)    // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

//   console.log(result); // 24

// class Calculator {
//   constructor() {
//     this.value = 0;
//   }
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   getResult() {
//     return this.value;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   subtract(value) {
//     this.value -= value;
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       console.log('Не можна ділити на 0');
//       return this;
//     }

//     this.value /= value;
//     return this;
//   }
// }
// const calc = new Calculator();

// const result = calc
//   .number(10)
//   .add(5)
//   .subtract(3)
//   .multiply(4)
//   .divide(2)
//   .getResult();

// console.log(result);
