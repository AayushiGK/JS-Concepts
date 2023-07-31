const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const reducedArr = arr.reduce((accumlator, element) => accumlator + element, 0);
console.log(reducedArr);

// arr.reduce((...args) => {
//   args.forEach((arg) => console.log(arg));
//   return ++args[0];
// }, 0);

// filter args ==>  0: accumlator , 1: element , 2: index, 3: array itself

Array.prototype.CustomReduce = function (cb, initValue) {
  const initArray = this;
  let result = initValue;
  for (let i = 0; i < initArray.length; i++) {
    result = cb(result, initArray[i], i, initArray);
  }
  return result;
};

const arrCustomReduce = arr.CustomReduce(
  (accumlator, element) => accumlator + element,
  0
);
console.log(arrCustomReduce);
