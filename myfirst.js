//include a module//
var http = require('http');
//http.createServer creates a server object//
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});// HTTP header
  res.write('Hello World');//write a client response//
  res.end('');//ends the response//
}).listen(8080);// the server is ran on port 8080//