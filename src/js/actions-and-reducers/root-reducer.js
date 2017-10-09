import { combineReducers } from 'redux'

import homeReducer from './home/home-reducers.js'
import usersReducer from './users/users-reducers.js'

const rootReducer = combineReducers({
    home: homeReducer,
    users: usersReducer
})

export default rootReducer
