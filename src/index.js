import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import MainView from './js/components/mainView';




function App(){
	return (
		<div>
			<MainView />
		</div>
	);
}

ReactDOM.render(<App />,document.getElementById('root'));