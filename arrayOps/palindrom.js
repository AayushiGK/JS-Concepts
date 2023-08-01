// a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam

const str = "madam";
const stringPalindrom = str.split("").reverse().join("") === str;
console.log(stringPalindrom);

const isNumberPalindrome = (number) => {
  let originalNumber = number;
  let reversedNumber = 0;
  while (number > 0) {
    const lstDigit = number % 10;
    reversedNumber = reversedNumber * 10 + lstDigit;
    number = Math.floor(number / 10);
  }
  return originalNumber === reversedNumber;
};
console.log(isNumberPalindrome(121));
