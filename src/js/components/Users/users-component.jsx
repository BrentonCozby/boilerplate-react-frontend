import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Users extends Component {

    static propTypes = {
        users: PropTypes.objectOf(PropTypes.object)
    }

    render() {
        const { users } = this.props

        return (
            <div className="page-container">
                <ul>
                    {users && Object.keys(users).map(userId => (
                        <li key={userId}>
                            <Link to={`${PP}users/${userId}`}>{users[userId].name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.users.allUsers
})

const actions = {

}

export default connect(mapStateToProps, actions)(Users)