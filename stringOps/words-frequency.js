const str = "Those who can knows the who can know those";

const frequence = () => {
  const result = {};
  const arrStr = str.toLowerCase().split(" ");
  arrStr.forEach((element) => {
    if (result[element]) ++result[element];
    else result[element] = 1;
  });
  return result;
};
console.log(frequence());
