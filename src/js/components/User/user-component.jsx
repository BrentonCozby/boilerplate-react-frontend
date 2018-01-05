import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setActiveUser } from 'actions-and-reducers/users/users-actions.js'
import PropTypes from 'prop-types'

class User extends Component {

    static propTypes = {
        setActiveUser: PropTypes.func.isRequired,
        match: PropTypes.object,
        activeUser: PropTypes.object
    }

    componentWillMount() {
        this.props.setActiveUser(this.props.match.params.userId)
    }

    render() {
        const activeUser = this.props.activeUser || {}
        const { name, imageUrl, websiteUrl } = activeUser

        return (
            <div className="page-container">
                <h1>{name}</h1>
                <img style={{ maxWidth: '400px' }} src={imageUrl} alt={name} />
                <p><a target="_blank" rel="noopener" href={websiteUrl}>website</a></p>
            </div>
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