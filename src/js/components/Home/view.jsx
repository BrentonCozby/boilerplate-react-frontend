import React from 'react'

import computerMouseImg from '../../../../assets/images/computer-mouse.jpg'

export default ({
    currentTime,
    activeThing
}) => {

    return (
        <div className="Home">
            <h2>This is the homepage</h2>
            <h4>Today's date is {currentTime}</h4>
            <h4>The active thing:</h4>
            <p>{activeThing}</p>
            <img src={computerMouseImg} width="400px" alt=""/>
        </div>
    )
}