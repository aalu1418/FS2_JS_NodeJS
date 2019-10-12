const port = 3000;
const express = require('express')
const app = express();
app.get('/', (req, res) => {
	 res.send('Hello World')
});
app.get('/ping', (req, res) => {
	res.send('ping recieved, pong returned')
});
app.listen(port, () => {
	 console.log('ok on ' + port)
});
