var http = require('http');
var fs = require('fs');
var port = 3000; // Not saved in a variable in Node Girls tutorial. But isn't this pretty?!!!

var message = "Welcome to the best server in the world!";

function handler(request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  var method = request.method;
  console.log(method);
  if (endpoint === '/') {
    response.writeHead(200, {"Content-type": "text/html"});

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    })
  }
  if (endpoint === '/node') {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write('Oh my goodness, you\'re in node');
    response.end();
  } else if (endpoint === '/girls') {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write('Run the world\, girls');
    response.end();
  } else {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write(message);  //response body
    response.end();   //end response
  }
}

var server = http.createServer(handler);
server.listen(port, function() {
  console.log('The server is listening on port', port, 'Ready to accept requests!')
})
