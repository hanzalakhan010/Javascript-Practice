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

const {email,id:userId} = user
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

function bio(...details){
    console.log(details)
}

// bio()





