import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
// import Product from './Product'; // импортируем продукт
// import Employee from './Employee'; // Импортируем компонент Employee

import TempInp from './TempInp';
import Verdict from './Verdict';

import Calculator from './Calculator';
import TemperatureConverter from './TemperatureConverter';

import './styles.css';

function App() {
	const class1 = {
		width: '200px',
		border: '2px solid brown',
		padding: '10px',
		textAlign: 'center',
	};

	const class2 = {
		color: 'orangered',
		fontWeight: 'bold',
	};

	const class3 = {
		fontStyle: 'italic',
		color: 'brown',
	};

	const class4 = {
		backgroundColor: 'orange',
		fontWeight: 'bold',
		color: 'white',
	};

	return (
		<div style={class1}>
			<button style={class2}>text</button>
			<button style={class3}>text</button>
		</div>
	);
}

export default App;
