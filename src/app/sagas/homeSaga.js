import { call, put, select } from 'redux-saga/effects'
import { SET_SERVER_TIME } from '../actions/homeModule'
import { CLEAR_ERROR, SET_ERROR, SET_NOT_LOADING, SET_LOADING } from '../actions/dataModule'

export function* getServerTimeAsync(api) {
    yield put({ type: SET_LOADING })

    const res = yield api.getServerTime()
    if (!res.ok) {
        yield put({ type: SET_ERROR, error: (res.data || {}).errorMessage || res.problem })
    } else {
        yield put({ type: SET_SERVER_TIME, data: res.data.data.serverTime })
    }

    yield put({ type: SET_NOT_LOADING })
}
