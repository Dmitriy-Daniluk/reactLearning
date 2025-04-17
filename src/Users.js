import React, { useState } from 'react';
import User from './User'; 


const Users = () => {
	const [users, setUsers] = useState([
			{ id: 1, name: 'John John', email: 'john@john.com' },
			{ id: 2, name: 'ABC ABC', email: 'ABC@ABC.com' },
			{ id: 3, name: 'BBB BBB', email: 'BBB@example.com' },
	]);

	const banUser = (id) => {
			setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
			console.log('Пользователь с ID ',id ,' забанен');
	};

	return (
			<div>
					{users.map(user => (
							<User key={user.id} user={user} onBan={banUser} /> 
					))}
			</div>
	);
};


export default Users;