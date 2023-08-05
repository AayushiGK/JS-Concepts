// * * * * *
// * * * *
// * * *
// * *
// *

const invertedTriangle = function (lvl) {
  for (let i = lvl; i > 0; i--) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern.includes("*") ? rowPattern : "");
  }
};

invertedTriangle(5);
