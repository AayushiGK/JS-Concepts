// Armstrong Numbers
// Ex : 370 is armstrong as 3^3 + 7^3 + 0^3 = 27 + 343 + 0 = 370
const armstrong_ViaReduce = (number) => {
  return (
    [...number.toString()].reduce((acc, digit) => {
      return acc + digit * digit * digit;
    }, 0) === number
  );
};

console.log(armstrong_ViaReduce(370));

// even-odd
const evenOdd = (number) => {
  return number % 2 === 0 ? true : false;
};

console.log(evenOdd(876543));

// factorial
const factorial = (number) => {
  return;
};
console.log("Factorial ---> ");
console.log(factorial(6));
