import React from 'react';

const buttonStyle = {
	padding:'8px',
	display:'block',
	height:'130px',
	width:'220px'	
};

const buttonDivStyle = {
	textAlign:'center',
	fontSize:'3em',
	cursor:'pointer',
	height:'150px',
	width:'237px',
	backgroundColor:'tan'
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
		<div style={buttonDivStyle}>
			<div style={buttonStyle} onClick ={props.onClickHandle} className ={props.className} >{props.value}</div>
		</div>
	)
}


class NavBar extends React.Component{

	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
		this.determineClass = this.determineClass.bind(this);

		this.state = {
			selectedValue:'Library',
			admin:false
		};

	}

	updateState(value){
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
		var libEditNavItem = <NavItem value='Edit Library' onClickHandle={()=>this.updateState('Edit Library')} className={this.determineClass('Edit Library')}/>
		return(

			<div style={navContainerStyle}>
				<NavItem value='Library' onClickHandle={()=>this.updateState('Library')} className={this.determineClass('Library')}/>
				<NavItem value='My Checkouts' onClickHandle={()=>this.updateState('My Checkouts')} className={this.determineClass('My Checkouts')}/>
				<NavItem value='My Account' onClickHandle={()=>this.updateState('My Account')} className={this.determineClass('My Account')}/>
				
				{this.state.admin? libEditNavItem : null}

			</div>	

		)

	}

}

export default NavBar;