const superStr_1 = "Javascript";
const superStr_2 = "Python";

const subStr = "asc";

const match = superStr_1.match(subStr);
console.log(
  match !== null ? `match found at index ${match.index}` : `No Match found`
);
