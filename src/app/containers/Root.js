import React from 'react'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import Routes from '../routes'

// Maybe later do hot reloading with redux
const Root = ({ store, history }) => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
            </Router>
        </Provider>
    )
}

export default Root
