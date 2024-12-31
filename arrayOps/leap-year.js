// leap year having 29 days in Feb
const isLeapYear = (year) => {
  return year % 4 == 0 && year % 100 !== 0;
};

console.log(isLeapYear(2016));
console.log(isLeapYear(2018));
console.log(isLeapYear(2020));
console.log();
