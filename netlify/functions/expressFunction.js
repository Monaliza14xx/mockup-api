const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const baseUrl = '/.netlify/functions/expressFunction';
// Use the CORS middleware
app.use(cors());

app.get(baseUrl, (req, res) => {
    res.json({ message: 'Hello from Netlify function with Express.js!' });
});

app.get(baseUrl+"/random-number", (req, res) => {
    let random = Math.floor(Math.random() * 100);
    res.json({ message: `Random number: ${random}` });
});

// Export the handler function
module.exports.handler = serverless(app);
