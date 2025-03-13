
// function wait(n) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < n; i++) {
//             setTimeout(() => {
//                 console.log('#')
//             }, 1000)
//         }
//         resolve()
//     })
// }
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))


const boilWater = async () => {
    console.log('Boiling Water, wait for 2 seconds')
    return await sleep(2000)
}
const grindBeans = async () => {
    console.log('Grinding beans, wait for 1 second')
    return await sleep(1000)

}
const brewCoffee = async () => {
    console.log('Brewing Coffee, wait for 4 seconds')
    return await sleep(4000)
}
boilWater()
.then(()=>grindBeans())
.then(()=>brewCoffee())