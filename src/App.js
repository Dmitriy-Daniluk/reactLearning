import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	let text;
	const isAdult = true;
	
	if (isAdult) {
		text = <p>Совершеннолетний</p>;
	} else {
		text = <p>Не Совершеннолетний</p>;
	}
	
	return <div>
		{text}
	</div>;
}


export default App;