import { Router } from "./miniExpress.js";

const user = new Router();

user.get('/:id', (req, res) => {
    console.log('hanzala', req.params)
    res.end(`user ${req?.params?.id}`)
})
user.get('/:id/profile/:section', (req, res) => {
    console.log('hanzala', req.params)
    res.end(`user ${req?.params?.id}`)
})
user.get('/profile', (req, res) => {
    if (session.hasSession(req)) {
        return res.end(renderTemplate('profile.html', res, session.getSession(req)))
    }
    return app.redirect(res, '/login')

})


export default user;