const userMap = {
    "alice.johnson@example.com": {
        id: 1,
        name: "Alice Johnson",
        password: "Password123",
        role: "admin",
        isActive: true,
        createdAt: "2024-01-10T08:45:00Z"
    },
    "bob.smith@example.com": {
        id: 2,
        name: "Bob Smith",
        password: "Secret456",
        role: "user",
        isActive: true,
        createdAt: "2024-02-15T12:00:00Z"
    },
    "charlie.lee@example.com": {
        id: 3,
        name: "Charlie Lee",
        password: "Charlie789",
        role: "user",
        isActive: false,
        createdAt: "2024-03-20T15:30:00Z"
    },
    "diana.ross@example.com": {
        id: 4,
        name: "Diana Ross",
        password: "Diana321",
        role: "moderator",
        isActive: true,
        createdAt: "2024-04-05T09:15:00Z"
    },
    "eric.miller@example.com": {
        id: 5,
        name: "Eric Miller",
        password: "Eric654",
        role: "user",
        isActive: true,
        createdAt: "2024-05-25T14:00:00Z"
    }
};

export function auth(user) {
    console.log(user)

    if (!user?.email || !user?.password) return false
    if (!userMap?.[user.email]) return false
    if (!userMap?.[user.email]?.password == user?.password) return false
    return true

}