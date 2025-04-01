import logo from './logo.svg';
import './App.css';

import { useState } from 'react';



function App() {
	const [checked, setChecked] = useState(true);
	let message;
	const [checked2, setChecked2] = useState(true);
	let message2;

	if (checked2) {
		message2 = <p>Новый текст</p>
	}

	if (checked) {
		message = <div>
			<h2>Вам 18 и больше</h2>
			<p>только если больше 18 лет</p>
		</div>;
	} else {
		message = <div>
			<p>слишком молод</p>
		</div>;
	}


	return <div>
		<div>
			Задание 1: <br />
			Подтвердите, что вам есть 18 лет:
			<input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
			<div>{message}</div>
		</div>
		<div>
			Задание 2: <br />
			Попробуйте нажать на галочку:
			<input type="checkbox" checked={checked2} onChange={() => setChecked2(!checked2)} />
			<div>{message2}</div>
		</div>
	</div>;
}



export default App;