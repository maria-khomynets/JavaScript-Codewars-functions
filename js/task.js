// function bmi(weight, height) {
//   const imt = weight / height ** 2;

//   if (imt <= 18.5) {
//     return 'Underweight';
//   } else if (imt <= 25) {
//     return 'Normal';
//   } else if (imt <= 30) {
//     return 'Overweight';
//   } else {
//     return 'Obese';
//   }
// }
// console.log(bmi(45, 1.67));
// console.log(bmi(90, 1.67));
// console.log(bmi(100, 1.8));

// function findNumber(start, end, divisor) {
//   for (let i = start; i <= end; i++) {
//     if (i % divisor === 0) {
//       divisor = i;
//       return divisor;
//     }
//   }
// }
// console.log(findNumber(2, 6, 5));
// console.log(findNumber(8, 17, 3));

// for (let a = 2; a < 10; a++) {
//   if (a % 2 === 0) {
//     console.log(a);
//   }
// }

for (let a = 10; a > 2; a--) {
  if (a % 2 === 0) {
    console.log(a);
  }
}

let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log(sum);

for (let a = 0; a < 10; a++) {
  console.log('число', a);
}

let stars = '';
for (let i = 5; i > 0; i--) {
  stars += '*';
}
console.log(stars);
let rows = 5; // висота ялинки

for (let i = 1; i <= rows; i++) {
  let line = '';

  // Додаємо пробіли перед зірочками для вирівнювання
  for (let j = 1; j <= rows - i; j++) {
    line += ' ';
  }

  // Додаємо зірочки: 1,3,5,7,...
  for (let k = 1; k <= 2 * i - 1; k++) {
    line += '*';
  }

  console.log(line);
}

// Стовбур ялинки
for (let i = 1; i <= 2; i++) {
  let trunk = '';
  for (let j = 1; j <= rows - 1; j++) {
    trunk += ' ';
  }
  trunk += '|';
  console.log(trunk);
}
