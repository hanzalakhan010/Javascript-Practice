let count= 0
function throttle(func,max){
    let count = 0
    setInterval(()=>{count=0},1000)
    return function(){
        if(count<max){
            count+=1
            func()
        }
    }
}


function fastFunc(){
    count+=1
    console.log(`Hanzala Khan :${count}`)
}

let wrappedFunc= throttle(fastFunc,2)

setInterval(wrappedFunc, 1);

