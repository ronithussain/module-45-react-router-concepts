import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/user';
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h2>Users:{users.length}</h2>
            <div className='users'>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div> 
        </div>
    );
};

export default Users;