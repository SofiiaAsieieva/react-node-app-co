const http = require('http');
const url = require('url');
const { parse } = require('querystring');

http.createServer((request, response) =>{
		console.log('server work');
		
		if (request.method === 'GET') {
				let urlRequest = url.parse(request.url, true); //
				console.log(urlRequest);
				let test = urlRequest.query.test;
				
				if (Number(test) % 2 === 0) {
						response.end('even');
				}
				
				response.end('odd');
		} else {
				let body = '';
				
				request.on('data', chunk => {
						body += chunk.toString();
				});
				
				request.on('end', () => {
						console.log(body);
						let params = parse(body)
						console.log(params);
						console.log(params.hi)
						
						response.end('ok');
				})
		}
		
}).listen(5000)


// const sqlite3 = require('sqlite3').verbose();
// let db = new sqlite3.Database(':memory:', (err) => {
// 		if (err) {
// 				return console.error(err.message);
// 		}
// 		console.log('Connected to the in-memory SQlite database.');
// });

//sqllite migration
//seed sqlit3 from json
//
// CREATE TABLE users (
// 		id INTEGER PRIMARY KEY,
// 		first_name VARCHAR(50),
// 		last_name VARCHAR(50),
// 		email VARCHAR(50),
// 		gender VARCHAR(50),
// 		ip_address VARCHAR(50));
//
// INSERT INTO users (id, first_name, last_name, email, gender, ip_address)
// VALUES (1, "Christie", "Gann", "cgann0@hostgator.com", "Female", "57.14.195.231");

//id":1,
// "first_name":"Christie"
// "last_name":"Gann"
// "email":"cgann0@hostgator.com"
// "gender":"Female"
// "ip_address":"57.14.195.231"
