const express = require('express');
const port = 2000;
const users = require("./MOCK_DATA.json");
const app = express();
const fs = require('fs');
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log("MongoDB error:", err));

// Schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    }
}, { timestamps: true }); // Corrected here

const User = mongoose.model("User", userSchema);

app.post('/api/users', async (req, res) => {
    const body = req.body;

    // Ensure all required fields are present
    if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title) {
        return res.status(400).json({ msg: "All fields required" });
    }

    try {
        const result = await User.create({
            firstName: body.first_name,
            lastName: body.last_name,
            email: body.email,
            jobTitle: body.job_title,
        });
        console.log(result);

        return res.status(201).json({ msg: "Success", user: result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Server error" });
    }
});

app.get('/', (req, res) => {
    res.end("Homepage");
});

app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Uncomment this if you want to write to MOCK_DATA.json
// app.post('/api/users', (req, res) => {
//     const body = req.body;
//     users.push({ ...body, id: users.length + 1 });
//     fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//         return res.status(201).json({ status: "Success", id: users.length });
//     });
// });

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
