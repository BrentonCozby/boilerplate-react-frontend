import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PUBLIC_PATH } from '../../../config.js'

import Menu from './Menu/index.jsx'
import NoMatch from './NoMatch.jsx'
import Footer from './Footer.jsx'
import Home from './Home/index.jsx'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Switch>
                    <Route exact path={`${PUBLIC_PATH}/`} component={Home} />
                    <Route component={NoMatch}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App
