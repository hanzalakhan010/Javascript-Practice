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


function callback(){
    console.log('hanzala')
}
export function setIntervalFunc(func,milli){
    function repeat(){
        func()
        setTimeoutFunc(repeat,milli)
    }
    repeat()
}

setIntervalFunc(callback,1000)