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
    }
    get(route, ...callbacks) {
        this.routes['GET'][route] = callbacks;
    }
    post(route, ...callbacks) {
        this.routes['POST'][route] = callbacks;
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
        console.log('Request received:', req.method, req.url);
        // console.log(req.url.startsWith(this.staticFolder))
        if (this.staticFolder && req.url.startsWith(this.staticFolder)) {
            return res.end(this.serveStatic(req, res))
        }
        // console.log(req.url)
        // console.log(this.staticFolder)
        let [path, queryparams] = req.url.split('?')
        if (queryparams) handleQueryParams(queryparams, req)
        if (!this.routes?.[req.method]?.[path]) {
            res.writeHead(404)
            return res.end(notFound())
        }
        else {
            const callbacks = this.routes[req.method][path]
            console.log(callbacks)
            for (let callback of callbacks) {
                if (callback(req, res)) break
            }
        }

    }
}




