import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Menu from 'components/Menu/menu-component.jsx'
import NoMatch from 'components/no-match-component.jsx'
import Footer from 'components/footer-component.jsx'
import Home from 'components/Home/home-component.jsx'
import Users from 'components/Users/users-component.jsx'
import User from 'components/User/user-component.jsx'

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
