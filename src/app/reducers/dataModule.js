import { CLEAR_ERROR, SET_ERROR, SET_LOADING, SET_NOT_LOADING } from '../actions/dataModule'

const initialState = {
    errorMessage: null,
    hasError: false,
    isLoading: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CLEAR_ERROR:
            return {
                ...state,
                hasError: false,
                errorMessage: null
            }

        case SET_ERROR:
            return {
                ...state,
                hasError: true,
                errorMessage: action.error
            }

        case SET_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case SET_NOT_LOADING:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state
    }
}
