//function назваФункції(аргумент) {
// 1. "Що я маю отримати в кінці?"
// (Масив значень? Число-суму? Один об'єкт?)
// -> Створюємо "кошик": let result = []; або let total = 0;
// 2. "Як мені взяти в руки кожен елемент ?"
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

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів.
//   Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
//  Тобто порахувати загальну кількість товарів в об’єкті products і повернути true,
//   якщо вона менше або дорівнює containerSize, і false, якщо ні.
// function isEnoughCapacity(products, containerSize) {
//   let total = 0;

//   for (const key in products) {
//     total += products[key];
//   }
//   return total < containerSize;
//   // if (total < containerSize) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// // Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій,
// //   які спортсмен споживав протягом тижня.
// //   Функція очікує один параметр: days — масив об’єктів.Кожен об’єкт описує день тижня та кількість калорій calories,
// //   спожитих спортсменом, у цей день.Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
// // У консоль будуть виведені результати її викликів.

// function calcAverageCalories(days) {
//   let total = 0;
//   if (days.length === 0) {
//     return total;
//   }
//   for (const item of days) {
//     total += item.calories;
//   }
//   return total / days.length;
// }

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 3010 },
//     { day: 'tuesday', calories: 3200 },
//     { day: 'wednesday', calories: 3120 },
//     { day: 'thursday', calories: 2900 },
//     { day: 'friday', calories: 3450 },
//     { day: 'saturday', calories: 3280 },
//     { day: 'sunday', calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: 'monday', calories: 2040 },
//     { day: 'tuesday', calories: 2270 },
//     { day: 'wednesday', calories: 2420 },
//     { day: 'thursday', calories: 1900 },
//     { day: 'friday', calories: 2370 },
//     { day: 'saturday', calories: 2280 },
//     { day: 'sunday', calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0
