//index.js file
// Requiring module
const express = require('express')
const cors = require('cors')

// Creating express app 
const app = express()

// Enabling CORS for any unknown 
// origin(https://xyz.example.com)
app.use(cors());

// Sample api routes for testing
app.get('/', (req, res) => {
    res.json("welcome to our server")
});

app.get('/secret', (req, res) => {
    const secret = Math.floor(Math.random() * 100)
    res.json({ secret })
});

// Port Number
const port = 5000;

// Server setup
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
});