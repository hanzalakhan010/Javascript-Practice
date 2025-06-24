let timers = []

function setTimeoutFunc(callback, milliSecond) {
    const timerId = timers.length + 1
    const start = performance.now();
    const end = start + milliSecond;
    timers.push(timerId)
    function scheduler() {
        if (timers.includes(timerId)) {
            let current = performance.now();
            if (current >= end) {
                callback();
            } else {
                setImmediate(() => {
                    scheduler();
                });
            }
        }
    }
    scheduler()
    return timerId
}


function clearTimeout(timerId) {
    // console.log(`clearing timeout with ID ${timerId}`)
    timers = timers.filter((Id) => Id != timerId)
}

let timerId1 = setTimeoutFunc(() => console.log('1 second'), 1000)

let timerId2 = setTimeoutFunc(() => console.log('2 second'),1)
let timerId3 = setTimeoutFunc(() => console.log('3 second'), 3000)
// console.log(timerId1,timerId2,timerId3)
// console.log(timers)
clearTimeout(timerId2)



