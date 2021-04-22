let sqlite3 = require('sqlite3').verbose();
const users = require('./users.json');
const DBSOURCE = "user.sqlite3"

let db = new sqlite3.Database(DBSOURCE, (err) => {
		db.run(`CREATE TABLE users (
            user_id VARCHAR(50),
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            email VARCHAR(50),
            gender VARCHAR(50),
            ip_address VARCHAR(50)
            )`,
				(err) => {
						if (err) {
								console.log(err)
						} else {
								const u = Object.entries(users);
								
								for (const user of u) {
										let id;
										let firstName;
										let lastName;
										let email;
										let gender;
										let ip;
										
										for (const key in user[1]) {
												switch (user[1][key]) {
														case 'id':
																id = user[1][key];
																break;
														case 'first_name':
																firstName = user[1][key];
																break;
														case 'last_name':
																lastName = user[1][key];
																break;
														case 'email':
																email = user[1][key];
																break;
														case 'gender':
																gender = user[1][key];
																break;
														case 'ip_address':
																ip = user[1][key];
																break;
														default:
																break;
												}
										}
										let insert = 'INSERT INTO users (user_id, first_name, last_name, email, gender, ip_address) VALUES (?,?,?,?,?,?)'
										
										db.run(insert, [id, firstName, lastName, email, gender, ip]);
								}
						}
				})
});

db.close();
