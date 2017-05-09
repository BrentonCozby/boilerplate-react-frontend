import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getOneThing } from '../actions/index.js'

class Home extends Component {

    componentWillMount() {
        this.props.getOneThing()
    }

    render() {
        return (
            <div className="Home">
                <h2>This is the homepage</h2>
                <h4>The active thing:</h4>
                <p>{this.props.activeThing}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeThing: state.things.active
    }
}

export default connect(
    mapStateToProps,
    {
        getOneThing
    }
)(Home)
