import React from 'react';



class Selection extends React.Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return(
			<div>
				<select value = {this.props.selectedVal} onChange={this.props.handler}>
					<option value='title'>Title</option>
					<option value='author'>Author</option>
					<option value='genre'>Genre</option>
				</select>
			</div>
		)
	}


}

class Filter extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			selectedVal:'title'
		}

		this.handleSelectionChange = this.handleSelectionChange.bind(this);
	}

	handleSelectionChange(e){
		console.log(this.state.selectedVal);
		this.setState({selectedVal:e.target.value});

	}

	render(){
		return(
			<Selection handler={(e)=>this.handleSelectionChange(e)} />
		)
	}

}

export default Filter;