// Write a program that takes string and then return the count of each char.

// const str = "Hello";
// const str = "My phone number is 1245"; // ---> take spaces as char and also not.
const str = "Hello hi"; // ---> Both output {h:2} & {H:1 , h:1}
// const str = "email id for contact is aayushi@gmail.com";
// const str = "";
// const str = "Those who can knows the who can know those";

const frequence = (str) => {
  const result = {};
  for (let idx = 0; idx < str.length; idx++) {
    // let char = str[idx].toLowerCase();
    let char = str[idx];
    if (char !== " ")
      if (result[char]) ++result[char];
      else result[char] = 1;
  }
  return result;
};
console.log("version 1 ---->");
console.log(frequence(str));
console.log();

// version 2
const frequence_2 = (str) => {
  return [...str.toLowerCase()]
    .filter((char) => char !== " ")
    .reduce((acc, char) => {
      if (acc[char]) ++acc[char];
      else acc[char] = 1;
      return acc;
    }, {});
};

console.log("version 2 ---->");
console.log(frequence_2(str));
console.log();
