const express = require("express")
const port = 2000
const app = express()
const mongoose = require('mongoose')


// Connection
mongoose.connect('mongodb://127.0.0.1:27017/prac-15')
.then(()=> console.log('Mongo connceted'))
.catch((err)=> console.log("Errorr " , err) )

// Schema 
const userSchema  = new mongoose.Schema({
    firstname:{
        type : String,
        required : true
    },

    lastname:{
        type : String
    },

    email:{
        type: String,
        required : true,
        unique :  true
    } ,
 
},{timestamps : true})


// Model 
 const User = mongoose.model('user ' , userSchema)

// This make the data in objects form
app.use(express.urlencoded({extended : true}))


// Fetching Data from self made DB
app.get('/users' ,async (req , res)=>{
    const allDbUsers = await User.find({})
    const html = `
        <ul>
        ${allDbUsers.map((user)=> `<li> ${user.id} - ${user.firstname} - ${user.email} </li> `).join("")}
     
        </ul>
    `
    res.send(html)
})


// Posting Info in DB
app.post('/users' , async (req , res)=>{    
    const body = req.body
  const result =   await User.create({
        firstname : body.first_name,
        lastname : body.last_name,
        email : body.email
    })

    return res.status(201).json({result})
})




app.listen(port , ()=>{
    console.log(`Server stared ${port}`)
})