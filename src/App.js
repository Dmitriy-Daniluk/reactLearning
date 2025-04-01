import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return (
		<div>
			<input value={value} onChange={handleChange} />
			<p>Количество символов в строке: {value.length}</p>
		</div>
	);
}


export default App;