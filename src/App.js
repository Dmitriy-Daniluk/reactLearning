import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	function handleClick(event) {
		console.log(event);
		console.log(event.target);
	}

	return (
		<div>
			<button onClick={handleClick}>act</button>
		</div>
	);
}


export default App;