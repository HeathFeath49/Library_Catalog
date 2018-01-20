import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LoginForm from './js/components/loginForm';
import MainHeader from './js/components/mainHeader';




function App(){
	return (
		<div>
			<MainHeader />			
			<LoginForm />
		</div>
	);
}

ReactDOM.render(<App />,document.getElementById('root'));