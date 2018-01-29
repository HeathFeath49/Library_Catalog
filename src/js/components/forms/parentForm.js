import React from 'react';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';

const buttonDivStyle = {
	textAlign:'center',
	fontSize:'2.5em',
	cursor:'pointer',
	height:'100px',
	width:'400px',
	margin: 'auto'
};

const buttonStyle = {
	padding:'8px',
	display:'block',
	height:'100px',
	width:'175px',
	marginTop:'15px'
};



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
				<div id='buttonDiv' style={buttonDivStyle}>
					<div id='signUpBtn' style={buttonStyle} onClick={()=>this.updateState('signUp')} className={this.state.signUpSelected ? "selectedBtn" : "notSelectedBtn"}>Sign Up</div>
					<div id='loginBtn' style={buttonStyle} onClick={()=>this.updateState('login')} className={this.state.loginSelected ? "selectedBtn":"notSelectedBtn"}>Login</div>
				</div>



			</div>
			//return form needed based on state of clicked buttons
		)
	}

}

export default ParentForm;