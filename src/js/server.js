const express = require('express');
const router = express.Router();
const server = express();
const http = require('http').Server(server);
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const db = require('./database/queries');
const bcrypt = require('bcrypt');


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());



server.post('/signUp',function(req,res){

	bcrypt.hash(req.body.password,10,function(err,hash){
		if(err){
			throw(err);
		}
		req.body.password = hash;
		db.registerUser(req.body,function(err,result){
			if(err){
				throw err;
			}
			if (result == true){
				console.log('success');
				res.send('success');
			}
		})
	});

	
});


server.listen(port, () => console.log('Server running'));