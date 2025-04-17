import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
import Product from './Product'; // импортируем продукт
import Employee from './Employee'; // Импортируем компонент Employee

function App() {
	return (
			<div>
					<h1>Список пользователей</h1>
					<Users /> 
			</div>
	);
}


export default App;