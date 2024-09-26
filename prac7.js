// for that us must install node js and also initial it 
// Making a http server and log file that keeps record of url visit and Time also in node js 

const http = require('http')
const fs = require('fs')
const { error } = require('console')


const myServer = http.createServer((req , res)=>{
  const log = `New req rec at ${Date.now()} at ${req.url}`  
  // They are nothing but making req on which path 

  fs.appendFile('log1.txt' , log , (err)=>{
    if(err) throw error
  })

  switch (req.url) {
    case '/':
      res.end("Homepage")
      break;
    case '/about':
      res.end("About page")
      break;
    case '/contact':
      res.end("Contact page")
      break;
  
    default:
      res.end("404 Not found ")
      break;
  }
})


myServer.listen(9000 , ()=>console.log("Server started"))