const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();

// Use the CORS middleware
app.use(cors());

// Route to handle requests to /api/data
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Netlify function with Express.js!' });
});

// Route to generate a random 6-digit number
app.get('/api/random-number', (req, res) => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000); // Generate random number between 100000 and 999999
    res.json({ randomNumber });
});

// Export the handler function
module.exports.handler = serverless(app);
