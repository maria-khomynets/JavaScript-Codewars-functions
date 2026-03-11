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

// Умова: Напиши функцію calculateLowStockValue(products, threshold).
//  Вона має додати до загальної вартості лише ті товари, у яких quantity менше за threshold.
//
const warehouse = [
  { name: 'Monitor', price: 5000, quantity: 2 }, // Додаємо (5000 * 2)
  { name: 'Mouse', price: 300, quantity: 10 }, // Пропускаємо (багато на складі)
  { name: 'Keyboard', price: 800, quantity: 3 }, // Додаємо (800 * 3)
];

// Виклик: calculateLowStockValue(warehouse, 5)
//Очікуваний результат: 12400
function calculateLowStockValue(products, threshold) {
  let total = 0;
  for (const item of products) {
    if (threshold > item.quantity) {
      total += item.price * item.quantity;
    }
  }
  console.log(total);
}
calculateLowStockValue(warehouse, 5);
