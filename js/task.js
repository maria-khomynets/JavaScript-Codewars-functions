function bmi(weight, height) {
  const imt = weight / height ** 2;

  if (imt <= 18.5) {
    return 'Underweight';
  } else if (imt <= 25) {
    return 'Normal';
  } else if (imt <= 30) {
    return 'Overweight';
  } else {
    return 'Obese';
  }
}
console.log(bmi(45, 1.67));
console.log(bmi(90, 1.67));
console.log(bmi(100, 1.8));

function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i++) {
    if (i % divisor === 0) {
      divisor = i;
      return divisor;
    }
  }
}
console.log(findNumber(2, 6, 5));
console.log(findNumber(8, 17, 3));
