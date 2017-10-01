import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveThing } from '../../actions/home.js'
import View from './view.jsx'

class Home extends Component {

    state = {
        currentTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        timer: null
    }

    componentWillMount() {
        this.props.setActiveThing('foooobarrrrrr')
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

    handleSetActiveThingSubmit = (event) => {
        event.preventDefault()

        const inputElement = event.currentTarget.elements['set-active-thing-input']
        const newValue = inputElement.value

        this.props.setActiveThing(newValue)

        inputElement.value = ''
    }

    render() {
        return (
            <View
                currentTime={this.state.currentTime}
                activeThing={this.props.activeThing}
                handleSetActiveThingSubmit={this.handleSetActiveThingSubmit}
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
