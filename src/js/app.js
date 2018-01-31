import React from 'react';
import MainView from './components/mainView';



class App extends React.Component {

	state = {
		response: ''
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
			</div>
		);
	}

}


export default App;