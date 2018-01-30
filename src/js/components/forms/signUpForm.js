import React from 'react'

const signUpFormStyle = {
	backgroundColor:'tan',
	paddingTop:'10px',
	width:'400px',
	height: '300px',
	margin:'auto',
	textAlign:'center'
}


function sendSignUpData(){
	console.log('sign up button clicked!!')
}


class SignUpForm extends React.Component{
	render(){
		return(
			<div>
				<form style={signUpFormStyle}>
					<input type='text' id='firstName' placeholder="First Name" />
					<input type='text' id='lastName' placeholder="Last Name" />
					<input type='text' id='username' placeholder='Username' />
					<input type='password' id='password' placeholder='Password' />
					<button className='enterBtn' onClick={sendSignUpData} >Enter</button>
				</form>
				
			</div>
		);
	}
}


export default SignUpForm;