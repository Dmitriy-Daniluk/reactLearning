import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
	const [value, setValue] = useState('');
	
	function handleChange(event) {
		setValue(event.target.value);
	}
	
	return <div>
		<select value={value} onChange={handleChange}>
			<option>Симферополь</option>
			<option>Не Симферополь</option>
			<option>Москва</option>
			<option>Не Москва</option>
		</select>
		<p>
			ваш город: {value}
		</p>
	</div>;
}



export default App;