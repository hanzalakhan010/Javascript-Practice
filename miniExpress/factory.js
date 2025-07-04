import http from 'http'
import { notFound } from './defaults.js';
import { handleQueryParams } from './utils.js';
import { readFileSync } from 'fs'
export default class App {
    constructor() {
        this.routes = {
            "GET": {}, "POST": {}
        }
        this.sessions = {}
        this.staticFolder = ''
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
        return renderStatic(`./templates/${req.url}`)
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
            return this.routes[req.method][path](req, res)
        }

    }
}



export function renderTemplate(template, res, data = {}) {
    res.setHeader('Content-type', 'text/html')
    let renderedTemplate = readFileSync(`./templates/${template}`, 'utf8')
    renderedTemplate = renderedTemplate.replace(/<%=([\s\S]+?)%>/g, (_, key) => {
        key = key.trim()
        return data[key] ?? ''

    })
    return renderedTemplate
}

export function renderStatic(file) {
    try {

        return readFileSync(file, 'utf8')
    }
    catch (err) {
        if (err.code == 'ENOENT') {
            console.error(`File not found: ${file}`);
            return 'File not found'
        }
        throw err

    }
}