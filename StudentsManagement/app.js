import express from 'express'
import { createStudent, getAllStudents, getStudentById, searchStudentByName, updateStudentById } from './StudentCRUD.js'
import { getAnalytics } from './analytics.js'
import { fileURLToPath } from 'url'
import path from 'path'
const app = express()


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname, 'assets')))


let loggedIn = false

function checkLogin(req, res, next) {
    if (!loggedIn) return res.redirect('/login')
    next()
}

function checkGuest(req, res, next) {
    if (loggedIn) return res.redirect('/')
    next()
}


app.get('/', checkLogin, (req, res) => {
    res.render('dashboard', { 'analytics': getAnalytics() })
})

app.get('/students', checkLogin, (req, res) => {
    res.render('allStudents', { students: req.query?.search ? searchStudentByName(req.query.search) : getAllStudents(),search:req.query?.search })
})

app.post('/students', checkLogin, (req, res) => {
    const id = createStudent(req.body)
    res.redirect(`/student/${id}`)
})

app.get('/editStudent/:id', checkLogin, (req, res) => {
    const student = getStudentById(req?.params?.id)
    res.render('editStudent', { student })
})
app.post('/editStudent/:id', checkLogin, (req, res) => {
    const student_id = req?.params?.id
    if (student_id) {
        if (updateStudentById(student_id, req.body)) {
            res.redirect(`/student/${student_id}`)
        }
        else {
            res.send('Error updating student')
        }
    }
    else {
        res.send('NOT FOUND')
    }
})
app.get('/student/:id', checkLogin, (req, res) => {
    const student = getStudentById(req?.params?.id)
    if (student) {
        res.render('studentProfile', { student })
    } else {
        res.send('NOT FOUND')
    }
})
app.get('/students/new', checkLogin, (req, res) => {
    res.render('newStudent')
})


app.get('/login', checkGuest, (req, res) => {
    res.render('login', {})
})

app.post('/login', checkGuest, (req, res) => {
    if (req.body?.username == 'admin' && req.body?.password == '1234') {
        loggedIn = true
        res.redirect('/')
    }
    else {
        res.redirect('/login')
    }
})


app.listen(3000, '0.0.0.0', () => { console.log('Listening on port 3000') })