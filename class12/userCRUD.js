let users = []

function createUser(userDetails) {
    users.push(userDetails)
}

function getAllUsers(){
    console.table(users)
}
function getUserById(userID) {
    return users.find((user) => user.id == userID)
}

function deleteUserById(userId) {
    users = users.filter((user) => user.id != userId)
}
function updateUserById(userId, userDetails) {
    for (let i = 0; i < users.length; i++) {
        if (users[i]?.id == userId) {
            users[i] = { ...userDetails }
        }
    }
}




createUser({
    id:1,
    name:'hanzala',
    age:19
})

getAllUsers()

updateUserById(1,{age:20})

getAllUsers()

deleteUserById(1)

getAllUsers()