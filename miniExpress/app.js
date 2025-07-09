import { auth } from "./backened.js";
import MiniExpress from "./miniExpress.js";
import user from "./userRoutes.js";
import { renderTemplate, SessionManager } from "./utils.js";

const app = new MiniExpress()
app.staticFolder = '/assets'
const session = new SessionManager()


function logger(req, res) {
    console.log(`${new Date().toISOString()} : ${req.url} : ${req.method} `)
}

app.use(logger)

function checkSession(req, res) {
    console.log('checking session')
}

app.get('/login', checkSession, (req, res) => {
    res.end(renderTemplate('login.html', res))
})

app.post('/login', async (req, res) => {
    const user = await app.handleForm(req)
    const userAuth = auth(user)
    if (userAuth) {
        session.set(userAuth, res)
        console.log('Authorized')
        app.redirect(res, '/dashboard')
    } else {
        console.log('Not authorized')
        app.redirect(res, '/login')

    }
})

app.get('/logout', (req, res) => {
    session.deleteSession(req)
    app.redirect(res, '/login')

})

app.get('/dashboard', (req, res) => {
    if (session.hasSession(req)) {
        return res.end(renderTemplate('dashboard.html', res, session.getSession(req)))
    }
    return app.redirect(res, '/login')

})

app.use('/user',user)

app.get('/news/:id', (req, res) => {
    console.log('news', req.params)
    res.end(`news ${req?.params?.id}`)
    // res.end('news')
})



app.get('/forgot_password', (req, res) => {

    res.end(renderTemplate('forgot_password.html', res))
})
app.get('/reset_password', (req, res) => {
    res.end(renderTemplate('reset_password.html', res))
})

const port = 3000

app.listen(port, () => { console.log('Running server on port', port) })
console.log(app.routes)
console.log(app.dynamicRoutes)