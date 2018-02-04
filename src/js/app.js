import React from 'react';
import MainView from './components/mainView';
import ParentForm from './components/forms/parentForm';
import NavBar from './components/navBar';

//// MAIN TO DO ///////
/*
>> Create a Style folder under js and move all styles (in javascript) there
	and have styles imported and used in js files instead of being locally defined
*/

class App extends React.Component {

	state = {
		response: '',
		view:'AccountView'
	};

	componentDidMount(){
		this.callApi()
		.then(res => this.setState({ response: res.express }))
		.catch(err => console.log(err));
	}

	callApi = async () => {
		const response = await fetch('/api/hello');
		const body = await response.json();

		if(response.status !== 200){
			throw Error(body.message);
		}

		return body;
	};

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