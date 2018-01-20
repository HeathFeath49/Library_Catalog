import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import LoginForm from './js/Components/loginForm';


function LargeText(props){
	return <h1>{props.text}</h1>
}

function Welcome(){
	return(
		<div id='welcome'>
			<LargeText text = 'Welcome!'/>
		</div>
	);
}

function App(){
	return (
		<div>
			<Welcome />			
			<LoginForm />
		</div>
	);
}

ReactDOM.render(<App />,document.getElementById('root'));