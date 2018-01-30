import React from 'react';

function sendLoginData(){
	console.log('login button clicked!!');
}

const loginFormStyle = {
	backgroundColor:'tan',
	paddingTop:'10px',
	width:'400px',
	height: '300px',
	margin:'auto',
	textAlign:'center'
	
};


class LoginForm extends React.Component{
	render(){
		return(
			<div id='loginDiv' style={loginFormStyle}>
				<input type='text' id='username' placeholder='Username' />
				<input type='password' id='password' placeholder='Password' />
				<button className='enterBtn' onClick={sendLoginData} >Enter</button>
			</div>
		);
	}
}

export default LoginForm;
