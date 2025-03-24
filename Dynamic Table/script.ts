
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

const search = () => {
    let searchText = (document.getElementById('searchInput') as HTMLInputElement).value
    if (searchText) {
        selectedUsers = users.filter((user) => user.name.includes(searchText))
        if (selectedUsers) {
            renderSelectedUsers()
        }
        else {
            let statusTag = document.getElementById('status')
            if (statusTag) {
                statusTag.innerText = 'No match Found'

            }
        }
    }
    else{
        selectedUsers = users
        renderSelectedUsers()
    }
}

const renderSelectedUsers = () => {
    let tbody = document.getElementById('tbody')
    if (tbody) {
        tbody.innerHTML = ''
    }
    if (selectedUsers) {
        selectedUsers.forEach((user) => {
            tbody?.insertAdjacentHTML('beforeend', `
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

document.getElementById('search-btn')?.addEventListener('click', (event) => {
    event.preventDefault()
    search()
})