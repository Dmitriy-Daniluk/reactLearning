import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
import Product from './Product'; // импортируем продукт
import Employee from './Employee'; // Импортируем компонент Employee

const App = () => {
	const [users, setUsers] = useState([
		{ id: 1, name: 'John 1', email: 'john1@example.com' },
		{ id: 2, name: 'John 2', email: 'john1@example.com' },
		{ id: 3, name: 'John 3', email: 'john1@example.com' },
	]);

	const banUser = (id) => {
		setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
		console.log('Пользователь с ID ', id, ' забанен');
	};

	const editUser = (id, updatedFields) => {
		setUsers(prevUsers => prevUsers.map(user =>
			user.id === id ? { ...user, ...updatedFields } : user
		));
	};

	const UserField = ({ id, text, type, isEdit, editUser }) => {
		return isEdit ? (
			<input
				value={text}
				onChange={event => editUser(id, type, event.target.value)}
			/>
		) : (
			<span>{text}</span>
		);
	};

	return (
		<div>
			<h1>Список пользователей</h1>
			<Users users={users} onBan={banUser} onEdit={editUser} UserField={UserField} />
		</div>
	);
};


export default App;
