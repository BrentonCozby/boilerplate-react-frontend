import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from 'actions-and-reducers/root-reducer.js'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose

const enhancer = composeEnhancers(
    applyMiddleware(reduxPromise, thunk)
    // other store enhancers if any
)

export default function configStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('./actions-and-reducers/root-reducer.js', () => {
            const nextRootReducer = require('./actions-and-reducers/root-reducer.js').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}
