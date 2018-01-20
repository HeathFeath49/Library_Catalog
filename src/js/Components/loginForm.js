import React from 'react';

function sendLoginData(){
	console.log('login button clicked!!');
}



class LoginForm extends React.Component{
	render(){
		return(
			<div id='loginFormDiv'>
				<input type='text' id='username' placeholder='Username' />
				<input type='password' id='password' placeholder='Password' />
				<button onClick={sendLoginData} id='loginBtn'>Enter</button>
			</div>
		);
	}
}

export default LoginForm;
