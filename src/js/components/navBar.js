import React from 'react';
const styles = require('../styles');



function NavItem(props){
	return (
		<div style={styles.btn.btnNav}>
			<div  onClick ={props.onClickHandle} style={props.style} >{props.value}</div>
		</div>
	)
}


class NavBar extends React.Component{



	constructor(props){
		super(props);

		this.updateState = this.updateState.bind(this);
		this.determineStyle = this.determineStyle.bind(this);

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

	determineStyle(value){
		var style;

		if(this.state.selectedValue === value){
			style=styles.btn.btnSelected;
		}
		else{
			style=styles.btn.btnNotSelected;
		}
		return style;
	}

	render(){
		var libEditNavItem = <NavItem value='Edit Library' onClickHandle={()=>this.updateState('Edit Library')} style={this.determineStyle('Edit Library')}/>
		return(

			<div style={styles.block}>
				<NavItem value='Library' onClickHandle={()=>this.updateState('Library')} style={this.determineStyle('Library')}/>
				<NavItem value='My Checkouts' onClickHandle={()=>this.updateState('My Checkouts')} style={this.determineStyle('My Checkouts')}/>
				<NavItem value='My Account' onClickHandle={()=>this.updateState('My Account')} style={this.determineStyle('My Account')}/>
				
				{this.state.admin? libEditNavItem : null}

			</div>	

		)

	}

}

export default NavBar;