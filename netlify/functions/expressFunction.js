const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const baseUrl = '/.netlify/functions/expressFunction';
// Use the CORS middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get(baseUrl, (req, res) => {
    res.json({ message: 'Hello from Netlify function with Express.js!' });
});

app.get(baseUrl + "/random-number", (req, res) => {
    let random = Math.floor(Math.random() * 100);
    res.json({ message: `Random number: ${random}` });
});

app.post(baseUrl + "/register", (req, res) => {
    const data = req.body;
    const name = data.name;
    const email = data.email;
    console.log(data);
    res.json({
        message: `User ${name} with email ${email} registered`
    });
});

app.post(baseUrl + "/login", (req, res) => {
    const data = req.body;
    const email = data.name;
    const tel = data.tel;
    const password = data.password;
    console.log(data);
    res.json({
        message: `Email: ${email} Tel: ${tel} Password: ${password} logged in`
    });
});

// Export the handler function
module.exports.handler = serverless(app);
