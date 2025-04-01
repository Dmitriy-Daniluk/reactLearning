import logo from './logo.svg';
import './App.css';

import React from 'react';



function App() {
	const names = [
		{name: 'name1', surn: 'surn1', age: 30},
		{name: 'name2', surn: 'surn2', age: 31},
		{name: 'name3', surn: 'surn3', age: 32},
	];

	const res = names.map(function(item, index) {
		return <ul><p key={index}>
			<li>Имя пользователя: {item.name}, фамилия пользователя: {item.surn}, возраст пользователя: {item.age}</li>
		</p>
		</ul>;
	});
	return <div>
		<ul>
			{res}
		</ul>
	</div>;

}



export default App;