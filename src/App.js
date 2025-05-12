import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
// import Users from './Users'; // Импортируем компонент Users
// import Users from './Users'; // Импортируем компонент Users
// import Product from './Product'; // импортируем продукт
// import Employee from './Employee'; // Импортируем компонент Employee

// import TempInp from './TempInp';
// import Verdict from './Verdict';

// import Calculator from './Calculator';
// import TemperatureConverter from './TemperatureConverter';

// import './styles.css';

// import { styles } from "./styles";

import styled from "styled-components";

// import Block from "./Block";

const DIVA = styled.div`
  width: 150px;
  height: 150px;
  background-color: yellow;
  border: 2px solid black; 
`;

const DIVB = styled(DIVA)`
  background-color: green; 
  border-width: 3px; 
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

function App() {
	return (
		<Container>
			<DIVA />
			<DIVB />
			<DIVA />
		</Container>
	);
}

export default App;