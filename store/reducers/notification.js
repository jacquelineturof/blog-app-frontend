import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../../utility/updateObject'

const initialState = {
    message: null,
    error: null
}

const setError = ( state, action ) => {
    return updateObject(state, { error: action.payload })
}

const setMessage = ( state, action ) => {
    return updateObject(state, { message: action.payload })
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_ERROR: return setError(state, action)
        case actionTypes.SET_MESSAGE: return setMessage(state, action)
        default: return state
    }
}

export default reducer