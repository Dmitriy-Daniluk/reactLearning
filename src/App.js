import logo from './logo.svg';
import './App.css';

import React from 'react';


function App() {
	const num1 = 3;
	const num2 = 2;

	return <div>
		result: {num1 ** num2}
		{/* result: 9 */}
	</div>;
}

// function App() {
// 	const name = 'john';
// 	const surname = 'smit';
	
// 	return <div>
// 		result: {name + ' ' + surname}
// 		{/* result: john smit */}
// 	</div>;
// }
	
	
// function App() {
// 	const num = 4;

// 	return <div>
// 		result: {Math.sqrt(num)}
// 		{/* result: 2 */}
// 	</div>;
// }

export default App;