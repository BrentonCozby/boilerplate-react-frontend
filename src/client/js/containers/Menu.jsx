import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

import { rootUrl } from '../../../../config.js'

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
        return (
            <div>
                <div className={(this.state.isMenuVisible) ? 'menu-button close' : 'menu-button'} onClick={this.toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <div className={(this.state.isMenuVisible) ? 'Menu visible' : 'Menu'}>

                </div>
            </div>
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
