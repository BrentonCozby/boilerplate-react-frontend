import React, { Component } from 'react'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import View from './view.jsx'

class Menu extends Component {

    static contextTypes = {
        router: React.PropTypes.object
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
            <View
                {...this.state}
                menuClasses={menuClasses}
                menuBtnClasses={menuBtnClasses}
                toggleMenu={this.toggleMenu}
            >
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(
    mapStateToProps,
    {

    }
)(Menu)
