import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() 
{
	const [name_user, setName1] = useState('Дмитрий');
	const [surname_user, setName2] = useState('Данилюк');
	const changeName = () => {
		setName1('Измененное имя');
	};
  return (
    <div>
      Имя пользователя: {name_user} {surname_user}<br />
			<button onClick={changeName}>Изменить имя</button>
			<button onClick={() => setName2('Измененная фамилия')}>Изменить фамилию</button>
    </div>
  );
}


export default App;