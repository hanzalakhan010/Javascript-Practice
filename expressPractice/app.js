import express from 'express'

const app = express()


app.get('/',(req,res)=>{
    res.end(JSON.stringify({'message':'success'}))
})


app.listen(3000)