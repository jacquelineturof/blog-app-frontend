import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/updateObject'

const initialState = {
    token: null,
    username: '',
    isAdmin: false,
    loading: false
}

const authStart = ( state, action ) => {
    return updateObject(state, { 
        error: null, 
        loading: true, 
        token: null, 
        username: '',
        isAdmin: false 
    })
}

const loginUser =  ( state, action ) => {
    return updateObject( state, { 
        token: action.payload.token,
        username: action.payload.username,
        isAdmin: action.payload.isAdmin,
        loading: false
    })
}

const logoutUser = ( state, action ) => {
    return updateObject( state, {
        token: null,
        username: '',
        isAdmin: false
    })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.START_AUTH: return authStart(state, action)
        case actionTypes.LOGIN_AUTH_USER: return loginUser(state, action)
        case actionTypes.LOGOUT_AUTH_USER: return logoutUser(state, action)
        default: return state
    }
}

export default reducer