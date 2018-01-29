import React from 'react';

//Components//
import MainHeader from './mainHeader';
import ParentForm from './forms/parentForm';


class MainView extends React.Component{

	render(){

		return(
			<div>
				<MainHeader />
				<ParentForm />
			</div>
		)

	}

}

export default MainView;