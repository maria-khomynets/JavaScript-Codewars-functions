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

// У нас є масив транзакцій, де кожна має тип: 'income' (дохід) або 'expense' (витрата).
//     Умова: Напиши функцію calculateBalance(transactions).
// Вона має порахувати фінальний баланс: доходи додаємо, витрати віднімаємо.
const history = [
  { amount: 1000, type: 'income' },
  { amount: 200, type: 'expense' },
  { amount: 500, type: 'income' },
  { amount: 400, type: 'expense' },
];
function calculateBalance(transactions) {
  let total = 0;
  for (const item of transactions) {
    if (item.type === 'income') {
      total += item.amount;
    }
    if (item.type === 'expense') {
      total -= item.amount;
    }
  }
  console.log(total);
}

const result = calculateBalance(history);
console.log('>>>function result:::', result);
