export const SET_NOT_LOADING = 'lairkeeper/data/SET_NOT_LOADING'
export const SET_LOADING = 'lairkeeper/data/SET_LOADING'
export const SET_ERROR = 'lairkeeper/data/SET_ERROR'
export const CLEAR_ERROR = 'lairkeeper/data/CLEAR_ERROR'

export function setNotLoading() {
    return { type: SET_NOT_LOADING }
}

export function setLoading() {
    return { type: SET_LOADING }
}

export function setError(error) {
    return { type: SET_ERROR, error }
}

export function clearError() {
    return { type: CLEAR_ERROR }
}
