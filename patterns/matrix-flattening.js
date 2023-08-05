// Take 2D Array and print flat array/series of number

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatArr = arr.flat(1);
console.log(flatArr);

const flatViaReduce = arr.reduce((accu, element) => [...accu, ...element]);
console.log(flatViaReduce);

const flatViaSpreadOp = [].concat(...arr);
console.log(flatViaSpreadOp);
