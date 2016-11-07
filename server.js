var http = require('http');
var port = 3000; // Not saved in a variable in Node Girls tutorial. But isn't this pretty?!!!

var message = "Welcome to the best server in the world!";

function handler(request, response) {
  response.writeHead(200, {"Content-type": "text/html"});
  response.write(message);  //response body
  respone.end();   //end response
}

var server = http.createServer(handler);
server.listen(port, function() {
  console.log('The server is listening on port', port, 'Ready to accept requests!')
})
