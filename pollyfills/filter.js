const arr = [5, 3, 4, 1, 2];

// filter
// let filteredArr = arr.filter((n) => { return n > 22 });
// console.log(filteredArr);

// arr.filter((...args) => {
//     args.forEach(arg => {
//         console.log(typeof arg, arg);
//     })
// });

// filter args ==> 0: element , 1: index, 2: array itself

Array.prototype.customFilter = function (cb) {
  let resultArray = [];
  const inputArr = this;

  // filter will apply cb on each element
  //     if true, then add element to resultArray; if false, skip
  // return the resultArray

  for (let index = 0; index < inputArr.length; index++) {
    const decision = cb(inputArr[index], index, inputArr);
    if (decision) {
      resultArray.push(inputArr[index]);
    } else {
      // do nothing
    }
  }

  // return empty array if no suitable element is found
  // return resultArray;

  // returns 'null' if no suitable element is found
  return resultArray.length ? resultArray : null;
};

filteredArr = arr.customFilter((n) => {
  return n > 22;
});
console.log("customFilter", filteredArr);

// arr = [1,2,3,46,8,9] --> arr.filterEven() --> [2,46,8]
Array.prototype.filterEven = function () {
  let resultArray = [];
  const inputArr = this;

  for (let index = 0; index < inputArr.length; index++) {
    const decision = inputArr[index] % 2 === 0;
    if (decision) {
      resultArray.push(inputArr[index]);
    } else {
      // do nothing
    }
  }
  return resultArray;
};

console.log([1, 2, 3, 46, 8, 9].filterEven());
