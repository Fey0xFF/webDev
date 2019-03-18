const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('<h1>HELLLOOO</h1>')
	next();
})

app.get('/', (req, res) => {
	res.send("Getting Root...");
})

app.get('/profile', (req, res) => {
	res.send("Getting Profile...");
})

app.post('/profile', (req, res) => {
	const user = {
		name: "Sally",
		hobby: "Soccer"
	}
	res.send(user);
})

app.listen(3000);


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