// // Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// // (запитуй це значення у користувача через prompt).
// // Якщо вона має значення '1', то у змінну result запишіть 'зима',
// // якщо має значення '2' - 'весна' і так далі.
// // Розв'яжіть завдання через switch-case.
// // Не забудьте про дефолтне значення, на випадок, якщо користувач
// // введе в prompt щось інше. В такому випадку result має набувати значення:
// // "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// // Значення змінної result виведіть в консоль.

// // function season(num) {
// //   if (num === 1) {
// //     return 'зима';
// //   } else if (num === 2) {
// //     return 'весна';
// //   } else if (num === 3) {
// //     return 'лiто';
// //   } else if (num === 4) {
// //     return 'осінь';
// //   } else {
// //     return 'неправильне знач';
// //   }
// // }
// // console.log(season(5));

// // // Отримуйте від користувача число (кількість хвилин) через prompt
// // // і виводьте у консоль рядок у форматі годин та хвилин.
// // // Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// // // Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples

// // function formatTime(minutes) {
// //   const hours = Math.floor(minutes / 60);
// //   const mins = minutes % 60;

// //   let h;
// //   let m;

// //   if (hours < 10) {
// //     h = '0' + hours;
// //   } else {
// //     h = hours;
// //   }

// //   if (mins < 10) {
// //     m = '0' + mins;
// //   } else {
// //     m = mins;
// //   }

// //   return h + ':' + m;
// // }

// // console.log(formatTime(78));

// // Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

// // for (let a = 23; a <= 30; a++) {
// //   console.log(a);
// // }

// // let i = 0;

// // while (i <= 5) {
// //   console.log(i);
// //   i++;
// // }

// // Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// // мінімальне і максимальне число відповідно.
// // Напишіть цикл всередині функції, який виводить у консоль
// // всі числа від max до min за спаданням.
// // Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// // і поверніть її з функції.

// function getNumbers(min, max) {
//   let sum = 0;
//   for (let a = max; a >= min; a--) {
//     console.log(a);
//     if (a % 2 === 0) {
//       sum += a;
//     }
//   }
//   return sum;
// }
// console.log(getNumbers(1, 10));

// // Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// // Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// // повертати з функції рядок - 'Not a number!'.

// function min(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     return 'Not a number!';
//   } else if (a > b) {
//     return b;
//   } else {
//     return a;
//   }
// }
// console.log(min(67, 71));

// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// function isAdult(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('немає 18 років');
//   }
// }
// console.log(isAdult(14));
// // Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// // Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// // якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// // якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// function fizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(15);

// function getExtremeElements(array) {
//   const firstElement = array[0];
//   const lastElement = array[array.length - 1];

//   return [firstElement, lastElement];
// }
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));

// function getLength(array) {
//   const str = array.join('');
//   const strSymbol = str.length;
//   return strSymbol;
// }
// console.log(getLength(['Mango', 'hurries', 'to', 'the', 'train']));

const planets = ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'];
console.log(planets.slice(3, -1)); // ["Jupiter", "Saturn"]

function getSlice(array, value) {
  const ind = array.indexOf(value);
  const aray = array.slice(0, ind + 1);
  if (ind !== -1) {
    return aray;
  } else {
    return [];
  }
}
console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Pfoly'));
