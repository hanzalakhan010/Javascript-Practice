import { loginPage, newUserTemplate, usersDisplay, userProfile } from "./templates.js"
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from "./userCRUD.js"
import { handleQueryParams } from './utils.js'
// const routes = {
//     '/': {
//         'GET': () => usersDisplay(getAllUsers()),
//         "POST": createUser
//     },
//     "/user": {
//         "GET": (params) => userProfile(getUserById(params?.id)),
//         "DELETE": deleteUserById,
//     },
//     "/newUser": { "GET": newUserTemplate },
//     "/login": {
//         "GET": loginPage,
//         "POST": '',
//     },
//     '*': ''
// }

const routes = {
    "GET": {
        '/': (req,res) => usersDisplay(getAllUsers()),
        "/user": (params,req,res) => userProfile(getUserById(params?.id)),
        "/newUser": (req,res) => newUserTemplate(),
        '/login': (req,res) => loginPage(),
    },
    "POST": {
        '/user': (req,res,params)=>createUser(params),
    },
    'PATCH':{
        '/user': (params) => updateUserById(params?.id, params),
    },
    "DELETE": {
        "/user": () => deleteUserById(userId),
    }
}
export function notFound() {
    return 'Page not found'
}
function methodNotAllowed() {
    return 'Page not found'
}

export function routeHandler(req, res) {
    let [path, queryparams] = req.url.split('?')
    if (queryparams) queryparams = handleQueryParams(queryparams)
    if (!routes?.[req.method]?.[path]) return notFound()
    // if (!routes[req.method][path]) return methodNotAllowed()
    // res.setHeader('Content-Type', 'application/json');
    // console.log(`Calling ${routes[path][req.method]}`)
    if (req.method == 'POST' || req.method == 'PATCH') {
        console.log('debug')
        let body = ''
        req.on('data', chunck => { body += chunck.toString() })
        req.on('end', () => {
            queryparams = handleQueryParams(body)
            // console.log(body)
            res.end(routes[req.method][path](queryparams))
        })
    }
    console.log('Calling', routes[req.method][path])
    if (req.method == 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end(routes[req.method][path](queryparams))
    }

}