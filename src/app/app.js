import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { configureStore, history } from './store/configureStore'
import Root from './containers/Root'

ReactDOM.render(
    <AppContainer>
        <Root store={configureStore()} history={history} />
    </AppContainer>,
    document.getElementById('content')
)
