import http from 'http'
import App from './factory.js'
import {getAllUsers, getUserById } from "../class 13/userCRUD.js"
import { newUserTemplate, userProfile, usersDisplay } from '../class 13/templates.js'


const app = new App()

app.get('/', (req, res) => usersDisplay(getAllUsers()))
app.get('/newUser', () => {
    console.log(req?.url)
    return newUserTemplate()
})
app.get('/user', (req,res) => {
    return userProfile(getUserById(req.query.id))
})
app.listen(3000)