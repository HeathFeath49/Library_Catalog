import React from 'react';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';

const styles = require('../../styles')


class ParentForm extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			signUpSelected: true,
			loginSelected: false
		};
		
		this.updateState = this.updateState.bind(this);
	}


	updateState(selectedBtn){
		var loginSelected, signUpSelected;

		//determine state
		if(selectedBtn === 'signUp'){
			signUpSelected = true;
			loginSelected = false;
		}
		else{
			signUpSelected = false;
			loginSelected = true;
		}

		//update state
		return this.setState({
			signUpSelected:signUpSelected,
			loginSelected:loginSelected
		})
	}

	render(){
		
		return(
			<div>
				<div id='buttonDiv' style={styles.btn.btnWrap}>
					<div id='signUpBtn' style={styles.btn.btnLoginSignUp} onClick={()=>this.updateState('signUp')} className={this.state.signUpSelected ? "selectedBtn" : "notSelectedBtn"}>Sign Up</div>
					<div id='loginBtn' style={styles.btn.btnLoginSignUp} onClick={()=>this.updateState('login')} className={this.state.loginSelected ? "selectedBtn":"notSelectedBtn"}>Login</div>
				</div>

				
				{this.state.signUpSelected? <SignUpForm />:<LoginForm />}


			</div>
			
		)
	}

}

export default ParentForm;