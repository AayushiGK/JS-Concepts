// the product of all positive integers less than or equal to a given positive integer and denoted by that integer and an exclamation point
// Ex ===>  7!, meaning 1 × 2 × 3 × 4 × 5 × 6 × 7

const factorial = function (number) {
  let value = 1;
  for (let i = 1; i <= number; i++) value = value * i;
  return value;
};
const number = 5;
console.log(`Factorial of ${number} is`, factorial(number));
