// *
// * *
// * * *
// * * * *
// * * * * *

const triangle = function (lvl) {
  for (let i = 1; i <= lvl; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
      rowPattern += "* ";
    }
    console.log(rowPattern.includes("*") ? rowPattern : "");
  }
};

triangle(5);
