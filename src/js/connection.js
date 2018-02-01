var express = require('express');
var mysql = require('mysql');


var connection = mysql.createConnection({
	host:'localhost',
	user:'duser',
	password:'test',
	database:'library_catalog'
});

module.export = connection;