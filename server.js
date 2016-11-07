var http = require('http');
var fs = require('fs');
var port = 3000; // Not saved in a variable in Node Girls tutorial. But isn't this pretty?!!!
var path = require('path');

var message = "Welcome to the best server in the world!";

function handler(request, response) {
  var endpoint = request.url;
  console.log(endpoint, "ENDPOINT");

  var extension = endpoint.split(".")[1];
  console.log(extension, "EXTENSION");

  var method = request.method;


  if (endpoint === '/') {
    fs.readFile(path.join(__dirname, 'public/index.html'), function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.writeHead(200, {"Content-type": "text/html"});
      response.end(file);
    })
  } else if (endpoint === '/node') {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write('Oh my goodness, you\'re in node');
    response.end();
  } else if (endpoint === '/girls') {
    response.writeHead(200, {"Content-type": "text/html"});
    response.write('Run the world\, girls');
    response.end();
  } else if (endpoint.indexOf('css') !== -1 || endpoint.indexOf('jpg') !== -1) {   //endpoint is our url of request... its relative to where the request is coming from.
    fs.readFile(path.join(__dirname, 'public', endpoint), function(err, file) {      //__dirname is the DIRECTORY of the 'main' in package.json
      console.log(__dirname, "DIRECTORY NAME");
      if(err) {
        console.log(error);
        return;
      }
      response.writeHead(200, {"Content-type": "text/" + extension});
      response.end(file);
    })
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
