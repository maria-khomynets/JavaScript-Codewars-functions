// -------------------------------- 4

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

function logItems(arr) {
  let ar = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1} - ${arr[i]}`);
  }
}

console.log(logItems(['🍎', '🍇', '🍑', '🍌', '🍋']));
logItems(['Mango', 'Poly', 'Ajax']);

/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//   const name = names.split(',');
//   const phone = phones.split(',');

//   for (let i = 0; i < name.length; i++) {
//     console.log(name[i], phone[i]);
//   }
// }
// printInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

/**
 * Напиши функцію formatTime(totalMinutes) яка переведе значення
 * totalMinutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;
  console.log(hours);
  console.log(minute);
  console.log(`${hours}:${minute}`);
}
formatTime(70);
// console.log(formatTime(70)); // 1:10
// console.log(formatTime(460));
// console.log(formatTime(1441));
