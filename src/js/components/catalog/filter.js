import React from 'react';
const styles = require('../../styles');


class Selection extends React.Component{

	constructor(props){
		super(props);
		
	}

	render(){
		return(
			<div style={styles.form.selectDiv}>
				By:
				<select style={styles.form.selectMenu} onChange={this.props.handler}>
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
			selectedVal:'title',
			search:''

		}

		this.handleSelectionChange = this.handleSelectionChange.bind(this);
	}

	handleSelectionChange(e){
		this.setState({selectedVal:e.target.value});

	}

	render(){
		return(
			<div style={styles.form.filter}>
				<form>
					Search:
					<input style={styles.form.searchField}type='text' name='searchField'/>
					<Selection handler={(e)=>this.handleSelectionChange(e)} />
					<input type='submit' value='Submit'/>
				</form>
			</div>
		)
	}

}

export default Filter;