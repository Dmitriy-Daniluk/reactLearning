import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	function msg1() {
		alert(1)
	}

	function msg2() {
		alert(2)
	}
	
	function msg3() {
		alert(3)
	}

	return <div>
		<button onClick={msg1}>act1</button>
		<button onClick={msg2}>act2</button>
		<button onClick={msg3}>act3</button>
	</div>;
}


export default App;