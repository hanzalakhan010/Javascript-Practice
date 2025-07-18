import express from 'express'
import { createUser, getAllUsers,getUserById } from './userCRUD.js'

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));



app.get('/users', (req, res) => {
    res.render('allUsers', { users: getAllUsers() })
})

app.post('/users', (req, res) => {
    const id = createUser(req.body)
    res.redirect(`/user/${id}`)
})

app.get('/user/:id',(req,res)=>{
    const user = getUserById(req?.params?.id)
    if (user){
        res.render('userProfile',{user})
    }else{
        res.send('Not found')
    }
})
app.get('/users/new', (req, res) => {
    res.render('newUser')
})


app.listen(3000, () => { console.log('Listening on port 3000') })