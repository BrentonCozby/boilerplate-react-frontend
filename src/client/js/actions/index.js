export function getOneThing() {
    return dispatch => {
        setTimeout(function() {
            dispatch({
                type: 'GET_ONE_THING',
                payload: 'this is the thing'
            })
        }, 100)
    }
}
