// Fetching data by making a random data using - Express Js 
// if you dont know mongodb you can make fake data by using 

// To make data you can use 

// Our data has name , id and many more
// we will be fetching the user name and last name and specific id 

const express = require("express")
const users = require("./MOCK_DATA.json")
const port = 2000
const app = express()
const fs = require('fs')

app.use(express.urlencoded({extended: false}))


// To get data of all users
app.get('/api/users' ,(req , res)=>{
    return res.json(users)
})

// To get users names
app.get('/users' , (req ,res)=>{
    const html = `
    <ul>
    ${users.map((users)=> `<li> ${users.first_name} ${users.last_name}`).join("")}
    </ul>
    `
   return res.send(html)
})


// To get id of specific user

app.get('/api/users/:id' , (req ,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id === id)
    return res.json(user)
})


// app.post('/api/users' , (req , res)=>{
//     const body = req.body
//     console.log(body)
//     users.push({...body , id: users.length + 1})
//     fs.writeFile('./MOCK_DATA.json' , JSON.stringify(users) , (e , d)=>{
//         return res.json({status : "success"})
//     })
// })


app.delete('/api/users' , (req , res)=>{
    const id = Number(req.params.id)
    const userIndex = users.findIndex((user)=> user.id === id)
    
    const delUser = users.splice(userIndex , 1)[0];

    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", delUser });
      });
  
})





app.listen(port , ()=>{
    console.log(`Server started ${port}`)
})