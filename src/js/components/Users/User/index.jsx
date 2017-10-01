import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import View from './view.jsx'
import { setActiveUser } from '../../../actions/users.js'

class User extends Component {

    componentWillMount() {
        this.props.setActiveUser(this.props.match.params.userId)
    }

    render() {
        const {
            activeUser
        } = this.props

        return (
            <View
                name={activeUser && activeUser.name}
                imageUrl={activeUser && activeUser.imageUrl}
                websiteUrl={activeUser && activeUser.websiteUrl}
            />
        )
    }
}

const mapStateToProps = state => ({
    activeUser: state.users.active
})

const actions = {
    setActiveUser
}

export default connect(mapStateToProps, actions)(User)