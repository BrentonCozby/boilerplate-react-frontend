import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getOneThing } from '../../actions/index.js'
import View from './view.jsx'

class Home extends Component {

    state = {
        currentTime: null
    }

    componentWillMount() {
        this.props.getOneThing('the things is this')
    }

    componentDidMount() {
        const _home = this
        setInterval(function() {
            _home.setState({
                currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
            })
        }, 1000)
    }

    render() {
        return (
            <View {...this.state} {...this.props}></View>
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
