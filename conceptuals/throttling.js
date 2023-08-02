// Throttling ---> Sending a single request after certain interval even if the event is fired multiple times in between.

const throttle = function (fn, interval) {
  let lstCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < interval) return;
    lstCall = now;
    fn();
  };
};

const throttledClick = throttle(() => {
  console.log("Clicked!");
}, 1000);
