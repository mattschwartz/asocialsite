import React from 'react'
import { Route, Switch } from 'react-router'
import AppLayout from './containers/AppLayout'
import HomePage from './containers/HomePage'
import ServerInfo from './containers/ServerInfo'

export default () => (
    <AppLayout>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/server-info" component={ServerInfo} />
        </Switch>
    </AppLayout>
)
