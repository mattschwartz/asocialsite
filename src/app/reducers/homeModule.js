import { SET_SERVER_TIME } from '../actions/homeModule'

const initialState = {
    serverTime: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_SERVER_TIME:
            return {
                ...state,
                serverTime: action.data
            }

        default:
            return state
    }
}
