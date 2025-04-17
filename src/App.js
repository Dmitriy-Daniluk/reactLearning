import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
	const [value, setValue] = useState('');
	
	
	return <div>
		<select value={value} onChange={event => setValue(event.target.value)}>
			<option value="1">мне 0 - 12 лет</option>
			<option value="2">мне 13 - 17 лет</option>
			<option value="3">мне 18 - 25 лет</option>
			<option value="4">мне больше 25 лет</option>
		</select>
		<p>
			{value === '1' && 'вы выбрали 0 - 12 лет'}
			{value === '2' && 'вы выбрали 13 - 17 лет'}
			{value === '3' && 'вы выбрали 18 - 25 лет'}
			{value === '4' && 'вы выбрали больше 25 лет'}
		</p>
	</div>;
}


export default App;