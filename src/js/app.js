import React from 'react';
import MainView from './components/mainView';
import ParentForm from './components/forms/parentForm';



class App extends React.Component {

	state = {
		response: '',
		noSignIn:true
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
		return (
			<div>
				<MainView />
				{if(this.state.notSignIn){
					return <ParentForm />
				}}
			</div>
		);
	}

}


export default App;