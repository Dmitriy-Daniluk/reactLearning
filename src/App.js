import logo from './logo.svg';
import './App.css';

import React from 'react';



function App() {
	const users = [
		{id: 1, name: 'name1', surn: 'surn1', age: 30},
		{id: 2, name: 'name2', surn: 'surn2', age: 31},
		{id: 3, name: 'name3', surn: 'surn3', age: 32},
	];

	const res = users.map(function(item) {
		return <p key={item.id}>
			<li>Имя пользователя: {item.name}, фамилия пользователя: {item.surn}, возраст пользователя: {item.age}</li>
		</p>;
	});
	// совесть не мучает?)
	return <div>
		<ul>
		{res}
		</ul>
	</div>;

}



export default App;