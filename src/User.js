import React from 'react';

function User({ id, name, surname, age }) {
    return (
        <div>
            Id: <span>{id}</span>,
            Имя: <span>{name}</span>,
            Фамилия: <span>{surname}</span>,
            Возраст: <span>{age}</span>
        </div>
    );
}

export default User;