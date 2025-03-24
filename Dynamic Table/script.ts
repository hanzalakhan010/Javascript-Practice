
type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
        lat: string,
        lng: string
    }
}
type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

let users: User[] = []
let selectedUsers: User[] = []


const loadAllUsers = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        if (data) {
            users = data
            selectedUsers = data
        }
    }
    catch {
        console.log('Network Error')
    }
}

const renderSelectedUsers = () => {
    // document.getElementById('tbody')?.innerHTML = ''
    if (selectedUsers) {
        selectedUsers.forEach((user) => {
            document.getElementById('tbody')?.insertAdjacentHTML('beforeend', `
                <tr>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                </tr>
                `)
        })
    }
}


loadAllUsers().then(() => {
    renderSelectedUsers()
}
)
