import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
import Product from './Product'; // импортируем продукт
import Employee from './Employee'; // Импортируем компонент Employee

import TempInp from './TempInp';
import Verdict from './Verdict';

function App() {
	const [temp, setTemp] = useState(0);

	return (
		<div>
			<h1>Калькулятор состояния воды</h1>
			<TempInp temp={temp} setTemp={setTemp} />
			<Verdict temp={temp} />
		</div>
	);
}


export default App;
