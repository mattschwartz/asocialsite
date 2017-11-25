export const GET_SERVER_TIME = 'lairkeeper/home/GET_SERVER_TIME'
export const SET_SERVER_TIME = 'lairkeeper/home/SET_SERVER_TIME'

export function getServerTime() {
    return { type: GET_SERVER_TIME }
}

export function setServerTime(data) {
    return { type: SET_SERVER_TIME, data }
}
