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


/*var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'chat'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;*/