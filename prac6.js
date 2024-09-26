const fs = require('fs')
const os = require('os')

console.log(os.cpus().length);

// FS Module Operations
// Creating a file 
// fs.writeFileSync('prac.txt' , "This is practical 1 file ")

//Reading content in file
// let result  = fs.readFileSync("./prac.txt" , 'utf-8') // utf =-8 to encoding
// console.log(result)

// fs.appendFileSync('prac.txt' , new Date().getDate().toLocaleString())
// let realTime = new Date().getTime().toLocaleString()
// fs.appendFileSync('prac.txt' , `The time is ${realTime} `)
// fs.copyFileSync('./prac.txt' , './copy.txt')
// fs.unlinkSync('./copy.txt')
// console.log(fs.statSync('./prac.txt').isFile())

// Sync
// fs.writeFile("hello.txt" , "My self Harsh S Chalwadi " , (err)=>{
//     console.log(err)
// })

