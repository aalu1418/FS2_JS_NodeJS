const http = require("http");
const url = require("url");
const hostname = "localhost";
const port = 3000;


// Create the server to work with the query string
const server = http.createServer(function (req, res) {
 // Send an OK header since everything is fine here
 res.writeHead(200, {'Content-Type': 'text/html'});
 // Split the URL into parts
 var address = url.parse(req.url, true);

 // Now we have an object we can work with
 // We can execute code here for that purpose
 const returnValue = {
   "server_status": "ok",
   "timestamp": new Date(),
   "address": req.url,
   "query string": address.query,
   "query check": Object.keys(address.query).length != 0 ? "Not empty": "Empty query",
 }

 // const empty_check = returnValue["query string"] ? "": "Empty query"
 // End the response and send back returnValue
 res.end(JSON.stringify(returnValue));
});

server.listen(port, hostname, () => {
 console.log(`server at http://${hostname}:${port}/` + ' ok');
});
