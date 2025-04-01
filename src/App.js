import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	function func1(arg, event) {
    console.log(arg, event);
  }

  function func2(arg1, arg2, event) {
    console.log(arg1, arg2, event);
  }

  function func3(event, arg) {
    console.log(event, arg);
  }

  function func4(arg1, event, arg2) {
    console.log(arg1, event, arg2);
  }

	return (
		<div>
      <button onClick={event => func1('eee', event)}>act 1</button>

      <button onClick={event => func2('eee', event)}>act 2</button>

      <button onClick={event => func3(event, 'eee')}>act 3</button>

      <button onClick={event => func4('arg1', event, 'arg2')}>act 4</button>
		</div>	
	);
}


export default App;