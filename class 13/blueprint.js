import { loginPage, newUserTemplate, userDisplay } from "./templates.js"
import { createUser, deleteUserById, getAllUsers, getUserById } from "./userCRUD.js"
import { handleQueryParams } from './utils.js'
const routes = {
    '/': {
        'GET': () => userDisplay(getAllUsers()),
    },
    '/users': {
        'GET': getAllUsers
    },
    "/user": {
        "GET": getUserById,
        "DELETE": deleteUserById,
        "POST": createUser
    },
    "/newUser": { "GET": newUserTemplate },
    "/login": {
        "GET": loginPage,
        "POST": '',
    },
    '*': ''
}

function notFound() {
    return 'Page not found'
}
function methodNotAllowed() {
    return 'Page not found'
}

export function routeHandler(req, res) {
    let [path, queryparams] = req.url.split('?')
    if (queryparams) queryparams = handleQueryParams(queryparams)
    if (!routes[path]) return notFound()
    if (!routes[path][req.method]) return methodNotAllowed()
    // res.setHeader('Content-Type', 'application/json');
    // console.log(`Calling ${routes[path][req.method]}`)
    if (req.method == 'POST') {
        console.log('debug')
        let body = ''
        req.on('data', chunck => { body += chunck.toString() })
        req.on('end', () => {
            queryparams = handleQueryParams(body)
            console.log(body)
            res.end(routes[path][req.method](queryparams))
        })
    }
    res.end(routes[path][req.method](queryparams))

}