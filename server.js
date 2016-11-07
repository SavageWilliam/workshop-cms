var http = require('http');
var server = http.createServer();
var port = 3000; // Not saved in a variable in Node Girls tutorial. But isn't this pretty?!!!

server.listen(port, function() {
  console.log('The server is listening on port', port, 'Ready to accept requests!')
})
