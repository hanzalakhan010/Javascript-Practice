// function greet(name,callback){
//     console.log('Hello',name)
//     callback()
// }
// function callback(name){
//     console.log(`Good bye ${name}`)
// }
// greet('Hanzala',()=>callback(name))

// let operatations = {
//     sub: (a, b) => {
//         return arguments[1]
//     },
//     add(a, b) {
//         return a + b
//     },
//     mul: (a, b) => (a * b),
//     div: (a, b) => (a / b)
// }

// function calculate(a, b, callback) {
//     return callback(a, b)
// }

// const f = (a,b)=>{
//     return arguments[0]
// }

// console.log(calculate(1, 2, f))
// console.log(calculate(1, 2, operatations.add))

// const arr = [1,2,3,4,5,7]

// const arr2 = arr.map((x,)=>x**2)

// console.log(arr2)

const students = [
    {fname:'hanzala',lname:'Khan'},
    {fname:'hanzala1',lname:'Khan1'},
    {fname:'hanzala2',lname:'Khan2'},
    {fname:'hanzala3',lname:'Khan3'},
    {fname:'hanzala4',lname:'Khan4'},
]
const newSt = students.map((ele)=>`${ele.fname.toUpperCase()} ${ele.lname.toUpperCase()}`)
// console.log(newSt)


const num = [1,2,3,4,5,6,7,8,9]
const evens = num.filter((ele)=>ele%2==0)
const odds = num.reduce((ele)=>ele%2==0)
console.log(evens)
console.log(odds)