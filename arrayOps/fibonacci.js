// Each number in the sequence is the sum of the two numbers that precede it.
// ===> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, .......

const fibonacci = function (seriesEnd) {
  const arr = [];
  for (let i = 0; i < 50; i++) {
    i < 2 ? arr.push(i) : arr.push(arr[i - 1] + arr[i - 2]);
    if (arr[i] < seriesEnd - arr[i]) continue;
    else break;
  }
  return arr;
};
console.log(fibonacci(50));
