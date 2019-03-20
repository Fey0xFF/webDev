const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(express.static(__dirname + '/public'));




app.listen(3000);


// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());


// app.get('/:id', (req, res) => {
// 	// console.log(req.query);
// 	// req.body
// 	// req.headers
// 	console.log(req.params);
// 	res.status(404).send("not found");
// })


// app.use((req, res, next) => {
// 	console.log('<h1>HELLLOOO</h1>')
// 	next();
// })

// OLD APP.GET/POST CODE
// app.get('/profile', (req, res) => {
// 	res.send("Getting Profile...");
// })

// app.post('/profile', (req, res) => {
// 	console.log(req.body)
// 	res.send("success");
// })



// OLD CODE TESTING BASIC HTTP
// const http = require('http');

// const server = http.createServer((request, response) => {
// 	console.log('headers',request.headers);
// 	console.log('method',request.method);
// 	console.log('url',request.url);

// 	const user = {
// 		name: 'John',
// 		hobby: 'skating'
// 	}

// 	response.setHeader('Content-Type', 'application/json');
// 	response.end(JSON.stringify(user));
// })

// server.listen(3000);