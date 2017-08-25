import React from 'react'

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

            </div>
        </div>
    )
}