const str = "abcdefg";

// str.printLen() should return
// "Length of the string 'abcdefg' is 7"

String.prototype.printLen = function () {
  const initString = this;
  let result = 0;
  for (let i = 0; i < initString.length; i++) result++;
  return result;
};
const length = str.printLen();
console.log(length);
