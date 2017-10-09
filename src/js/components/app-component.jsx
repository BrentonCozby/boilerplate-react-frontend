import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PP } from '../../../config.js'

import Menu from './Menu/menu-component.jsx'
import NoMatch from './no-match-component.jsx'
import Footer from './footer-component.jsx'
import Home from './Home/home-component.jsx'
import Users from './Users/users-component.jsx'
import User from './User/user-component.jsx'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Switch>
                    <Route exact path={`${PP}`} component={Home} />
                    <Route exact path={`${PP}users`} component={Users} />
                    <Route exact path={`${PP}users/:userId`} component={User} />
                    <Route component={NoMatch}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App
