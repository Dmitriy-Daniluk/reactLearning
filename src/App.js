import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() {
	const [isBanned, setIsBanned] = useState(false);
	
	return (
		<div>
			<span>{isBanned ? 'Пользователь заблокирован' : 'Пользователь не заблокирован'}</span>
			{isBanned ? (
				<button onClick={() => setIsBanned(false)}>Разбанить</button>
			) : (
				<button onClick={() => setIsBanned(true)}>Забанить</button>
			)}
		</div>
	);
}


export default App;