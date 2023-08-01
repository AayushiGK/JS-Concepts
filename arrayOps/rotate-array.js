// Rotate Array anti-clockwise
const arr_1 = [1, 2, 3, 4, 5, 6, 7, 8];
const rotateLeft = (rotateBy) => {
  const splicedArr = arr_1.splice(0, rotateBy);
  return arr_1.concat(splicedArr);
};
console.log("splicedArr ---- ", splicedArr(2));

// Rotate Array clockwise
const arr_2 = [1, 2, 3, 4, 5, 6, 7, 8];
const rotateRight = (rotateBy) => {
  const splicedArr = arr_2.splice(-rotateBy, rotateBy);
  return splicedArr.concat(arr_2);
};
console.log("rotateRight", rotateRight(2));
