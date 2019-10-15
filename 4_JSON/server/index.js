const http = require("http");
const url = require("url");
const hostname = "localhost";
const port = 8080;

//stored data (this could be made dynamic by using local storage and creating a form where things can be submitted)
const data = {
  firstName: "Bob",
  lastName: "Smith",
  email: "bob@smith.com",
  address: "000 Middle St, Nowhere, Alaska 00000",
  phone: "000-000-0000",
  verified: false,
}


// Create the server to work with the query string
const server = http.createServer(function (req, res) {
  let data_output = new Object;
 // Send an OK header since everything is fine here
 res.statusCode = 200;
 res.setHeader('Content-Type', 'application/json');
 // Split the URL into parts
 const queryObj = url.parse(req.url, true).query;

 let str_output = Object.keys(queryObj).length == 0 ? "Please try a query string": "";

 Object.keys(queryObj).forEach((elem) => {
   data_output[elem] = data[elem];

   if (data[elem] === undefined) {
     str_output = str_output+"\""+elem+"\" is not a valid key. ";
   }
 })

 // console.log(data_output);
 res.write(str_output);
 res.end(JSON.stringify(data_output));
});

server.listen(port, hostname, () => {
 console.log(`server at http://${hostname}:${port}/` + ' ok');
});
