import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	function getDigitsSum(num) {
		let sum = 0;
		while (num > 0) {
			sum += num % 10;
			num = Math.floor(num / 10);
		}
		return sum;
	}
	
	const sum = getDigitsSum(123);
	
	return <div>{sum}</div>;
}


export default App;