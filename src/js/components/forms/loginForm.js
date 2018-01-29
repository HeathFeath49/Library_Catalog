import React from 'react';

function sendLoginData(){
	console.log('login button clicked!!');
}

const loginFormStyle = {
	backgroundColor:'blue',
	paddingTop:'25px',
	width:'400px',
	height: '200px',
	margin:'auto',
	
};


class LoginForm extends React.Component{
	render(){
		return(
			<div id='loginDiv' style={loginFormStyle}>
				<input type='text' id='username' placeholder='Username' />
				<input type='password' id='password' placeholder='Password' />
				<button onClick={sendLoginData} id='loginBtn'>Enter</button>
			</div>
		);
	}
}

export default LoginForm;
