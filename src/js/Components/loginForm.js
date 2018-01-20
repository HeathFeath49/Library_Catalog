import React from 'react';

function sendLogin(){
	console.log('login button clicked!!');
}

function loginBtn(){
	return (
		<button onClick={sendLogin}>Login</button>
	);
};


class LoginForm extends React.Component{
	render(){
		return(
			<div id='signUp'>
				<input type='text' id='firstName' placeholder='First Name' />
				<input type='text' id='lastName' placeholder='Last Name' />
				<input type='email' id='email' placeholder='Email' />
				<input type='password' id='password' placeholder='Placeholder' />
				<loginBtn />
			</div>
		);
	}
}

export default LoginForm;
