import React from 'react';

const buttonStyle = {
	padding:'8px',
	display:'block',
	height:'70px',
	width:'175px',
	marginTop:'15px'
};

const navContainerStyle = {
	display:'block'
};

const selectedBtnStyle = {
	backgroundColor:'tan',
	color:'white'
};

const notSelectedBtnStyle = {
	backgroundColor:'white',
	color:'black'
};


/*         NOTES  

// Look into using refs for accessing properties when rendering <NavItem> tags within NavBar
Component


*/




function NavItem(props){
	return (
			<div style={buttonStyle} onClick ={props.onClickHandle} className ={props.className} >{props.value}</div>
	)
}


class NavBar extends React.Component{

	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
		this.determineClass = this.determineClass.bind(this);

		this.state = {
			selectedValue:'Library'
		};

	}

	updateState(value){
		console.log(value);
		if(value !== this.state.selectedValue){
			return this.setState({
				selectedValue:value
			})
		}
	}

	determineClass(value){
		var className;

		if(this.state.selectedValue === value){

			className='selectedBtn';
		}
		else{
			className='notSelectedBtn';
		}

		return className;
	}

	render(){

		return(

			<div style={navContainerStyle}>
				<NavItem value='Library' onClickHandle={()=>this.updateState('Library')} className={this.determineClass('Library')}/>
				<NavItem value='My Checkouts' onClickHandle={()=>this.updateState('My Checkouts')} className={this.determineClass('My Checkouts')}/>
				<NavItem value='My Account' onClickHandle={()=>this.updateState('My Account')} className={this.determineClass('My Account')}/>
			</div>	

		)

	}

}

export default NavBar;