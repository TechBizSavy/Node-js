/*

Express js 
Making a simple a get request 
and will look at the parameters and query

1) install express 
*/

const express = require('express')

const app = express() // This helps us to handle to all the handler that we need make separateley in http module
const port = 2000



// making a get request 
app.get('/' , (req , res)=>{
  res.end("Hello guys ")
})

app.get('/about/:slug' , (req , res)=>{
  console.log(req.params)
  console.log(req.query) // This can be done by using ? operator
  res.end(`about ${req.params.slug}`)
})

// we can use a package named slugify 
// Now will make params and querys'


app.listen(port , ()=>{
  console.log(`The server started at port ${port}`)
})
