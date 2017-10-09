const INITAL_STATE = {
    allUsers: {
        '1234': {
            name: 'Bob Ross',
            imageUrl: 'https://yt3.ggpht.com/-uJh4oSQAwak/AAAAAAAAAAI/AAAAAAAAAAA/AMGKfKvDP3w/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
            websiteUrl: 'https://www.bobross.com/',
            userId: '1234'
        }
    },
    active: null
}

export default function (state = INITAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER': {
            const { payload } = action

            const newUser = {
                [payload.userId]: payload.userData
            }

            return Object.create({}, state, {
                allUsers: newUser
            })
        }
        case 'SET_ACTIVE_USER': {
            const { payload } = action

            const selectedUser = { ...state.allUsers[payload] }
            
            return {
                ...state,
                active: selectedUser
            }
        }    
        default:
            return state
    }
}
