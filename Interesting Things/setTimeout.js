function setTimeoutFunc(callback, milliSecond) {
  const start = performance.now();
  const end = start + milliSecond;
  function scheduler() {
    let current = performance.now();
    if (current >= end) {
      callback();
    } else {
      setImmediate(() => {
        scheduler();
      });
    }
  }
  scheduler()
}

function callbackFunc() {
  console.log("Hanzala");
}

setTimeoutFunc(callbackFunc, 2000);
