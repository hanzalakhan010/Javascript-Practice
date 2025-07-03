import http from 'http'
import { routeHandler } from './blueprint.js'



let server = http.createServer((req, res) => {
    res.end(routeHandler(req, res))
})

server.listen(3000)