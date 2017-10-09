import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Menu extends Component {

    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        isMenuVisible: false
    }

    toggleMenu = () => {
        this.setState({ isMenuVisible: !this.state.isMenuVisible })
    }

    render() {
        const menuBtnClasses = classnames({
            'menu-button': true,
            'close': this.state.isMenuVisible
        })
        const menuClasses = classnames({
            'Menu': true,
            'visible': this.state.isMenuVisible
        })
        return (
            <div>
                <div className={menuBtnClasses} onClick={this.toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={menuClasses}>
                    <Link onClick={this.toggleMenu} to={PP} className="Menu-item">Home</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { // eslint-disable-line no-unused-vars
    return {

    }
}

const actions = {

}

export default connect(mapStateToProps, actions)(Menu)
