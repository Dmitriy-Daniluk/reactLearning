import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Product from './Product'; // импортируем продукт
import User from './User'; // импортируем user
import Employee from './Employee'; // Импортируем компонент Employee

const users = [
	{ id: 1, name: 'user1', surn: 'surn1', age: 30 },
	{ id: 2, name: 'user2', surn: 'surn2', age: 31 },
	{ id: 3, name: 'user3', surn: 'surn3', age: 32 },
];

function App() {
	return (
			<div>
					<table>
							<thead>
									<tr>
											<th>Имя</th>
											<th>Фамилия</th>
											<th>Возраст</th>
									</tr>
							</thead>
							<tbody>
							{users.map(user => (
								<User 
									key={user.id} // Добавляем уникальный ключ для каждого компонента
									name={user.name} 
									surn={user.surn} 
									age={user.age} 
								/>
							))}
							</tbody>
					</table>
			</div>
	);
}


export default App;