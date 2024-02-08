const express = require('express');
const serverless = require('serverless-http');
const app = require('./expressFunction');

const netlifyFunction = express();
netlifyFunction.use('/.netlify/functions/expressFunction', app);

// Export the Netlify function
module.exports = netlifyFunction;
