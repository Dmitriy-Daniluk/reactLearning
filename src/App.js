import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() {
	const [count, setCount] = useState(0);
	
	function clickLow() {
		setCount(count - 1);
	}
	function clickUp() {
		setCount(count + 1);
	}
	
	
	return <div>
		<span>{count}</span>
		<button onClick={clickUp}>увеличить значение</button>
		<button onClick={clickLow}>уменьшить значение</button>
	</div>;
}


export default App;