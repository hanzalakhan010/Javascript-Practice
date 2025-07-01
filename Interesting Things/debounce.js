function fastFunc(){
    console.log('hanzalaKhan: ')
}

function debounce(func,time){
    setTimeout(func, time);
}

let wrappedFunc = debounce(fastFunc,1000)

setInterval(()=>wrappedFunc,1)

