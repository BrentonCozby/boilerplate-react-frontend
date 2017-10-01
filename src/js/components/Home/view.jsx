import React from 'react'
import { Link } from 'react-router-dom'

import computerMouseImg from '../../../../assets/images/computer-mouse.jpg'

export default ({
    currentTime,
    activeThing,
    handleSetActiveThingSubmit
}) => {

    return (
        <div className="page-container">
            <h2>This is the homepage</h2>
            <h4>Today's date is {currentTime}</h4>
            <p><b>The active thing:</b> {activeThing}</p>
            <form name="set-active-thing" onSubmit={handleSetActiveThingSubmit}>
                <label>
                    Change Active Thing to:&nbsp;
                    <input name="set-active-thing-input" type="text" /> (Press Enter)
                </label>
            </form>
            <p>NODE_ENV: {process.env.NODE_ENV}</p>
            <br />
            <img src={computerMouseImg} width="400px" alt="" />
            <br />
            <br />
            <Link to={`${PP}users`}>Our Users</Link>
        </div>
    )
}