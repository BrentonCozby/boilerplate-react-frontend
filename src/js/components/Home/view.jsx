import React from 'react'
import { Link } from 'react-router-dom'

import computerMouseImg from '../../../../assets/images/computer-mouse.jpg'

export default ({
    currentTime,
    activeThing
}) => {

    return (
        <div className="page-container">
            <h2>This is the homepage</h2>
            <h4>Today's date is {currentTime}</h4>
            <h4>The active thing:</h4>
            <p>{activeThing}</p>
            <img src={computerMouseImg} width="400px" alt="" />
            <br />
            <Link to={`${PP}users`}>Our Users</Link>
        </div>
    )
}