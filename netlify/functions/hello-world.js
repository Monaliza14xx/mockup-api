// hello.js
exports.handler = async function(event, context) {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Adjust this to your frontend URL if possible
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
      },
      body: JSON.stringify({ message: "Hello, World!" })
    };
  };
  