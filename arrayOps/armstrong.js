// An Armstrong number is one whose sum of digits raised to the power to the length of number equals the number itself.
// eg ---> 3**3 + 7**3 + 1**3 = 371
// eg ---> 1**4 + 6**4 + 3**4 + 4**4 = 1634

const isArmstrong = function (number) {
  let sum = 0;
  let digits = number.toString().split("");

  digits.forEach((d) => {
    sum = sum + d ** `${number}`.length;
  });

  return sum == number ? true : false;
};

console.log(isArmstrong(1634));
