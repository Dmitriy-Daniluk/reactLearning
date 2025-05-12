import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
// import Product from './Product'; // импортируем продукт
// import Employee from './Employee'; // Импортируем компонент Employee

// import TempInp from './TempInp';
// import Verdict from './Verdict';

// import Calculator from './Calculator';
// import TemperatureConverter from './TemperatureConverter';

// import './styles.css';

import { styles } from "./styles";

function App() {
	return (
		<div style={{
			width: '200px',
			border: '2px solid brown',
			padding: '10px',
			textAlign: 'center'
		}}>
			<button style={{
				color: 'orangered',
				fontWeight: 'bold'
			}}>
				text
			</button>
			<button style={{
				fontStyle: 'brown',
				color: 'brown'
			}}>
				text
			</button>
		</div>
	);
}


export default App;
