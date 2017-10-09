import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { format as formatDate } from 'date-fns'
import { setActiveThing } from '../../actions-and-reducers/home/home-actions.js'
import computerMouseImg from '../../../../assets/images/computer-mouse.jpg'
import PropTypes from 'prop-types'

class Home extends Component {

    static propTypes = {
        setActiveThing: PropTypes.func.isRequired,
        activeThing: PropTypes.any
    }

    state = {
        currentTime: formatDate(new Date(), 'MMMM Do YYYY, h:mm:ss a'),
        timer: null
    }

    componentWillMount() {
        this.props.setActiveThing('foooobarrrrrr')
    }

    componentDidMount() {
        this.setState({
            timer: setInterval(() => {
                this.setState({
                    currentTime: formatDate(new Date(), 'MMMM Do YYYY, h:mm:ss a')
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
            <div className="page-container">
                <h2>This is the homepage</h2>
                <h4>Today&apos;s date is {this.state.currentTime}</h4>
                <p><b>The active thing:</b> {this.props.activeThing}</p>
                <form name="set-active-thing" onSubmit={this.handleSetActiveThingSubmit}>
                    <label>
                        Change Active Thing to:&nbsp;
                        <input name="set-active-thing-input" type="text" /> (Press Enter)
                    </label>
                </form>
                <p>NODE_ENV: {process.env.NODE_ENV}</p>
                <br />
                <img src={computerMouseImg} width="400px" alt="" />
                <br />
                <br />
                <Link to={`${PP}users`}>Our Users</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeThing: state.home.active
    }
}

const actions = {
    setActiveThing
}

export default connect(mapStateToProps, actions)(Home)
