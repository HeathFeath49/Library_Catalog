import React from 'react';
const styles = require('../../styles');



class SignUpForm extends React.Component{

	constructor() {
    	super();
    	this.onSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event){

  		event.preventDefault();
  		const formData = event.target;

  		const data = {
  			firstName: formData.firstName.value,
  			lastName: formData.lastName.value,
  			username: formData.username.value,
  			password: formData.password.value
  		};
  
  		fetch('/signUp',{
  			method:'POST',
  			headers: { "Content-Type": "application/json" },
  			body:JSON.stringify(data)
  		})
  		.then(response => {
  			console.log(response,'hola');
  		})
  		.catch(err => {
  			console.log(err,'not hola');
  		});
  	};

	render(){
		return(
			<div>
				<form onSubmit = {this.handleSubmit} style={styles.form.smallForm}>
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