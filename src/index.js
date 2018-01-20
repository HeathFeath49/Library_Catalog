import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ParentForm from './js/components/parentForm';
import MainHeader from './js/components/mainHeader';




function App(){
	return (
		<div>
			<MainHeader />			
			<ParentForm />
		</div>
	);
}

ReactDOM.render(<App />,document.getElementById('root'));