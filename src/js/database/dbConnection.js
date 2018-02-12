const mysql = require('mysql');
const connection = mysql.createConnection({
	host:'localhost',
	user:'duser',
	password:'test',
	database:'library_catalog'
});

connection.connect(function(err){
	if(err) throw err;
});

module.exports = connection;


