import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import data from './dataModule'
import home from './homeModule'

const rootReducer = combineReducers({
    data,
    home,
    router,
})

export default rootReducer
