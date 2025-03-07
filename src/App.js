import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	const age = 19;
	
	return <div>
		{age >= 18 ? <p>Вам 18 или больше</p> : <p>Меньше 18 лет</p>}
	</div>;
}


export default App;