import { combineReducers } from 'redux'
import menuReducer from './menu'

const rootReducer = combineReducers({
    menu: menuReducer
})

export default rootReducer