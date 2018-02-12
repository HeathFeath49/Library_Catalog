import React from 'react';
import MainView from './mainView';
import ParentForm from './forms/parentForm';
import NavBar from './navBar';

//// MAIN TO DO ///////
/*
>> Create a Style folder under js and move all styles (in javascript) there
	and have styles imported and used in js files instead of being locally defined

>> Insert sign up data into database
	>> Do not insert if username is not unique to database
	>> Do not insert if email is not unique to database

*/



class App extends React.Component {

	state = {
		response: '',
		view:'AccountView'
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