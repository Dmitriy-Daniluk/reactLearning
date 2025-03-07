import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	let text;
	const isAdmin = true;
	
	if (isAdmin) {
		text = <div>
			Вы администратор <br></br> хорошего дня
		</div>;
	} 
	
	return <div>
		{text}
	</div>;
}


export default App;