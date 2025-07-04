import { loginPage, newUserTemplate, usersDisplay, userProfile } from "./templates.js"
import { createUser, deleteUserById, getAllUsers, getUserById } from "./userCRUD.js"
import { handleQueryParams } from './utils.js'

function notFound() {
    return 'Page not found'
}
function methodNotAllowed() {
    return 'Page not found'
}

export function routeHandler(req, res) {
    let [path, queryparams] = req.url.split('?')
    if (queryparams) queryparams = handleQueryParams(queryparams)
    switch (true){
        case path == '/' && req.method == 'GET':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(usersDisplay(getAllUsers()))
            break;
        // case path == '/' && req.method == 'POST':

        case path == '/login' && req.method == 'GET':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(loginPage())
            break;
        case path == '/user' && req.method == 'GET':
            res.setHeader('Content-Type', 'text/html')
            res.end(userProfile(getUserById(queryparams?.id)))
        case path == '/newUser' && req.method == 'GET':
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(newUserTemplate())
            break;
    }

}