const arr = [7, 2, 3, 4, 5, 6];

// Original .map()
const mappedArr = arr.map((element, idx) => element + 2);
console.log(mappedArr); // [ 3, 4, 5, 6, 7, 8 ]

// Checking for arguments map takes
// arr.map((...args) => {
//   args.forEach((arg) => {
//     console.log(typeof arg, arg);
//   });
// });

// map args ==> 0:element, 1:idx, 2: array

Array.prototype.customMap = function (cb) {
  const initArray = this;
  const resultArray = [];
  for (let i = 0; i < initArray.length; i++) {
    let resultElement = cb(initArray[i], i, initArray);
    resultArray.push(resultElement);
  }
  return resultArray;
};
const arrcustomMap = arr.customMap((ele) => ele + 2);
console.log(arr);
console.log(arrcustomMap);
