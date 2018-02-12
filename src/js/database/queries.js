const mysql = require('mysql');
const db = require('./dbConnection');


module.exports = {

	registerUser:function(data,callback){
		db.query('SELECT Username FROM users WHERE Username = ?',[data.username],function(err,result){
			if(result == 0){
				db.query('INSERT INTO users SET ?',data,function(err,result){
					if(err){ 
						return callback(err);
					};
					return callback(null,true);
				})
			}
			else{
				// have it direct back to signUp form with message
				return callback(null,false);
			}
		})
	}

	
}