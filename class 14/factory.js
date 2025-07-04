import { notFound } from '../class 13/blueprint.js';
import http from 'http'
import { handleQueryParams } from '../class 13/utils.js';
export default class App {
    constructor() {
        this.routes = {
            "GET": {}, "POST": {}
        }
    }
    get(route, callback) {
        this.routes['GET'][route] = callback;
    }
    post(route, callback) {
        this.routes['POST'][route] = callback;
    }
    patch(route, callback) {
        this.routes['PATCH'][route] = callback;
    }
    listen(port) {

        http.createServer((req, res) => {
            // this.req = req
            // this.res = res
            routeHandler(this.routes, req, res)
        }).listen(port)
    }
}

export function routeHandler(routes, req, res) {
    console.log('Request received:', req.method, req.url);
    let [path, queryparams] = req.url.split('?')
    if (queryparams) queryparams = handleQueryParams(queryparams, req)
    if (!routes?.[req.method]?.[path]) return notFound()
    console.log('Calling', routes[req.method][path])
    if (req.method == 'GET') {
        res.setHeader('Content-Type', 'text/html');
        res.end(routes[req.method][path](req, res));
    }

}
