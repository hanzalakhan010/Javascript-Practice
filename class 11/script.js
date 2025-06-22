const colours = ['red', 'green']
const favColour = ['orange', 'purple']
const best = 'white'

const allColours = [...colours, best, ...favColour]
// console.log(allColours)


const user = {
    id: 1,
    name: "hanzala",
    email: 'h@g.com',
    age: 10

}

const { email, id: userId } = user
// console.log(userId)
// console.log(email)



const updatedUser = { ...user, email: 'hanzala@g.com', age: 12 }
// console.log(updatedUser)


function mergeArray(arr1, arr2) {
    return [...arr1, ...arr2]
}



function sum(...args) {
    return args.reduce((ele, curr) => ele + curr)
}
// console.log(sum(1, 2, 3, 4))

function bio(...details) {
    console.log(details)
}

// bio()

// Practice 

function isEven(num) {
    return num % 2 == 0 ? true : false
}
age = 20
let status_;
status_ = age >= 18 ? 'Adult' : 'Minor'

let num = 0

// console.log(num > 0 ? 'Positive' : num == 0 ? 'Zero' : 'Negative')


const shoppingCart = [
    { name: 'Milk', price: 100 },
    { name: 'eggs', price: 200 },
    { name: 'brea', price: 400 },
]

const total = shoppingCart.reduce(
    (acc, ele) => acc += ele.price
    , 0)


// function vowelCount(input){
//     let total = [...input].reduce((acc,ele)=>{
//         if (['a','e','i','o','u'].includes(ele)){
//             acc+=1
//             console.log(ele)
//         }
//     })
//     return total
// }
// console.log(vowelCount('hanzala'))

function vowelCount(input) {
    return [...input].reduce((acc, ele) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(ele)) {
            return ++acc
        } else {
            return acc
        }
    }, 0)
}

console.log(vowelCount('hanzala'))