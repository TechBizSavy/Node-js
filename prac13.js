const express = require('express')
const users = require("./MOCK_DATA.json")
const port = 2000
const app = express()


app.get('/' , (req , res)=>{
    
    res.end("Hello Server started")
})

app.get('/api/users', (req ,res)=>{
    // console.log(req.headers)
    res.setHeader('X-myName' , 'Harsh')
   return  res.json(users)
})


app.listen(port , ()=>{
    console.log(`Server started ${port}`)
})