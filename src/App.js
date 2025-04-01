import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
	const texts = ['Симферополь', 'Не Симферополь', 'Москва', 'Не Москва'];
	const [value, setValue] = useState('');
	
	const options = texts.map((text, index) => {
	return <option key={index}>{text}</option>;
	});
	
	return <div>
		<select value={value} onChange={(event) => setValue(event.target.value)}>
			{options}
		</select>
		<p>
			ваш выбор: {value}
		</p>
	</div>;
}


export default App;