// import http from 'http'

// const server = http.createServer((req,res)=>{
//     console.log(req)
//     res.end()
// })


// server.listen(3000)

import http from 'http'

let server = http.createServer((req,res)=>{
    res.end()
    console.log('server created')
})

server.listen(3000)