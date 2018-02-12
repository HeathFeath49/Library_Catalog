import React from 'react';
const styles = require('../../styles');



class LoginForm extends React.Component{
	render(){
		return(
			<div id='loginDiv' style={styles.form.smallForm}>
				<input type='text' id='username' placeholder='Username' name='username' />
				<input type='password' id='password' placeholder='Password' name='password' />
				<input type='submit' className='enterBtn'/>
			</div>
		);
	}
}

export default LoginForm;
