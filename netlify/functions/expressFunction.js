const express = require('express');
const app = express();

// Define a route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Netlify function!' });
});

// Export the handler function
exports.handler = async (event, context) => {
    return serverless(app)(event, context);
};
