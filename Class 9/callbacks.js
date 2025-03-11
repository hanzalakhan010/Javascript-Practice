

// // function orderPizza(cb) {
// //     setTimeout(() => {
// //         let time = new Date()
// //         console.log('Step 1, Ordered')
// //         cb()
// //     }, 4000);
// // }

// // function preparingpizza(cb) {
// //     setTimeout(() => {
// //         console.log('Step 2, Preparing')
// //         cb()
// //     }, 2000)
// // }


// // function served() {
// //     setTimeout(() => {
// //         console.log('Step 3, Served')
// //     }, 1000)
// // }

// // orderPizza(() => preparingpizza(()=>served()))

// // const served = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('Step 3, Served')
// //     }, 100);
// // }
// // )
// // const preparingpizza = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('Step2, Preparing Pizza')
// //     }, 200)
// // })


// // const orderPizza = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve('Step1, ordering Pizza')

// //     }, 400);
// // }
// // )

// // orderPizza
// //     .then((msg1) => console.log(msg1))
// //     .then((msg2) => console.log(msg2))



// const served = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Step 3, Served')
//     }, 1000);
// }
// )
// const preparingpizza = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Step2, Preparing Pizza')
//     }, 2000)
// })


// const orderPizza = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Step1, ordering Pizza')

//     }, 4000);
// }
// )

// orderPizza
//     .then((msg1) => {
//         console.log(msg1)
//         preparingpizza.then((msg2) => {
//             console.log(msg2)
//             served.then(msg3 => console.log(msg3))
//         })
//     })


// // function preparingpizza(cb) {
// //     setTimeout(() => {
// //         console.log('Step 2, Preparing')
// //         cb()
// //     }, 2000)
// // }


// // function served() {
// //     setTimeout(() => {
// //         console.log('Step 3, Served')
// //     }, 1000)
// // }





function orderPizza(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step1, ordering Pizza')

        }, 4000);
    }
    )

}

function preparingpizza(cb) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step2, Preparing Pizza')
        }, 2000)
    })
}


function served() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Step 3, Served')
        }, 1000);
    }
    )
}

preparingpizza.length