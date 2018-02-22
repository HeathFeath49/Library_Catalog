import React from 'react';


class Selection extends React.Component{

	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	render(){
		return(
			<div>
				<select value = {props.selectedVal} onChange{props.handler}>
					<option value='title'>Title</option>
					<option value='author'>Author</option>
					<option value='genre'>Genre</option>
				</select>
			</div>
		)
	}


}

export default Selection;