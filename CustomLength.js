const str = "abcdefg";

// str.printLen() should return
// "Length of the string 'abcdefg' is 7"

String.prototype.printLen = function () {
  const initString = this;
  let result = -1;
  for (let s in str) ++result;
  return result;
};
const length = str.printLen();
console.log(length);
