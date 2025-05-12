import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
import Product from './Product'; // импортируем продукт
import Employee from './Employee'; // Импортируем компонент Employee

const App = () => {
	const initUsers = [
		{ id: 1, name: 'John 1', email: 'john1@example.com' },
		{ id: 2, name: 'John 2', email: 'john1@example.com' },
		{ id: 3, name: 'John 3', email: 'john1@example.com' },
	];

	return (
		<div>
			<h1>Список пользователей</h1>
			<Users initUsers={initUsers} />
		</div>
	);
};


export default App;
