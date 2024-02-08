const express = require('express');
const serverless = require('serverless-http');
const app = require('./expressFunction');

const netlifyFunction = express();
netlifyFunction.use('/.netlify/functions/expressFunction', app);

// Export the handler function
module.exports.handler = serverless(netlifyFunction);
