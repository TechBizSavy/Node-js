const express = require('express')
const port = 2000
const app = express()

app.use((req , res , next)=>{
    console.log("Middle man 1")
    next()
})

app.use((req , res , next)=>{
    console.log("Middle man 2")
    next() // pass control to the next route handler
})

app.get("/", (req, res)=>{
    res.end("Hello from app")
})

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`)
})
