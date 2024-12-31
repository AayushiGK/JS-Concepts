const arr = [1, 2, 3, 4, 5, 6];

const isElementEven = arr.map((n) => n % 2 === 0);
console.log(isElementEven); // [ false, true, false, true, false, true ]

const evenNumberOnly = arr.filter((n) => n % 2 === 0);
console.log(evenNumberOnly); // [ 2, 4, 6 ]

const isElementOdd = arr.map((n) => n % 2 !== 0);
console.log(isElementOdd); // [ true, false, true, false, true, false ]

const oddNumberOnly = arr.filter((n) => n % 2);
console.log(oddNumberOnly); // [ 1, 3, 5 ]

// even-odd
const evenOdd = (number) => {
  return number % 2 === 0;
};
console.log(evenOdd(87654));

const onlyEven = (arrays) =>
  arrays.reduce((acc, digit) => {
    if (digit % 2 === 0) acc.push(digit);
    return acc;
  }, []);
console.log(onlyEven(arr));

const onlyOdd = (arrays) =>
  arrays.reduce((acc, digit) => {
    if (digit % 2 !== 0) acc.push(digit);
    return acc;
  }, []);
console.log(onlyOdd(arr));
