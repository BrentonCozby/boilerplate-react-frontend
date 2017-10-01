import React from 'react'
import User from './User/index.jsx'
import { Link } from 'react-router-dom'

export default ({
    users
}) => {

    return (
        <div className="page-container">
            <ul>
                {users && Object.keys(users).map(userId => (
                    <li key={userId}>
                        <Link to={`${PP}users/${userId}`}>{users[userId].name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
