export function addUser({userId, userData}) {
    return {
        type: 'ADD_USER',
        payload: {
            userId,
            userData
        }
    }
}

export function setActiveUser(userId) {
    return {
        type: 'SET_ACTIVE_USER',
        payload: userId
    }
}