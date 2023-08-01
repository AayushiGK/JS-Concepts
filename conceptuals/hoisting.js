console.log(a, sum); // undefined , function defination
var a = 6;
console.log(a); // 6

const sum = function (a, b) {
  return a + b;
};
console.log(sum(1, 2)); // 3

console.log(b); // script scope unlike 'var'. Untill declared Its in temporal dead zones
let b = 9;
console.log(b); // 9

console.log(c); // script scope unlike 'var'. Untill declared Its in temporal dead zones
let c = 2;
console.log(c); // 2
