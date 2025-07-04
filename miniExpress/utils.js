



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


