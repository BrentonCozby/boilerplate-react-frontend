const INITAL_STATE = {
    active: null
}

export default function(state = INITAL_STATE, action) {
    switch(action.type) {
        case 'SET_ACTIVE_THING':
            return {...state, active: action.payload}
        default:
            return state
    }
}
