// Closure is nothing but a combinations of function & the lexical scope within which the function is declared.

// function currying. It takes number of arguments and form a function that takes one arg at a time.
// Ex =========> sum(1,2,3) ===> sum(1)(2)(3);

// sum(1)(2)(3)(4);

const sum_2_digits = function (a) {
  return function (b) {
    return a + b;
  };
};
console.log(`summing up 2 arg function ---- ${sum_2_digits(3)(4)}`);

const sum_n_digits = function (a) {
  return function (b) {
    if (b) return sum_n_digits(a + b);
    else b;
  };
};
console.log(`summing up multi-arg function ---- ${sum_n_digits(1)(2)(3)(4)}`);
