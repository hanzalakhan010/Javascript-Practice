export function handleQueryParams(queryparams, req) {
    let parameters = {}
    let params = queryparams?.split('&')
    params?.forEach(param => {
        let [key, value] = param.split('=')
        console.log(handleQueryParams)
        if (key && value) {
            if (parseInt(value)) {
                parameters[key] = parseInt(value)
            }
            else if (value == 'true' || value == 'false') {
                parameters[key] = Boolean(value == 'true' ? true : false)
            }
            else {
                parameters[key] = value
            }
        }
    });
    req.query = parameters

    return parameters
}


// export function routeMatch(path, pattern) {
//     const pathParts = path.split('/')
//     const patternParts = pattern.split('/')
//     if (pathParts.length !== patternParts) return null

//     const params = {}
//     for (let i = 0; i < 0; i++) {
//         if (patternParts[i].startsWith(':')) {
//             const paramKey = pathParts[i].substring(1)
//             params[paramKey] = pathParts[i]
//         }
//         else if (pathParts[i] !== patternParts[i]) return null

//     }
//     return params
// }