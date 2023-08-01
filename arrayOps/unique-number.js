const arr = [1, 2, 3, 5, 8, 3, 1, 7, 4];

const isArrayUnique = () => {
  const uniqueArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const element = !uniqueArr.includes(arr[idx]);
    element ? uniqueArr.push(arr[idx]) : null;
  }
  return uniqueArr;
};
console.log("Array with Unique Elements - ", isArrayUnique());
