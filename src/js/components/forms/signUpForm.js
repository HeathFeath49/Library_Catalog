import React from 'react'


function sendSignUpData(){
	console.log('sign up button clicked!!')
}


class SignUpForm extends React.Component{
	render(){
		return(
			<div id='signUpFormDiv'>
				<input type='text' id='firstName' placeholder="First Name" />
				<input type='text' id='lastName' placeholder="Last Name" />
				<input type='text' id='username' placeholder='Username' />
				<input type='password' id='password' placeholder='Password' />
				<button onClick={sendSignUpData} id='signUpBtn'>Enter</button>
			</div>
		);
	}
}


export default SignUpForm;