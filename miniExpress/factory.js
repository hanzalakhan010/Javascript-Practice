import http from 'http'
import { notFound } from './defaults.js';
import { handleQueryParams } from './utils.js';
import { renderStatic } from './utils.js';
export default class App {
    constructor() {
        this.routes = {
            "GET": {}, "POST": {}
        }
        this.staticFolder = ''
        this.middlewares = []
    }
    use(...args) {
        if (typeof args?.[0] === 'string'){

        }
        else{
            this.middlewares.push(...args)
        }
    }
    get(route, ...callbacks) {
        this.routes['GET'][route] = [...this.middlewares,...callbacks];
    }
    post(route, ...callbacks) {
        this.routes['POST'][route] = [...this.middlewares,...callbacks];
    }
    patch(route, callback) {
        this.routes['PATCH'][route] = callback;
    }
    redirect(res, location) {
        res.writeHead(302, { Location: location })
        return res.end()
    }
    async handleForm(req) {
        return new Promise((resolve, reject) => {
            let body = ''
            req.on('data', chunk => body += chunk)
            req.on('end', () => {
                req.form = body
                body = handleQueryParams(body)
                resolve(body)
            }
            )
            req.on('error', error => reject(error))
        })
    }
    listen(port, callback) {
        http.createServer((req, res) => {
            // this.req = req
            // this.res = res
            this.routeHandler(req, res)
        }).listen(port, callback)
    }

    serveStatic(req, res) {
        console.log('serving', `./templates/${req.url}`)
        return renderStatic(`./templates/${req.url}`, res)
    }

    routeHandler(req, res) {
        for(let middleware of this.middlewares){
            middleware(req)
        }
        if (this.staticFolder && req.url.startsWith(this.staticFolder)) {
            return res.end(this.serveStatic(req, res))
        }
        let [path, queryparams] = req.url.split('?')
        if (queryparams) handleQueryParams(queryparams, req)
        if (!this.routes?.[req.method]?.[path]) {
            res.writeHead(404)
            return res.end(notFound())
        }
        else {
            const callbacks = this.routes[req.method][path]
            for (let callback of callbacks) {
                if (callback(req, res)) break
            }
        }

    }
}




