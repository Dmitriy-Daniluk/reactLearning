import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import Product from './Product'; // импортируем продукт
import User from './User'; // импортируем user
import Employee from './Employee'; // Импортируем компонент Employee

function App() {
    return (
        <div>
            <Employee lastName="Данилюк" firstName="Дмитрий" middleName="Витальевич" salary="1" />
            <Employee lastName="Киселев" firstName="Максим" middleName="Вадимович" salary="999999" />
            <Employee lastName="Иванов" firstName="Иван" middleName="Иванович" salary="100000" />
        </div>
    );
}

export default App;