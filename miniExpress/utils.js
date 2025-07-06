import { readFileSync } from 'fs'
import crypto from 'crypto'

export function handleQueryParams(queryparams, req) {
    let parameters = {}

    if (!queryparams) return parameters

    let params = queryparams.split('&')
    params.forEach(param => {
        let [rawKey, rawValue = ''] = param.split('=')
        const key = decodeURIComponent(rawKey)
        let value = decodeURIComponent(rawValue)

        // Try to cast to correct type
        if (value === 'true') {
            value = true
        } else if (value === 'false') {
            value = false
        } else if (/^-?\d+$/.test(value)) {
            value = parseInt(value, 10)
        }
        // else: leave it as string (e.g. password, email, etc.)

        parameters[key] = value
    })

    if (req) req.query = parameters
    return parameters
}


export function renderTemplate(template, res, data = {}) {
    res.setHeader('Content-type', 'text/html')
    let renderedTemplate = readFileSync(`./templates/${template}`, 'utf8')
    renderedTemplate = renderedTemplate.replace(/{{([\s\S]+?)}}/g, (_, key) => {
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

export class SessionManager {
    constructor() {
        this.sessions = {}
        this.flashes = {}
    }
    set(data, res) {
        const sessionId = crypto.randomBytes(16).toString('hex')
        this.sessions[sessionId] = data
        res.setHeader(
            'Set-Cookie', `sessionId=${sessionId}; HttpOnly; Path=/`,
        )
    }
    #parseCookies(req) {
        const raw = req.headers.cookie || ''
        return Object.fromEntries(raw.split('; ').map(cookie => cookie.split('=')))
    }
    hasSession(req) {
        const cookies = this.#parseCookies(req)
        if (this.sessions[cookies?.sessionId]) return true
        return false
    }
    getSession(req) {
        const cookies = this.#parseCookies(req)
        if (this.sessions[cookies?.sessionId]) return this.sessions[cookies?.sessionId]
        return false
    }
    deleteSession(req) {
        const cookies = this.#parseCookies(req)
        this.sessions[cookies?.sessionId] = null
        return true
    }

}