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

	constructor() {
    	super();
    	//this.onSubmit = this.handleSubmit.bind(this);
  	}

  	/*handleSubmit(e){
  		const self = this;
  		
  		e.preventDefault();
  		fetch('/signUp',{
  			method:'POST',
  			headers:{ ContentType: "application/json" },
  			body:{
  				firstName:'Heather'
  			}
  		})
  		.then(function(response){
  			return response.json();
  		}).then(function(body){
  			console.log(body);
  		});
  	}*/

	render(){
		return(
			<div>
				<form action='/signUp' method='post' style={signUpFormStyle}>
					<input type='text' id='firstName' placeholder='First Name' name='firstName'/>
					<input type='text' id='lastName' placeholder='Last Name' name='lastName'/>
					<input type='text' id='username' placeholder='Username' name='username'/>
					<input type='password' id='password' placeholder='Password' name='password' />
					<input type='submit' className='enterBtn' />
				</form>
				
			</div>
		);
	}
}


export default SignUpForm;