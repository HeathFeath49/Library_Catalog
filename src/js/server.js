const express = require('express');
const router = express.Router();
const app = express();
const http = require('http').Server(app);
//const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const mysql = require('mysql');
const connection = mysql.createConnection({
	host:'localhost',
	user:'duser',
	password:'test',
	database:'library_catalog'
});





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/*connection.connect()*/


app.post('/signUp',function(req,res){
	/*console.log(req.body);*/
	res.send(req.body);
});


app.listen(port, () => console.log('Server running'));