const arr = [2, 3, 4, 6, 7, 9];

const result = arr.find((element) => element > 6);
console.log("result from find ---- ", result);

// arr.find((...args) => {
//   args.forEach((arg) => {
//     console.log(arg);
//   });
//   console.log("----------");
// });

// find args ==> 0: element , 1: index, 2: array itself

Array.prototype.customFind = function (cb) {
  const initArr = this;
  let result = null;
  for (let idx = 0; idx < initArr.length; idx++) {
    result = cb(initArr[idx], idx, initArr);
    if (result) return initArr[idx];
  }
  result;
};

const customFindResult = arr.customFind((element) => element > 6);
console.log("result from customFind ---- ", customFindResult);
