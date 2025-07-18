import express from 'express'
import { createUser, getAllUsers } from './userCRUD.js'

const app = express()
app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: true }));



app.get('/users', (req, res) => {
    res.render('allUsers', { users: getAllUsers() })
})

app.post('/users', (req, res) => {
    createUser(req.body)
    res.redirect('/users')
})

app.get('/user/new', (req, res) => {
    res.render('newUser')
})
app.listen(3000, () => { console.log('Listening on port 3000') })