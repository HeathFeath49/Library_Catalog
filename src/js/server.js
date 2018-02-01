const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


//CONNECT TO DB
var mysql = require('mysql');

var connection = mysql.createConnection({
	host:'localhost',
	user:'duser',
	password:'test',
	database:'library_catalog'
});


connection.connect()


app.get('/api/hello',(req,res) => {
	res.send({express: 'Hell From Express'});
});

app.listen(port, () => console.log('Server running'));