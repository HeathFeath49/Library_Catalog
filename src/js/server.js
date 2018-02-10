const express = require('express');
const router = express.Router();
const app = express();
const http = require('http').Server(app);
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const db = require('./database/dbConnection');
/*const connection = mysql.createConnection({
	host:'localhost',
	user:'duser',
	password:'test',
	database:'library_catalog'
});
*/


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.post('/signUp',function(req,res){
	/*console.log(req.body);*/

	/*db.connect(function(err){

	});*/
	

	/*data = [req.body.firstName,req.body.lastName,req.body.username,req.body.password];*/

	var data  = {firstName: 'Heather', lastName: 'Starkie', username:'heathfeath60',password:'sparks49'};

	db.query('SELECT Username FROM users WHERE Username = ?',[req.body.username], function(err,result){
		if(result == 0){
			db.query('INSERT INTO users SET ?',data,function(err,result){
				if(err){ throw err};
				res.send('Sign up complete');
			});
		}
	});

});


app.listen(port, () => console.log('Server running'));