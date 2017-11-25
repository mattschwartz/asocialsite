import { takeLatest } from 'redux-saga/effects'
import * as HomeSaga from './homeSaga'
import * as HomeTypes from '../actions/homeModule'
import { api } from '../api'

export function* root() {
    yield [
        takeLatest(HomeTypes.GET_SERVER_TIME, HomeSaga.getServerTimeAsync, api),
    ]
}
