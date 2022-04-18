const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;


const dbConfigHeroku = {
	host: "jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "b4yrccvhri9gvd59",
	password: "yftqtb8a3qlutqx2",
	database: "ea0v1cstfyjse0aj",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "root",
	database: "restaurant_review",
	port: 3306,
	multipleStatements: false,
	namedPlaceholders: true

};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		