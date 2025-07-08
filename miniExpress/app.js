import { auth } from "./backened.js";
import App from "./factory.js";
import { renderTemplate, SessionManager } from "./utils.js";

const app = new App()
app.staticFolder = '/assets'
const session = new SessionManager()


function logger(req) {
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

app.get('/profile', (req, res) => {
    if (session.hasSession(req)) {
        return res.end(renderTemplate('profile.html', res, session.getSession(req)))
    }
    return app.redirect(res, '/login')

})
app.get('/forgot_password', (req, res) => {

    res.end(renderTemplate('forgot_password.html', res))
})
app.get('/reset_password', (req, res) => {
    res.end(renderTemplate('reset_password.html', res))
})

app.listen(3000, () => { console.log('Running server on port 3000') })