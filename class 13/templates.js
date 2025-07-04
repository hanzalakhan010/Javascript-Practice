import { getUserById } from "./userCRUD.js"

export function newUserTemplate() {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 300px; margin: auto; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="text-align: center;">Create New User</h2>
        <form action = '/user' method = 'POST'> 
            <label for="name" style="display: block; margin-bottom: 5px;">Name:</label>
            <input type="text" id="name" name="name" style="width: 100%; padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
            
            <label for="email" style="display: block; margin-bottom: 5px;">Email:</label>
            <input type="email" id="email" name="email" style="width: 100%; padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
            
            <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
            <input type="password" id="password" name="password" style="width: 100%; padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
            
            <input type="submit" style="width: 100%; padding: 10px; background-color: #007BFF; color: white; border: none; border-radius: 3px; cursor: pointer;"/>
        </form>
    </div>
    
    `
}

export function loginPage() {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 300px; margin: auto; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="text-align: center;">Login</h2>
        <form action='/login' method='POST'>
            <label for="email" style="display: block; margin-bottom: 5px;">Email:</label>
            <input type="email" id="email" name="email" style="width: 100%; padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
            
            <label for="password" style="display: block; margin-bottom: 5px;">Password:</label>
            <input type="password" id="password" name="password" style="width: 100%; padding: 5px; margin-bottom: 10px; border: 1px solid #ccc; border-radius: 3px;">
            
            <input type="submit" style="width: 100%; padding: 10px; background-color: #007BFF; color: white; border: none; border-radius: 3px; cursor: pointer;"/>
        </form>
    </div>
    `
}

export function usersDisplay(users) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 500px; margin: auto; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
        <h2 style="text-align: center;">User Display</h2>
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">ID</th>
                    <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Name</th>
                    <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Email</th>
                    <th style="border: 1px solid #ccc; padding: 8px; text-align: left;">Profile</th>
                </tr>
            </thead>
            <tbody>
                ${users.map((user) => `
                    <tr>
                        <td>${user?.id}</td>
                        <td>${user?.name}</td>
                        <td>${user?.email}</td>
                        <td><a href= '/user?id=${user?.id}'>Profile</a></td>
                    </tr>
                    `).join('')}
            </tbody>
        </table>
    </div>
    `
}

export function userProfile(user) {
    // console.log(user)
    return `
        <div style="font-family: Arial, sans-serif; max-width: 300px; margin: auto; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <h2 style="text-align: center;">User Profile</h2>
            <p><strong>ID:</strong> ${user?.id}</p>
            <p><strong>Name:</strong> ${user?.name}</p>
            <p><strong>Email:</strong> ${user?.email}</p>
        </div>
    `
}