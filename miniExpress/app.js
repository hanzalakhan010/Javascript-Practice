import { auth } from "./backened.js";
import App, { renderTemplate } from "./factory.js";


const app = new App()
app.staticFolder = '/assets'



app.get('/login', (req, res) => {
    res.end(renderTemplate('login.html', res))
})
app.post('/login', async (req, res) => {
    const user = await app.handleForm(req)
    if (auth(user)) {
        console.log('Authorized')
        app.redirect(res, '/dashboard')
    } else {
        console.log('Not authorized')
        app.redirect(res, '/login')

    }
})

app.get('/dashboard', (req, res) => {
    res.end(renderTemplate('dashboard.html', res))
})

app.get('/profile', (req, res) => {
    res.end(renderTemplate('user.html', res))
})
app.get('/forgot_password', (req, res) => {

    res.end(renderTemplate('forgot_password.html', res))
})
app.get('/reset_password', (req, res) => {
    res.end(renderTemplate('reset_password.html', res))
})

app.listen(3000, () => { console.log('Running server on port 3000') })