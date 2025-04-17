import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Product from './Product'; // импортируем продукт
import User from './User'; // импортируем user

function App() {
	return <div>
		<User />
		<User />
		<User />
		<User />
	</div>;
}

export default App;