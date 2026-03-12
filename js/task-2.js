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

// Умова: Напиши функцію getCheapestAvailableProduct(products).
// Вона має повернути об'єкт товару, який має найменшу ціну, але при цьому його кількість (quantity) більша за 0.
const stock = [
  { name: 'Case', price: 200, quantity: 0 },
  { name: 'Fan', price: 500, quantity: 5 },
  { name: 'Cable', price: 300, quantity: 0 },
  { name: 'Power Bank', price: 1200, quantity: 2 },
];

function getCheapestAvailableProduct(products) {
  let minProduct = {};

  for (const product of products) {
    const min = minProduct.price;
    if (min === undefined) {
      if (product.quantity > 0) {
        minProduct = product;
      }
    }
    if (min > product.price && product.quantity > 0) {
      minProduct = product;
    }
  }
  return minProduct;
}
console.log(getCheapestAvailableProduct(stock));

// const result = getCheapestAvailableProduct(stock);
// console.log('>>>function result:::', result);

// Очікуваний результат: { name: 'Fan', price: 500, quantity: 5 }
