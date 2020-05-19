import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/updateObject'

const initialState = {
    message: null,
    error: null
}

const setError = ( state, action ) => {
    return updateObject(state, { error: action.payload, message: null })
}

const setMessage = ( state, action ) => {
    return updateObject(state, { message: action.payload, error: null })
}

const clearNotification = ( state, action ) => {
    return updateObject(state, { error: null, message: null })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ERROR: return setError(state, action)
        case actionTypes.SET_MESSAGE: return setMessage(state, action)
        case actionTypes.CLEAR_NOTIFICATION: return clearNotification(state, action)
        default: return state
    }
}

export default reducer