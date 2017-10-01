import { combineReducers } from 'redux'

import homeReducer from './home.js'
import usersReducer from './users.js'

const rootReducer = combineReducers({
    home: homeReducer,
    users: usersReducer
})

export default rootReducer
