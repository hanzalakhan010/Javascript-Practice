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

// const students = [
//     {fname:'hanzala',lname:'Khan'},
//     {fname:'hanzala1',lname:'Khan1'},
//     {fname:'hanzala2',lname:'Khan2'},
//     {fname:'hanzala3',lname:'Khan3'},
//     {fname:'hanzala4',lname:'Khan4'},
// ]
// const newSt = students.map((ele)=>`${ele.fname.toUpperCase()} ${ele.lname.toUpperCase()}`)
// console.log(newSt)

// const num = [1,2,3,4,5,6,7,8,9]
// const evens = num.filter((ele)=>ele%2==0)
// const odds = num.reduce((ele)=>ele%2==0)
// console.log(evens)
// console.log(odds)

// Given an array of numbers, create a
// new array containing only the numbers
// greater than 10.

// const numbers = [5, 12, 13, 3, 7];

// console.log(numbers.filter((num)=>num>10))

// function generateStudentData(numStudents = 20) {
//   const firstNames = [
//     "Emma",
//     "Liam",
//     "Olivia",
//     "Noah",
//     "Ava",
//     "William",
//     "Sophia",
//     "James",
//     "Isabella",
//     "Oliver",
//   ];

//   return Array.from({ length: numStudents }, (_, i) => ({
//     id: i + 1,
//     name: `${firstNames[Math.floor(Math.random() * firstNames.length)]}`,
//     score: Math.floor(Math.random() * 51) + 50, // Scores between 50-100 (with some exceptions)
//   }));
// }

// Generate sample data
//   const students = generateStudentData();
const students = [
  { id: 1, name: "James", score: 81 },
  { id: 2, name: "Ava", score: 95 },
  { id: 3, name: "Ava", score: 63 },
  { id: 4, name: "Ava", score: 94 },
  { id: 5, name: "Ava", score: 58 },
  { id: 6, name: "William", score: 57 },
  { id: 7, name: "William", score: 82 },
  { id: 8, name: "Isabella", score: 95 },
  { id: 9, name: "James", score: 87 },
  { id: 10, name: "Oliver", score: 83 },
  { id: 11, name: "William", score: 96 },
  { id: 12, name: "Liam", score: 61 },
  { id: 13, name: "Isabella", score: 60 },
  { id: 14, name: "William", score: 99 },
  { id: 15, name: "Sophia", score: 89 },
  { id: 16, name: "Isabella", score: 84 },
  { id: 17, name: "Olivia", score: 85 },
  { id: 18, name: "Isabella", score: 98 },
  { id: 19, name: "William", score: 64 },
  { id: 20, name: "Oliver", score: 60 },
];

// var students = [
//     {id: 1, name: "Emma Johnson", score: 78},
//     {id: 2, name: "Noah Wilson", score: 92},
//     {id: 3, name: "Olivia Smith", score: 65},
// ]

// var goodStudents = students
//   .filter((student) => student.score >= 60)
//   .map((student) => student.name.toUpperCase());
// console.log(goodStudents)


const car = {
    make:'toyota',
    model :'camry'
}
const {make,model} = car
// console.log(make,model)

const data = ['Alice',30,'New York']
var [ name_ ,age ,city ] = data
// console.log(name_,age,city)
