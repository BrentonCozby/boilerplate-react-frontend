export function setActiveThing(thing) {
    return dispatch => {
        setTimeout(function() {
            dispatch({
                type: 'SET_ACTIVE_THING',
                payload: thing
            })
        }, 100)
    }
}