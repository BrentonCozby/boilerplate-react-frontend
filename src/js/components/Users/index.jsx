import React, { Component } from 'react'
import { connect } from 'react-redux'

import View from './view.jsx'

class Users extends Component {
    render() {
        const {
            users
        } = this.props

        return (
            <View users={users} />
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.allUsers
})

const actions = {

}

export default connect(mapStateToProps, actions)(Users)