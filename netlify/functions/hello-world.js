const handler = async (event) => {
    try {
      const subject = event.queryStringParameters.name || 'World'
      return {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*", // Adjust this to your frontend URL if possible
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
        },
        body: JSON.stringify({ message: `Hello ${subject}` }),
        // // more keys you can return:
        // headers: { "headerName": "headerValue", ... },
        // isBase64Encoded: true,
      }
    } catch (error) {
      return { statusCode: 500, body: error.toString() }
    }
  }
  
  module.exports = { handler }
  