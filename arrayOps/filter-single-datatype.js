const arr = [1, 2, 4, "a", "b", 5, 8, "c", "d", 9];

const NumberedArray = arr.filter((n) => typeof n === "number");
console.log(NumberedArray);

const stringArray = arr.filter((n) => typeof n !== "number");
console.log(stringArray);

const strArr = ["Hello", "How", "What", "why", "who", "When", "whom"];
const stringLengthedArray = strArr.filter((str) => str.length > 3);
console.log(stringLengthedArray);

const filterByDataType = (arr, dataType) => {
  return arr.reduce((acc, element) => {
    typeof element === dataType ? acc.push(element) : acc;
    return acc;
  }, []);
};
console.log(filterByDataType(arr, "number"));
