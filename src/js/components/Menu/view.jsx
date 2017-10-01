import React from 'react'
import { Link } from 'react-router-dom'

export default ({
    toggleMenu,
    isMenuVisible,
    menuBtnClasses,
    menuClasses
}) => {

    return (
        <div>
            <div className={menuBtnClasses} onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <div className={menuClasses}>
                <Link onClick={toggleMenu} to={PP} className="Menu-item">Home</Link>
            </div>
        </div>
    )
}