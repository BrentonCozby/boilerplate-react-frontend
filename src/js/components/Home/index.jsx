import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveThing } from '../../actions/index.js'
import View from './view.jsx'

class Home extends Component {

    state = {
        currentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        timer: null
    }

    componentWillMount() {
        this.props.setActiveThing('the things is this')
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    currentTime: moment().format('MMMM Do YYYY, h:mm:ss a')
                })
            }, 1000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timer)
    }

    render() {
        return (
            <View
                currentTime={this.state.currentTime}
                activeThing={this.props.activeThing}
            ></View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        activeThing: state.home.active
    }
}

export default connect(
    mapStateToProps,
    {
        setActiveThing
    }
)(Home)
