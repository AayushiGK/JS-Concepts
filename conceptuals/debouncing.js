// Debouncing ---> Sending a request after a while when the user stop typing. takes a function that will return a function after certain time-frame

getData(() => console.log("Debounced"));

const debouncing = function (cb, delay) {
  let timer = 0;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      cb.apply(this, [...args]);
    }, delay);
  };
};
const custDebouncing = debouncing(getData, 5000);
// line 10 ===> 'this' is fixing the lexical scope & args if passed in getData()
