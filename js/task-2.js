//function назваФункції(аргумент) {
// 1. "Що я маю отримати в кінці?"
// (Масив значень? Число-суму? Один об'єкт?)
// -> Створюємо "кошик": let result = []; або let total = 0;
// 2. "Як мені взяти в руки кожен елемент масиву?"
// -> Пишемо цикл: for (const item of array) {
// 3. "Чи всі елементи мені підходять?"
// (Чи є в об'єкті такий ключ? Чи ціна більша за 100?)
// -> Пишемо умову: if (умова) {
// 4. "Що саме я хочу забрати з цього елемента?"
// (Весь об'єкт чи тільки одне його поле?)
// -> Додаємо в кошик: result.push(item[propName]);
// } (закриваємо if)
// } (закриваємо for)
// 5. "Я не забув віддати те, що зібрав?"
// -> Пишемо: return result;

// Умова: Напиши функцію getLongestMessageByAuthor(messages, authorName).
// Вона має знайти всі повідомлення автора authorName і серед них повернути те,
//     у якого текст(text) має найбільшу довжину(.length).

const chat = [
  { author: 'Mango', text: 'Hello!' },
  { author: 'Poly', text: 'I agree!' },
  { author: 'Mango', text: 'I am learning JavaScript, it is awesome!' },
  { author: 'Poly', text: 'Hi there, how are you?' },
];

function getLongestMessageByAuthor(messages, authorName) {
  let result = {};
  let messagesByAutor = [];
  //крок 1 зробити новий масив з заданим автором
  for (const iteMmessages of messages) {
    if (authorName === iteMmessages.author) {
      messagesByAutor.push(iteMmessages);
    }
  }
  console.log(messagesByAutor);
  //крок 2 знайти в кого найбільше повідомлення
  let min = messagesByAutor[0];
  for (const itemAutor of messagesByAutor) {
    if (min.text.length < itemAutor.text.length) {
      min = itemAutor;
    }
  }
  console.log(min);
}
const result = getLongestMessageByAuthor(chat, 'Poly');
console.log('>>>function result:::', result);

// Очікуваний результат: { author: 'Poly', text: 'Hi there, how are you?' }
