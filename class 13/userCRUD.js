let users = [
    {
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "password": "alice123"
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "password": "bob123"
    },
    {
        "id": 3,
        "name": "Carla Reyes",
        "email": "carla.reyes@example.com",
        "password": "carla123"
    },
    {
        "id": 4,
        "name": "David Patel",
        "email": "david.patel@example.com",
        "password": "david123"
    },
    {
        "id": 5,
        "name": "Eva Lin",
        "email": "eva.lin@example.com",
        "password": "eva123"
    },
    {
        "id": 6,
        "name": "Frank Zhang",
        "email": "frank.zhang@example.com",
        "password": "frank123"
    },
    {
        "id": 7,
        "name": "Grace Lee",
        "email": "grace.lee@example.com",
        "password": "grace123"
    },
    {
        "id": 8,
        "name": "Henry Kim",
        "email": "henry.kim@example.com",
        "password": "henry123"
    },
    {
        "id": 9,
        "name": "Ivy Nguyen",
        "email": "ivy.nguyen@example.com",
        "password": "ivy123"
    },
    {
        "id": 10,
        "name": "Jake Martinez",
        "email": "jake.martinez@example.com",
        "password": "jake123"
    }
]
function generateId() {
    return users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
}

export function createUser(userDetails) {
    users.push({ id: generateId(), ...userDetails })
    return JSON.stringify({ 'users': users })
}

export function getAllUsers() {
    return users
}
export function getUserById(userID) {
    // const userID = query?.id
    if (userID) return users.find((user) => user.id == userID)
    return 'User not found'
}

export function deleteUserById(query) {
    const userId = query?.id
    if (userId) {
        users = users.filter((user) => user.id != userId)
        return JSON.stringify({ 'users': users })
    }
    return 'user not found'
}
export function updateUserById(userId, userDetails) {
    for (let i = 0; i < users.length; i++) {
        if (users[i]?.id == userId) {
            users[i] = { ...userDetails }
            return JSON.stringify({ 'user': users[i] })
        }
    }
    return { 'error': 'user not found' }
}




// createUser({
//     id: 1,
//     name: 'hanzala',
//     age: 19
// })

// getAllUsers()

// updateUserById(1, { age: 20 })

// getAllUsers()

// deleteUserById(1)

// getAllUsers()