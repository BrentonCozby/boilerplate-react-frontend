import { createStore, applyMiddleware, compose } from 'redux'
import reduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(reduxPromise, thunk),
    // other store enhancers if any
);

export default function configStore(initialState) {
    const store = createStore(rootReducer, initialState, enhancer)

    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index.js').default
            store.replaceReducer(nextRootReducer)
        })
    }

  return store
}
