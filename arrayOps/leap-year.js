// leap year having 29 days in Feb
const isLeapYear = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) return true;
  return false;
};

console.log(isLeapYear(2016));
console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
