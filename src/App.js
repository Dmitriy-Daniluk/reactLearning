import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() {
	const [value, setValue] = useState('text');
	const [value2, setValue2] = useState('text');
	
	function handleChange(event) {
		setValue(event.target.value); 
	}

	function handleChange2(event) {
		setValue2(event.target.value); 
	}
	
	return <div>
		<input value={value} onChange={handleChange} />
		<p>text1: {value}</p>
		<input value={value2} onChange={handleChange2} />
		<p>text2: {value2}</p>
	</div>;
}


export default App;