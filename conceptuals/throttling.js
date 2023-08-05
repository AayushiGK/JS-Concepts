// Throttling ---> Sending a single request after certain interval even if the event is fired multiple times in between.

// Type 1
const throttle = function (fn, interval) {
  let lstCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < interval) return;
    lstCall = now;
    fn();
  };
};

// Type 2
const throttling = function (fn, interval) {
  let flag = true;
  return function () {
    if (flag) fn();
    flag = false;
    setTimeout(() => {
      flag = true;
    }, interval);
  };
};

const throttledClick = throttle(() => {
  console.log("Clicked!");
}, 1000);
