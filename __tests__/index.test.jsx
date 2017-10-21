import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import configStore from '../src/js/store.js'
import App from '../src/js/components/app-component.jsx'

describe('app-component', () => {
    it('renders App with router and store without crashing', () => {
        const store = configStore()

        const wrappedApp = renderer.create(
            <Provider store={store}>
                <Router>
                    <Route path={PP} component={App} />
                </Router>
            </Provider>
        )
        
        expect(wrappedApp.toJSON()).toMatchSnapshot()
    })
})