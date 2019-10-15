// Setting up modules
var http = require("http"); // HTTP
var url = require("url"); // URL handling
var fs = require("fs"); // File serving

const hostname = "localhost";
const port = 8080;

const server = http.createServer(function(req, res) {
  var queryData = url.parse(req.url, true); // parse the URL data
  var filename = "../client"+ queryData.pathname; // assign a file name for retrieval

  //handle no url given
  if (queryData.pathname === "/") {
    filename = filename+"/index.html";
  }

  // Read the file. If it exists send the contents back, if not return a 404 error
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<p>404 Not Found</p><p>Use /index.html, /page1.html, /page2.html</p>");
      return res.end();
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`server at http://${hostname}:${port}/` + " ok");
});
