function назваФункції(аргумент) {
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
}

// Умова: Напиши функцію getMostExpensiveProduct(products).
// Вона має пройтися по масиву і повернути весь об'єкт товару, у якого найвища ціна.
//
//

const store = [
  { name: 'Laptop', price: 30000 },
  { name: 'Smartphone', price: 150000 },
  { name: 'Tablet', price: 20000 },
];
function getMostExpensiveProduct(products) {
  let result = products[0];

  for (const item of products) {
    if (item.price > result.price) {
      result = item;
    }
  }
  return result;
}
console.log(getMostExpensiveProduct(store));
