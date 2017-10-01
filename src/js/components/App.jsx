import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PP } from '../../../config.js'

import Menu from './Menu/index.jsx'
import NoMatch from './NoMatch.jsx'
import Footer from './Footer.jsx'
import Home from './Home/index.jsx'
import Users from './Users/index.jsx'
import User from './Users/User/index.jsx'

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
