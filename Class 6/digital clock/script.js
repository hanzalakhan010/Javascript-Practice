function tFormat(minute){
    str = minute.toString()
    if (str.length==1){return `0${str}`}
    return str
}
function renderTime(){
    let time = new Date();
    document.getElementById('clock').textContent = `
        ${time.getHours()}:${tFormat(time.getUTCMinutes())}  ${tFormat(time.getSeconds())}
    `
}
renderTime()

let show = setInterval(renderTime,1000)