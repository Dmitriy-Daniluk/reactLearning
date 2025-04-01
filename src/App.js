import logo from './logo.svg';
import './App.css';

import { nanoid } from 'nanoid'; 
import { useState } from 'react';



function App() 
{
	const [name_user, setName1] = useState('Дмитрий');
	const [group, setName2] = useState('И-2-23');
	const [age, setName3] = useState('18');
	const changeName = () => {
		setName1('Измененное имя');
	};
  return (
    <div>
      Имя пользователя: {name_user}, группа: {group}, его возраст: {age} <br />
	  <button onClick={changeName}>Изменить имя</button>
    </div>
  );
}


export default App;