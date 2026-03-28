// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const numbersMap = numbers.map(item => item * item);
// console.log(numbersMap);

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const dataflatMap = data.flatMap(item => item.values);
// console.log(dataflatMap);

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const result = people.some(item => item.age < 20);
// console.log(result);

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 7, 8, 10];

// const numbersEvery = numbers.every(item => item % 2 === 0);
// console.log(numbersEvery);

// const numbersEvery1 = numbers.reduce((acc, item) => {
//   return acc && item % 2 === 0;
// }, true);
// console.log(numbersEvery1);

// Знайдіть перше непарне число

const numbers = [2, 1, 6, 8, 9, 10, 12];
