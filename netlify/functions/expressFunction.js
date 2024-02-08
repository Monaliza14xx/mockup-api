const express = require('express');
const app = express();

// Define a middleware function
function myMiddleware(req, res, next) {
    console.log('This is a middleware function');
    next();
}

// Apply the middleware to all routes
app.use(myMiddleware);

// Define a route
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Netlify function!' });
});

// Export the Express app
module.exports = app;
