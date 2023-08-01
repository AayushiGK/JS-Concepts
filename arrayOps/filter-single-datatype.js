const arr = [1, 2, 4, "a", "b", 5, 8, "c", "d", 9];

const NumberedArray = arr.filter((n) => typeof n === "number");
console.log(NumberedArray);

const stringArray = arr.filter((n) => typeof n !== "number");
console.log(stringArray);
