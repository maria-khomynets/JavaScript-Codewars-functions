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
