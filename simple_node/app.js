import {readFile} from 'fs/promises'
import http from 'http'



const app = http.createServer((req,res)=>{
    // const fileContent = readFileSync('index.html','utf-8')
    
    readFile('index.html','utf-8',(err,data)=>{
        res.setHeader('content-type','text/html')

        res.end(data)

    })
})


app.listen(3000,()=>{
    console.log('Listening on port 3000')
})