import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
	const obj = {name: 'john', surname: 'smit'};
	
	return (
		<>
		<p>
			name: <span>{obj.name}</span>
			<br></br>
			surname: <span>{obj.surname}</span>
		</p>
		</>
	);
}

export default App;