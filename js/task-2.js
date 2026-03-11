function calculateTotalPrice(productName) {
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Grip', price: 1200, quantity: 9 },
  ];

  for (const product of products) {
    if (productName === product.name) {
      return product.price * product.quantity;
    }
  }
  return `Product ${productName} not found!`;
}
console.log(calculateTotalPrice('Scanner'));

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

// Функція calculateTotalPrice(productName) приймає один параметр productName - назва товару.
// Функція містить масив об'єктів products з такими властивостями, як name — ім'я товару, price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// Якщо продукту з такою назвою немає, то функція повинна повертати рядок "Product <productName> not found!",
//   де < productName > — це ім'я товару.
