import React from 'react';
import MainView from './mainView';
import ParentForm from './forms/parentForm';
import NavBar from './navBar';

//// MAIN TO DO ///////
/*
>> Create a Style folder under js and move all styles (in javascript) there
	and have styles imported and used in js files instead of being locally defined
*/

class App extends React.Component {

	state = {
		response: '',
		view:'Login/SignUp'
	};

	/*componentDidMount(){
		this.callApi()
		.then(res => this.setState({ response: res.express }))
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/signUp');
		const body = await response.json();

		if(response.status !== 200){
			throw Error(body.message);
		}

		return body;
	};*/

	render(){

		var viewToRender;
		if(this.state.view === 'Login/SignUp'){
			viewToRender = <ParentForm />;
		}
		else if(this.state.view === 'AccountView'){
			viewToRender = <NavBar />
		}

		return (
			<div>
				<MainView />
				{viewToRender}
			</div>
		);
	}

}


export default App;